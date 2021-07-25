export interface RGBA {
    r: number;
    g: number;
    b: number;
    a: number;
}

export class LightColor implements RGBA {
    public r: number;

    public g: number;

    public b: number;

    public a: number;

    public constructor(r = 0, g = 0, b = 0, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    public set(r: number, g: number, b: number, a = 1) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }

    public copy(c: RGBA) {
        this.r = c.r;
        this.g = c.g;
        this.b = c.b;
        this.a = c.a;
    }

    public toFloatBits() {
        return (
            (Math.round(255 * this.a) << 24) |
            (Math.round(255 * this.b) << 16) |
            (Math.round(255 * this.g) << 8) |
            Math.round(255 * this.r)
        );
    }
}
