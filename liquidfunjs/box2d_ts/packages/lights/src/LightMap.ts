import type { RayHandler } from "./RayHandler";
import {
    ShadowShader,
    WithoutShadowShader,
    GaussianShader,
    DiffuseShader,
    createShadowShader,
    createDiffuseShader,
    createWithoutShadowShader,
    createGaussianShader,
} from "./shaders";
import { VertexBufferObject } from "./utils/VertexBufferObject";
import { FrameBuffer } from "./utils/FrameBuffer";
import { lightSettings } from "./settings";

export class LightMap {
    private shadowShader: ShadowShader;

    public frameBuffer: FrameBuffer;

    private vertBuffer: VertexBufferObject;

    private uvBuffer: VertexBufferObject;

    private pingPongBuffer: FrameBuffer;

    private rayHandler: RayHandler;

    private withoutShadowShader: WithoutShadowShader;

    private blurShader: GaussianShader;

    private diffuseShader: DiffuseShader;

    private gl: WebGLRenderingContext;

    public lightMapDrawingDisabled = false;

    public constructor(rayHandler: RayHandler, fboWidth: number, fboHeight: number) {
        this.rayHandler = rayHandler;
        this.gl = rayHandler.gl;
        this.vertBuffer = new VertexBufferObject(this.gl, this.gl.STATIC_DRAW, this.createVertices());
        this.uvBuffer = new VertexBufferObject(this.gl, this.gl.STATIC_DRAW, this.createUvCoords());

        if (fboWidth <= 0) fboWidth = 1;
        if (fboHeight <= 0) fboHeight = 1;
        this.frameBuffer = new FrameBuffer(this.gl, fboWidth, fboHeight);
        this.pingPongBuffer = new FrameBuffer(this.gl, fboWidth, fboHeight);

        this.shadowShader = createShadowShader(this.gl);
        this.diffuseShader = createDiffuseShader(this.gl);

        this.withoutShadowShader = createWithoutShadowShader(this.gl);

        this.blurShader = createGaussianShader(this.gl, fboWidth, fboHeight, lightSettings.isDiffuse);
    }

    public render() {
        const needed = this.rayHandler.lightRenderedLastFrame > 0;

        if (this.lightMapDrawingDisabled) return;
        this.frameBuffer.bindTexture();

        // at last lights are rendered over scene
        if (this.rayHandler.shadows) {
            const c = this.rayHandler.ambientLight;
            let shader = this.shadowShader;
            if (lightSettings.isDiffuse) {
                shader = this.diffuseShader;
                shader.use();
                this.rayHandler.diffuseBlendFunc.apply();
                shader.ambient.set(c.r, c.g, c.b, c.a);
            } else {
                shader.use();
                this.rayHandler.shadowBlendFunc.apply();
                shader.ambient.set(c.r * c.a, c.g * c.a, c.b * c.a, 1 - c.a);
            }
            //	shader.setUniformi("u_texture", 0);
            this.renderTriangleFan(shader);
        } else if (needed) {
            this.rayHandler.simpleBlendFunc.apply();
            this.withoutShadowShader.use();
            //	withoutShadowShader.setUniformi("u_texture", 0);
            this.renderTriangleFan(this.withoutShadowShader);
        }

        this.gl.disable(this.gl.BLEND);
    }

    public renderTriangleFan(shader: WithoutShadowShader | DiffuseShader | ShadowShader | GaussianShader) {
        this.vertBuffer.bind();
        shader.a_position.enable();
        shader.a_position.set(2, this.gl.FLOAT, false, 0, 0);
        this.vertBuffer.unbind();
        this.uvBuffer.bind();
        shader.a_texCoord.enable();
        shader.a_texCoord.set(2, this.gl.FLOAT, false, 0, 0);
        this.uvBuffer.unbind();
        this.gl.drawArrays(this.gl.TRIANGLE_FAN, 0, 4);
    }

    public gaussianBlur() {
        this.gl.disable(this.gl.BLEND);
        for (let i = 0; i < this.rayHandler.blurNum; i++) {
            this.frameBuffer.bindTexture();
            // horizontal
            this.pingPongBuffer.begin();
            this.blurShader.use();
            //		blurShader.setUniformi("u_texture", 0);
            this.blurShader.dir.set(1, 0);
            this.renderTriangleFan(this.blurShader);
            this.pingPongBuffer.endSimple();

            this.pingPongBuffer.bindTexture();
            // vertical
            this.frameBuffer.begin();
            this.blurShader.use();
            //	blurShader.setUniformi("u_texture", 0);
            this.blurShader.dir.set(0, 1);
            this.renderTriangleFan(this.blurShader);
            if (this.rayHandler.customViewport) {
                this.frameBuffer.end(
                    this.rayHandler.viewportX,
                    this.rayHandler.viewportY,
                    this.rayHandler.viewportWidth,
                    this.rayHandler.viewportHeight,
                );
            } else {
                this.frameBuffer.endSimple();
            }
        }

        this.gl.enable(this.gl.BLEND);
    }

    public dispose() {
        this.shadowShader.dispose();
        this.blurShader.dispose();
        this.vertBuffer.dispose();
        this.uvBuffer.dispose();
        this.frameBuffer.dispose();
        this.pingPongBuffer.dispose();
    }

    private createVertices() {
        // prettier-ignore
        return new Float32Array([
            -1, -1,
            1, -1,
            1, 1,
            -1, 1,
        ]);
    }

    private createUvCoords() {
        // prettier-ignore
        return new Float32Array([
            0, 0,
            1, 0,
            1, 1,
            0, 1
        ]);
    }
}
