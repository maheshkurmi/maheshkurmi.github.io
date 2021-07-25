/**
 * Helper class that stores source and destination factors for blending
 */
export class BlendFunc {
    private readonly gl: WebGLRenderingContext;

    private readonly default_sfactor: number;

    private readonly default_dfactor: number;

    public sfactor: number;

    public dfactor: number;

    public constructor(gl: WebGLRenderingContext, sfactor: number, dfactor: number) {
        this.gl = gl;
        this.default_sfactor = sfactor;
        this.default_dfactor = dfactor;
        this.sfactor = sfactor;
        this.dfactor = dfactor;
    }

    /**
     * Sets source and destination blending factors
     */
    public set(sfactor: number, dfactor: number) {
        this.sfactor = sfactor;
        this.dfactor = dfactor;
    }

    /**
     * Resets source and destination blending factors to default values
     * that were set on instance creation
     */
    public reset() {
        this.sfactor = this.default_sfactor;
        this.dfactor = this.default_dfactor;
    }

    /**
     * Calls glBlendFunc with own source and destination factors
     */
    public apply() {
        this.gl.blendFunc(this.sfactor, this.dfactor);
    }
}
