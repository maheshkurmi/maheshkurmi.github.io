import { b2World, b2Vec2, b2EdgeShape, b2PolygonShape, b2BodyDef, b2BodyType } from "@flyover/box2d";

import { TestFactory } from "../types";

export const flyoverBox2dFactory: TestFactory = (gravity, edgeV1, edgeV2, edgeDensity) => {
    const world = new b2World(new b2Vec2(gravity.x, gravity.y));
    const ground = world.CreateBody(new b2BodyDef());

    const edgeShape = new b2EdgeShape();
    edgeShape.Set(new b2Vec2(edgeV1.x, edgeV1.y), new b2Vec2(edgeV2.x, edgeV2.y));
    ground.CreateFixture(edgeShape, edgeDensity);

    return {
        name: "@flyover/box2d",
        createBoxShape(hx: number, hy: number) {
            const box = new b2PolygonShape();
            return box.SetAsBox(hx, hy);
        },
        createBoxBody(shape: any, x: number, y: number, density: number) {
            const bd = new b2BodyDef();
            bd.type = b2BodyType.b2_dynamicBody;
            bd.position.Set(x, y);
            const body = world.CreateBody(bd);
            body.CreateFixture(shape, density);
        },
        step(timeStep: number, velocityIterations: number, positionIterations: number) {
            world.Step(timeStep, velocityIterations, positionIterations);
        },
    };
};
