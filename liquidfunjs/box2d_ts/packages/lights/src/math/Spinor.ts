import { RAD_TO_DEG } from "./utils";

export class Spinor {
    private real: number;

    private complex: number;

    private static readonly COSINE_THRESHOLD = 0.001;

    public constructor(real = 0, complex = 0) {
        this.real = real;
        this.complex = complex;
    }

    public setAngle(angle: number) {
        angle /= 2;
        return this.set(Math.cos(angle), Math.sin(angle));
    }

    public copy(copyFrom: Spinor) {
        this.set(copyFrom.real, copyFrom.complex);
        return this;
    }

    public set(real: number, complex: number) {
        this.real = real;
        this.complex = complex;

        return this;
    }

    public scale(t: number) {
        this.real *= t;
        this.complex *= t;
        return this;
    }

    public invert() {
        this.complex = -this.complex;
        this.scale(this.len2());
        return this;
    }

    public add(other: Spinor) {
        this.real += other.real;
        this.complex += other.complex;
        return this;
    }

    public addAngle(angle: number) {
        angle /= 2;
        this.real += Math.cos(angle);
        this.complex += Math.sin(angle);
        return this;
    }

    public sub(other: Spinor) {
        this.real -= other.real;
        this.complex -= other.complex;
        return this;
    }

    public subAngle(angle: number) {
        angle /= 2;
        this.real -= Math.cos(angle);
        this.complex -= Math.sin(angle);
        return this;
    }

    public len() {
        return Math.sqrt(this.real * this.real + this.complex * this.complex);
    }

    public len2() {
        return this.real * this.real + this.complex * this.complex;
    }

    public mul(other: Spinor) {
        this.set(
            this.real * other.real - this.complex * other.complex,
            this.real * other.complex + this.complex * other.real,
        );
        return this;
    }

    public nor() {
        const length = this.len();
        this.real /= length;
        this.complex /= length;
        return this;
    }

    public angle() {
        return Math.atan2(this.complex, this.real) * 2;
    }

    public lerp(end: Spinor, alpha: number, tmp: Spinor) {
        this.scale(1 - alpha);
        tmp.copy(end).scale(alpha);
        this.add(tmp);
        this.nor();
        return this;
    }

    public slerp(dest: Spinor, t: number) {
        let tr;
        let tc;
        let omega;
        let cosom;
        let sinom;
        let scale0;
        let scale1;

        // cosine
        cosom = this.real * dest.real + this.complex * dest.complex;

        // adjust signs
        if (cosom < 0) {
            cosom = -cosom;
            tc = -dest.complex;
            tr = -dest.real;
        } else {
            tc = dest.complex;
            tr = dest.real;
        }

        // coefficients
        if (1 - cosom > Spinor.COSINE_THRESHOLD) {
            omega = Math.acos(cosom);
            sinom = Math.sin(omega);
            scale0 = Math.sin((1 - t) * omega) / sinom;
            scale1 = Math.sin(t * omega) / sinom;
        } else {
            scale0 = 1 - t;
            scale1 = t;
        }

        // readonly calculation
        this.complex = scale0 * this.complex + scale1 * tc;
        this.real = scale0 * this.real + scale1 * tr;

        return this;
    }

    public toString() {
        const radians = this.angle();
        return `radians: ${radians}, degrees: ${radians * RAD_TO_DEG * radians}`;
    }
}
