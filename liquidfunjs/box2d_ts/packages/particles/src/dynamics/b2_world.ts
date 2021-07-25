/*
 * Copyright (c) 2006-2011 Erin Catto http://www.box2d.org
 *
 * This software is provided 'as-is', without any express or implied
 * warranty.  In no event will the authors be held liable for any damages
 * arising from the use of this software.
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 * 1. The origin of this software must not be misrepresented; you must not
 * claim that you wrote the original software. If you use this software
 * in a product, an acknowledgment in the product documentation would be
 * appreciated but is not required.
 * 2. Altered source versions must be plainly marked as such, and must not be
 * misrepresented as being the original software.
 * 3. This notice may not be removed or altered from any source distribution.
 */

import { b2World, b2_maxFloat, b2Transform, b2Body, b2_augment, b2Writeable, b2Assert } from "@box2d/core";

import { b2CalculateParticleIterations } from "../particle/b2_particle";
import { b2ParticleSystem, b2ParticleSystemDef } from "../particle/b2_particle_system";

declare module "@box2d/core" {
    interface b2World {
        m_particleSystemList: b2ParticleSystem | null;

        CreateParticleSystem(def: b2ParticleSystemDef): b2ParticleSystem;
        DestroyParticleSystem(p: b2ParticleSystem): void;
        GetParticleSystemList(): b2ParticleSystem | null;
        CalculateReasonableParticleIterations(timeStep: number): number;
    }
}

b2_augment(b2World, {
    Create(original, gravity) {
        const world = original(gravity);
        world.m_particleSystemList = null;
        return world;
    },
});

function GetSmallestRadius(world: b2World): number {
    let smallestRadius = b2_maxFloat;
    for (let system = world.GetParticleSystemList(); system !== null; system = system.m_next) {
        smallestRadius = Math.min(smallestRadius, system.GetRadius());
    }
    return smallestRadius;
}
Object.assign(b2World.prototype, {
    CreateParticleSystem(this: b2World, def: b2ParticleSystemDef): b2ParticleSystem {
        b2Assert(!this.IsLocked());

        const p = new b2ParticleSystem(def, this);

        // Add to world doubly linked list.
        p.m_prev = null;
        p.m_next = this.m_particleSystemList;
        if (this.m_particleSystemList) {
            this.m_particleSystemList.m_prev = p;
        }
        this.m_particleSystemList = p;

        return p;
    },
    DestroyParticleSystem(this: b2World, p: b2ParticleSystem): void {
        b2Assert(!this.IsLocked());

        // Remove world particleSystem list.
        if (p.m_prev) {
            p.m_prev.m_next = p.m_next;
        }

        if (p.m_next) {
            p.m_next.m_prev = p.m_prev;
        }

        if (p === this.m_particleSystemList) {
            this.m_particleSystemList = p.m_next;
        }
    },
    GetParticleSystemList(this: b2World): b2ParticleSystem | null {
        return this.m_particleSystemList;
    },
    CalculateReasonableParticleIterations(this: b2World, timeStep: number): number {
        if (this.m_particleSystemList === null) {
            return 1;
        }

        // Use the smallest radius, since that represents the worst-case.
        return b2CalculateParticleIterations(this.GetGravity().Length(), GetSmallestRadius(this), timeStep);
    },
});

b2_augment(b2World.prototype, {
    CreateBody(this: b2World, original, def = {}) {
        const body = original(def);
        (body as b2Writeable<b2Body>).m_xf0 = new b2Transform();
        return body;
    },

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Solve(this: b2World, original: (step: b2TimeStep) => void, step: b2TimeStep) {
        for (let p = this.m_particleSystemList; p; p = p.m_next) {
            p.Solve(step); // Particle Simulation
        }
        // update previous transforms
        for (let b = this.GetBodyList(); b; b = b.GetNext()) {
            b.m_xf0.Copy(b.GetTransform());
        }

        original(step);
    },
});
