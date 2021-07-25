import {
    b2ContactFilter,
    b2Fixture,
    b2RayCastInput,
    b2RayCastOutput,
    b2Rot,
    b2ShapeType,
    b2TimeStep,
    b2Transform,
    b2Vec2,
    b2Verify,
    b2_linearSlop,
} from "@box2d/core";

import { computeDistance } from "./b2_compute_distance";
import { b2ParticleFlag } from "./b2_particle";
import type { b2ParticleSystem } from "./b2_particle_system";

export abstract class b2FixtureParticleQueryCallback {
    protected m_system: b2ParticleSystem;

    public constructor(system: b2ParticleSystem) {
        this.m_system = system;
    }

    public ReportFixture(fixture: b2Fixture): boolean {
        if (fixture.IsSensor()) {
            return true;
        }
        const shape = fixture.GetShape();
        const childCount = shape.GetChildCount();
        for (let childIndex = 0; childIndex < childCount; childIndex++) {
            const aabb = fixture.GetAABB(childIndex);
            const enumerator = this.m_system.GetInsideBoundsEnumerator(aabb);
            let index: number;
            // eslint-disable-next-line no-cond-assign
            while ((index = enumerator.GetNext()) >= 0) {
                this.ReportFixtureAndParticle(fixture, childIndex, index);
            }
        }
        return true;
    }

    public abstract     ReportFixtureAndParticle(_fixture: b2Fixture, _childIndex: number, _index: number): void;
}

export class b2ParticleSystem_UpdateBodyContactsCallback extends b2FixtureParticleQueryCallback {
    public m_contactFilter: b2ContactFilter | null = null;

    public ShouldCollideFixtureParticle(fixture: b2Fixture, particleIndex: number): boolean {
        // Call the contact filter if it's set, to determine whether to
        // filter this contact.  Returns true if contact calculations should
        // be performed, false otherwise.
        if (this.m_contactFilter) {
            const flags = this.m_system.GetFlagsBuffer();
            if (flags[particleIndex] & b2ParticleFlag.b2_fixtureContactFilterParticle) {
                return this.m_contactFilter.ShouldCollideFixtureParticle(fixture, this.m_system, particleIndex);
            }
        }
        return true;
    }

    public ReportFixtureAndParticle(fixture: b2Fixture, childIndex: number, a: number): void {
        const s_n = b2ParticleSystem_UpdateBodyContactsCallback.ReportFixtureAndParticle_s_n;
        const s_rp = b2ParticleSystem_UpdateBodyContactsCallback.ReportFixtureAndParticle_s_rp;
        const ap = this.m_system.m_positionBuffer.data[a];
        const n = s_n;

        const d = computeDistance(fixture.GetShape(), fixture.GetBody().GetTransform(), ap, n, childIndex);
        if (d < this.m_system.m_particleDiameter && this.ShouldCollideFixtureParticle(fixture, a)) {
            const b = fixture.GetBody();
            const bp = b.GetWorldCenter();
            const bm = b.GetMass();
            const bI = b.GetInertia() - bm * b.GetLocalCenter().LengthSquared();
            const invBm = bm > 0 ? 1 / bm : 0;
            const invBI = bI > 0 ? 1 / bI : 0;
            const invAm =
                this.m_system.m_flagsBuffer.data[a] & b2ParticleFlag.b2_wallParticle
                    ? 0
                    : this.m_system.GetParticleInvMass();

            const rp = b2Vec2.Subtract(ap, bp, s_rp);
            const rpn = b2Vec2.Cross(rp, n);
            const invM = invAm + invBm + invBI * rpn * rpn;

            const contact = this.m_system.m_bodyContactBuffer.data[this.m_system.m_bodyContactBuffer.Append()];
            contact.index = a;
            contact.body = b;
            contact.fixture = fixture;
            contact.weight = 1 - d * this.m_system.m_inverseDiameter;

            contact.normal.Copy(n.Negate());
            contact.mass = invM > 0 ? 1 / invM : 0;
            this.m_system.DetectStuckParticle(a);
        }
    }

    public static readonly ReportFixtureAndParticle_s_n = new b2Vec2();

    public static readonly ReportFixtureAndParticle_s_rp = new b2Vec2();
}

export class b2ParticleSystem_SolveCollisionCallback extends b2FixtureParticleQueryCallback {
    public m_step: b2TimeStep | null = null;

    public ReportFixtureAndParticle(fixture: b2Fixture, childIndex: number, a: number): void {

        const s_p1 = b2ParticleSystem_SolveCollisionCallback.ReportFixtureAndParticle_s_p1;
        const s_output = b2ParticleSystem_SolveCollisionCallback.ReportFixtureAndParticle_s_output;
        const s_input = b2ParticleSystem_SolveCollisionCallback.ReportFixtureAndParticle_s_input;
        const s_p = b2ParticleSystem_SolveCollisionCallback.ReportFixtureAndParticle_s_p;
        const s_v = b2ParticleSystem_SolveCollisionCallback.ReportFixtureAndParticle_s_v;
        const s_f = b2ParticleSystem_SolveCollisionCallback.ReportFixtureAndParticle_s_f;

        const body = fixture.GetBody();
        const ap = this.m_system.m_positionBuffer.data[a];
        const av = this.m_system.m_velocityBuffer.data[a];
        const output = s_output;
        const input = s_input;
        if (this.m_system.m_iterationIndex === 0) {
            const xf = body.GetTransform();
            // Put 'ap' in the local space of the previous frame
            const p1 = b2Transform.TransposeMultiplyVec2(body.m_xf0, ap, s_p1);
            if (fixture.GetShape().GetType() === b2ShapeType.e_circle) {
                // Make relative to the center of the circle
                p1.Subtract(body.GetLocalCenter());
                // Re-apply rotation about the center of the circle
                b2Rot.MultiplyVec2(body.m_xf0.q, p1, p1);
                // Subtract rotation of the current frame
                b2Rot.TransposeMultiplyVec2(xf.q, p1, p1);
                // Return to local space
                p1.Add(body.GetLocalCenter());
            }
            // Return to global space and apply rotation of current frame
            b2Transform.MultiplyVec2(xf, p1, input.p1);
        } else {
            input.p1.Copy(ap);
        }

        const step = b2Verify(this.m_step);
        b2Vec2.AddScaled(ap, step.dt, av, input.p2);
        input.maxFraction = 1;
        if (fixture.RayCast(output, input, childIndex)) {
            const n = output.normal;
            const p = s_p;
            p.x = (1 - output.fraction) * input.p1.x + output.fraction * input.p2.x + b2_linearSlop * n.x;
            p.y = (1 - output.fraction) * input.p1.y + output.fraction * input.p2.y + b2_linearSlop * n.y;
            const v = s_v;
            v.x = step.inv_dt * (p.x - ap.x);
            v.y = step.inv_dt * (p.y - ap.y);
            this.m_system.m_velocityBuffer.data[a].Copy(v);
            const f = s_f;
            f.x = step.inv_dt * this.m_system.GetParticleMass() * (av.x - v.x);
            f.y = step.inv_dt * this.m_system.GetParticleMass() * (av.y - v.y);
            this.m_system.ParticleApplyForce(a, f);
        }
    }

    public static readonly ReportFixtureAndParticle_s_p1 = new b2Vec2();

    public static readonly ReportFixtureAndParticle_s_output = new b2RayCastOutput();

    public static readonly ReportFixtureAndParticle_s_input = new b2RayCastInput();

    public static readonly ReportFixtureAndParticle_s_p = new b2Vec2();

    public static readonly ReportFixtureAndParticle_s_v = new b2Vec2();

    public static readonly ReportFixtureAndParticle_s_f = new b2Vec2();
}
