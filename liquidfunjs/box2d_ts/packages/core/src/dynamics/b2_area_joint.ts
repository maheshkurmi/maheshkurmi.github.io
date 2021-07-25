// MIT License

// Copyright (c) 2019 Erin Catto

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

// DEBUG: import { b2Assert } from "../common/b2_common";
import { b2_epsilon, b2_linearSlop, b2_maxLinearCorrection, b2MakeNumberArray, b2MakeArray } from "../common/b2_common";
import { b2Vec2, XY } from "../common/b2_math";
import { b2Joint, b2JointDef, b2JointType, b2IJointDef } from "./b2_joint";
import { b2DistanceJoint, b2DistanceJointDef } from "./b2_distance_joint";
import { b2SolverData } from "./b2_time_step";
import type { b2Body } from "./b2_body";

export interface b2IAreaJointDef extends b2IJointDef {
    bodies: b2Body[];

    stiffness?: number;

    damping?: number;
}

export class b2AreaJointDef extends b2JointDef implements b2IAreaJointDef {
    public bodies: b2Body[] = [];

    public stiffness = 0;

    public damping = 0;

    public constructor() {
        super(b2JointType.e_areaJoint);
    }

    public AddBody(body: b2Body): void {
        this.bodies.push(body);

        if (this.bodies.length === 1) {
            this.bodyA = body;
        } else if (this.bodies.length === 2) {
            this.bodyB = body;
        }
    }
}

export class b2AreaJoint extends b2Joint {
    public m_bodies: b2Body[];

    public m_stiffness = 0;

    public m_damping = 0;

    // Solver shared
    public m_impulse = 0;

    // Solver temp
    public readonly m_targetLengths: number[];

    public m_targetArea = 0;

    public readonly m_normals: b2Vec2[];

    public readonly m_joints: b2DistanceJoint[] = [];

    public readonly m_deltas: b2Vec2[];

    public readonly m_delta = new b2Vec2();

    public constructor(def: b2IAreaJointDef) {
        super(def);

        // DEBUG: b2Assert(def.bodies.length >= 3, "You cannot create an area joint with less than three bodies.");

        this.m_bodies = def.bodies;
        this.m_stiffness = def.stiffness ?? 0;
        this.m_damping = def.damping ?? 0;

        this.m_targetLengths = b2MakeNumberArray(def.bodies.length);
        this.m_normals = b2MakeArray(def.bodies.length, b2Vec2);
        this.m_deltas = b2MakeArray(def.bodies.length, b2Vec2);

        const djd = new b2DistanceJointDef();
        djd.stiffness = this.m_stiffness;
        djd.damping = this.m_damping;

        this.m_targetArea = 0;

        for (let i = 0; i < this.m_bodies.length; ++i) {
            const body = this.m_bodies[i];
            const next = this.m_bodies[(i + 1) % this.m_bodies.length];

            const body_c = body.GetWorldCenter();
            const next_c = next.GetWorldCenter();

            this.m_targetLengths[i] = b2Vec2.Distance(body_c, next_c);

            this.m_targetArea += b2Vec2.Cross(body_c, next_c);

            djd.Initialize(body, next, body_c, next_c);
            this.m_joints[i] = body.GetWorld().CreateJoint(djd);
        }

        this.m_targetArea *= 0.5;
    }

    public GetAnchorA<T extends XY>(out: T): T {
        return out;
    }

    public GetAnchorB<T extends XY>(out: T): T {
        return out;
    }

    public GetReactionForce<T extends XY>(inv_dt: number, out: T): T {
        return out;
    }

    public GetReactionTorque(_inv_dt: number): number {
        return 0;
    }

    public SetStiffness(stiffness: number): void {
        this.m_stiffness = stiffness;

        for (const joint of this.m_joints) {
            joint.SetStiffness(stiffness);
        }
    }

    public GetStiffness() {
        return this.m_stiffness;
    }

    public SetDamping(damping: number): void {
        this.m_damping = damping;

        for (const joint of this.m_joints) {
            joint.SetDamping(damping);
        }
    }

    public GetDamping() {
        return this.m_damping;
    }

    public InitVelocityConstraints(data: b2SolverData): void {
        for (let i = 0; i < this.m_bodies.length; ++i) {
            const prev = this.m_bodies[(i + this.m_bodies.length - 1) % this.m_bodies.length];
            const next = this.m_bodies[(i + 1) % this.m_bodies.length];
            const prev_c = data.positions[prev.m_islandIndex].c;
            const next_c = data.positions[next.m_islandIndex].c;
            const delta = this.m_deltas[i];

            b2Vec2.Subtract(next_c, prev_c, delta);
        }

        if (data.step.warmStarting) {
            this.m_impulse *= data.step.dtRatio;

            for (let i = 0; i < this.m_bodies.length; ++i) {
                const body = this.m_bodies[i];
                const body_v = data.velocities[body.m_islandIndex].v;
                const delta = this.m_deltas[i];

                body_v.x += body.m_invMass * delta.y * 0.5 * this.m_impulse;
                body_v.y += body.m_invMass * -delta.x * 0.5 * this.m_impulse;
            }
        } else {
            this.m_impulse = 0;
        }
    }

    public SolveVelocityConstraints(data: b2SolverData): void {
        let dotMassSum = 0;
        let crossMassSum = 0;

        for (let i = 0; i < this.m_bodies.length; ++i) {
            const body = this.m_bodies[i];
            const body_v = data.velocities[body.m_islandIndex].v;
            const delta = this.m_deltas[i];

            dotMassSum += delta.LengthSquared() / body.GetMass();
            crossMassSum += b2Vec2.Cross(body_v, delta);
        }

        const lambda = (-2 * crossMassSum) / dotMassSum;
        // lambda = b2Clamp(lambda, -b2_maxLinearCorrection, b2_maxLinearCorrection);

        this.m_impulse += lambda;

        for (let i = 0; i < this.m_bodies.length; ++i) {
            const body = this.m_bodies[i];
            const body_v = data.velocities[body.m_islandIndex].v;
            const delta = this.m_deltas[i];

            body_v.x += body.m_invMass * delta.y * 0.5 * lambda;
            body_v.y += body.m_invMass * -delta.x * 0.5 * lambda;
        }
    }

    public SolvePositionConstraints(data: b2SolverData): boolean {
        let perimeter = 0;
        let area = 0;

        for (let i = 0; i < this.m_bodies.length; ++i) {
            const body = this.m_bodies[i];
            const next = this.m_bodies[(i + 1) % this.m_bodies.length];
            const body_c = data.positions[body.m_islandIndex].c;
            const next_c = data.positions[next.m_islandIndex].c;

            const delta = b2Vec2.Subtract(next_c, body_c, this.m_delta);

            let dist = delta.Length();
            if (dist < b2_epsilon) {
                dist = 1;
            }

            this.m_normals[i].x = delta.y / dist;
            this.m_normals[i].y = -delta.x / dist;

            perimeter += dist;

            area += b2Vec2.Cross(body_c, next_c);
        }

        area *= 0.5;

        const deltaArea = this.m_targetArea - area;
        const toExtrude = (0.5 * deltaArea) / perimeter;
        let done = true;

        for (let i = 0; i < this.m_bodies.length; ++i) {
            const body = this.m_bodies[i];
            const body_c = data.positions[body.m_islandIndex].c;
            const next_i = (i + 1) % this.m_bodies.length;

            const delta = b2Vec2.Add(this.m_normals[i], this.m_normals[next_i], this.m_delta);
            delta.Scale(toExtrude);

            const norm_sq = delta.LengthSquared();
            if (norm_sq > b2_maxLinearCorrection ** 2) {
                delta.Scale(b2_maxLinearCorrection / Math.sqrt(norm_sq));
            }
            if (norm_sq > b2_linearSlop ** 2) {
                done = false;
            }

            body_c.Add(delta);
        }

        return done;
    }
}
