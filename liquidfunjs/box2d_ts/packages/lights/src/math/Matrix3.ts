import { XY } from "./Vector2";

export class Matrix3 {
    private data = [1, 0, 0, 0, 1, 0, 0, 0, 1];

    /** Left-multiplies this vector by the given matrix
     * @param mat The matrix
     * @returns This vector */
    public mulVec2(p: XY) {
        const x = p.x * this.data[0] + p.y * this.data[3] + this.data[6];
        const y = p.x * this.data[1] + p.y * this.data[4] + this.data[7];
        p.x = x;
        p.y = y;
        return p;
    }

    /** Sets this matrix to a translation matrix.
     * @param x The translation in x
     * @param y The translation in y
     * @returns This matrix for the purpose of chaining operations. */
    public setToTranslation(p: XY) {
        const val = this.data;

        val[0] = 1;
        val[1] = 0;
        val[2] = 0;

        val[3] = 0;
        val[4] = 1;
        val[5] = 0;

        val[6] = p.x;
        val[7] = p.y;
        val[8] = 1;

        return this;
    }

    /** Sets this matrix to a rotation matrix that will rotate any vector in counter-clockwise direction around the z-axis.
     * @param radians The angle in radians.
     * @returns This matrix for the purpose of chaining operations. */
    public setToRotationRad(radians: number) {
        const cos = Math.cos(radians);
        const sin = Math.sin(radians);
        const val = this.data;

        val[0] = cos;
        val[1] = sin;
        val[2] = 0;

        val[3] = -sin;
        val[4] = cos;
        val[5] = 0;

        val[6] = 0;
        val[7] = 0;
        val[8] = 1;

        return this;
    }

    /**
     * @returns The determinant of this matrix
     */
    public det() {
        const val = this.data;
        return (
            val[0] * val[4] * val[8] +
            val[3] * val[7] * val[2] +
            val[6] * val[1] * val[5] -
            val[0] * val[7] * val[5] -
            val[3] * val[1] * val[8] -
            val[6] * val[4] * val[2]
        );
    }

    public set(
        i0: number,
        i1: number,
        i2: number,
        i3: number,
        i4: number,
        i5: number,
        i6: number,
        i7: number,
        i8: number,
    ) {
        this.data[0] = i0;
        this.data[1] = i1;
        this.data[2] = i2;
        this.data[3] = i3;
        this.data[4] = i4;
        this.data[5] = i5;
        this.data[6] = i6;
        this.data[7] = i7;
        this.data[8] = i8;
        return this;
    }

    /** Inverts this matrix given that the determinant is != 0.
     * @returns This matrix for the purpose of chaining operations.
     * @throws GdxRuntimeException if the matrix is singular (not invertible) */
    public inv() {
        const det = this.det();
        if (det === 0) throw new Error("Can't invert a singular matrix");

        const inv_det = 1 / det;
        const val = this.data;

        return this.set(
            inv_det * (val[4] * val[8] - val[5] * val[7]),
            inv_det * (val[2] * val[7] - val[1] * val[8]),
            inv_det * (val[1] * val[5] - val[2] * val[4]),
            inv_det * (val[5] * val[6] - val[3] * val[8]),
            inv_det * (val[0] * val[8] - val[2] * val[6]),
            inv_det * (val[2] * val[3] - val[0] * val[5]),
            inv_det * (val[3] * val[7] - val[4] * val[6]),
            inv_det * (val[1] * val[6] - val[0] * val[7]),
            inv_det * (val[0] * val[4] - val[1] * val[3]),
        );
    }

    /** Postmultiplies this matrix with a (counter-clockwise) rotation matrix. Postmultiplication is also used by OpenGL ES' 1.x
     * glTranslate/glRotate/glScale.
     * @param radians The angle in radians
     * @returns This matrix for the purpose of chaining. */
    public rotateRad(radians: number) {
        if (radians === 0) return this;
        const cos = Math.cos(radians);
        const sin = Math.sin(radians);

        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return this.mul(tmp.set(cos, sin, 0, -sin, cos, 0, 0, 0, 1));
    }

    /** Multiplies matrix a with matrix b in the following manner:
     *
     * <pre>
     * mul(A, B) => A := AB
     * </pre>
     * @param mata The float array representing the first matrix. Must have at least 9 elements.
     * @param matb The float array representing the second matrix. Must have at least 9 elements. */
    public mul(other: Matrix3) {
        const mata = this.data;
        const matb = other.data;

        return this.set(
            mata[0] * matb[0] + mata[3] * matb[1] + mata[6] * matb[2],
            mata[1] * matb[0] + mata[4] * matb[1] + mata[7] * matb[2],
            mata[2] * matb[0] + mata[5] * matb[1] + mata[8] * matb[2],
            mata[0] * matb[3] + mata[3] * matb[4] + mata[6] * matb[5],
            mata[1] * matb[3] + mata[4] * matb[4] + mata[7] * matb[5],
            mata[2] * matb[3] + mata[5] * matb[4] + mata[8] * matb[5],
            mata[0] * matb[6] + mata[3] * matb[7] + mata[6] * matb[8],
            mata[1] * matb[6] + mata[4] * matb[7] + mata[7] * matb[8],
            mata[2] * matb[6] + mata[5] * matb[7] + mata[8] * matb[8],
        );
    }
}

const tmp = new Matrix3();
