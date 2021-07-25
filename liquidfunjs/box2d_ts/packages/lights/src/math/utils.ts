export const DEG_TO_RAD = Math.PI / 180;
export const RAD_TO_DEG = 180 / Math.PI;

export function sinDeg(angle: number) {
    return Math.sin(DEG_TO_RAD * angle);
}

export function cosDeg(angle: number) {
    return Math.cos(DEG_TO_RAD * angle);
}

export function makeNumberArray(length: number, init = 0): number[] {
    const result = new Array<number>(length);
    for (let i = 0; i < length; i++) result[i] = init;
    return result;
}
