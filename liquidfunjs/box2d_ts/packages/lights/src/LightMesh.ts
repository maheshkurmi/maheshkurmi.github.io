import { LightShader } from "./shaders";
import { VertexBufferObject } from "./utils";

export class LightMesh {
    public static readonly MIN_VERTS = 4;

    private vertices!: Float32Array;

    private colors!: Int32Array;

    private colorScales!: Float32Array;

    private vertexNum = 0;

    private vertBuffer!: VertexBufferObject;

    private colorBuffer!: VertexBufferObject;

    private sBuffer!: VertexBufferObject;

    private gl: WebGLRenderingContext;

    public lightMapDrawingDisabled = false;

    public constructor(gl: WebGLRenderingContext, vertexNum: number) {
        this.gl = gl;
        this.setVertexNum(vertexNum);
    }

    public setVertexNum(vertexNum: number) {
        if (vertexNum < LightMesh.MIN_VERTS) vertexNum = LightMesh.MIN_VERTS;

        if (this.vertexNum < vertexNum) {
            this.vertexNum = vertexNum;

            this.vertices = new Float32Array(this.vertexNum * 4);
            this.colors = new Int32Array(this.vertexNum * 2);
            this.colorScales = new Float32Array(this.vertexNum * 2);

            if (this.vertBuffer) this.vertBuffer.dispose();
            this.vertBuffer = new VertexBufferObject(this.gl, this.gl.DYNAMIC_DRAW, this.vertices);

            if (this.colorBuffer) this.colorBuffer.dispose();
            this.colorBuffer = new VertexBufferObject(this.gl, this.gl.DYNAMIC_DRAW, this.colors);

            if (this.sBuffer) this.sBuffer.dispose();
            this.sBuffer = new VertexBufferObject(this.gl, this.gl.DYNAMIC_DRAW, this.colorScales);
        }
    }

    public getVertices() {
        return this.vertices;
    }

    public getColors() {
        return this.colors;
    }

    public getColorScales() {
        return this.colorScales;
    }

    public render(shader: LightShader, mode: GLenum, count: number) {
        this.vertBuffer.bind();
        shader.a_position.enable();
        shader.a_position.set(2, this.gl.FLOAT, false, 0, 0);
        this.vertBuffer.unbind();
        this.colorBuffer.bind();
        shader.quad_colors.enable();
        shader.quad_colors.set(4, this.gl.UNSIGNED_BYTE, true, 0, 0);
        this.colorBuffer.unbind();
        this.sBuffer.bind();
        shader.s.enable();
        shader.s.set(1, this.gl.FLOAT, false, 0, 0);
        this.sBuffer.unbind();
        this.gl.drawArrays(mode, 0, count);
    }

    public update() {
        this.vertBuffer.setData(this.vertices);
        this.colorBuffer.setData(this.colors);
        this.sBuffer.setData(this.colorScales);
    }

    public dispose() {
        this.vertBuffer.dispose();
        this.colorBuffer.dispose();
        this.sBuffer.dispose();
    }
}
