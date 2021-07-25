/*
 * Copyright (c) 2006-2009 Erin Catto http://www.box2d.org
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
import { b2DestructionListener, b2Fixture, b2ContactFilter, b2ContactListener } from "@box2d/core";

import { b2ParticleGroup } from "../particle/b2_particle_group";
import { b2ParticleSystem, b2ParticleBodyContact, b2ParticleContact } from "../particle/b2_particle_system";

// Declaration merging
declare module "@box2d/core" {
    interface b2DestructionListener {
        /**
         * Called when any particle group is about to be destroyed.
         */
        SayGoodbyeParticleGroup(group: b2ParticleGroup): void;

        /**
         * Called when a particle is about to be destroyed.
         * The index can be used in conjunction with
         * b2ParticleSystem::GetUserDataBuffer() or
         * b2ParticleSystem::GetParticleHandleFromIndex() to determine which
         * particle has been destroyed.
         */
        SayGoodbyeParticle(system: b2ParticleSystem, index: number): void;
    }

    interface b2ContactFilter {
        ShouldCollideFixtureParticle(fixture: b2Fixture, system: b2ParticleSystem, index: number): boolean;
        ShouldCollideParticleParticle(system: b2ParticleSystem, indexA: number, indexB: number): boolean;
    }

    interface b2ContactListener {
        BeginContactFixtureParticle(system: b2ParticleSystem, contact: b2ParticleBodyContact): void;
        EndContactFixtureParticle(system: b2ParticleSystem, contact: b2ParticleBodyContact): void;
        BeginContactParticleParticle(system: b2ParticleSystem, contact: b2ParticleContact): void;
        EndContactParticleParticle(system: b2ParticleSystem, contact: b2ParticleContact): void;
    }
}

// Default implementations
Object.assign(b2DestructionListener.prototype, {
    SayGoodbyeParticleGroup() {},
    SayGoodbyeParticle() {},
});

Object.assign(b2ContactFilter.prototype, {
    SayGoodbyeParticleGroup() {
        return true;
    },
    SayGoodbyeParticle() {
        return true;
    },
});

Object.assign(b2ContactListener.prototype, {
    BeginContactFixtureParticle() {},
    EndContactFixtureParticle() {},
    BeginContactParticleParticle() {},
    EndContactParticleParticle() {},
});
