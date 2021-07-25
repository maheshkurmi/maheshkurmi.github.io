export interface TestInterface {
    name: string;
    createBoxShape: (hx: number, hy: number) => any;
    createBoxBody: (shape: any, x: number, y: number, density: number) => any;
    step: (timeStep: number, velocityIterations: number, positionIterations: number) => void;
}

export interface XY {
    x: number;
    y: number;
}

export type TestFactory = (gravity: XY, edgeV1: XY, edgeV2: XY, edgeDensity: number) => TestInterface;
