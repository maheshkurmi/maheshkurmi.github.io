// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Box2D } from "../../thirdparty/Box2dWeb-2.1.a.3.min";
import { TestFactory } from "../types";

const { b2Vec2 } = Box2D.Common.Math;
const { b2BodyDef, b2Body, b2World, b2FixtureDef } = Box2D.Dynamics;
const { b2PolygonShape } = Box2D.Collision.Shapes;

export const webFactory: TestFactory = (gravity, edgeV1, edgeV2, edgeDensity) => {
    const world = new b2World(new b2Vec2(gravity.x, gravity.y));
    const ground = world.CreateBody(new b2BodyDef());

    const edgeShape = new b2PolygonShape();
    edgeShape.SetAsEdge(new b2Vec2(edgeV1.x, edgeV1.y), new b2Vec2(edgeV2.x, edgeV2.y));
    const edgeFd = new b2FixtureDef();
    edgeFd.density = edgeDensity;
    edgeFd.shape = edgeShape;
    ground.CreateFixture(edgeFd);

    return {
        name: "box2d-web",
        createBoxShape(hx: number, hy: number) {
            const box = new b2PolygonShape();
            box.SetAsBox(hx, hy);
            return box;
        },
        createBoxBody(shape: any, x: number, y: number, density: number) {
            const bd = new b2BodyDef();
            bd.type = b2Body.b2_dynamicBody;
            bd.position.Set(x, y);
            const body = world.CreateBody(bd);

            const fd = new b2FixtureDef();
            fd.density = density;
            fd.shape = shape;
            body.CreateFixture(fd);
        },
        step(timeStep: number, velocityIterations: number, positionIterations: number) {
            world.Step(timeStep, velocityIterations, positionIterations);
        },
    };
};
