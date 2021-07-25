/** *****************************************************************************
 * Copyright 2011 See AUTHORS file.
 *
 * Licensed under the Apache License, Version 2 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ***************************************************************************** */

/** <p>
 * Encapsulates OpenGL ES 2 frame buffer objects. This is a simple helper class which should cover most FBO uses. It will
 * automatically create a texture for the color attachment and a renderbuffer for the depth buffer. You can get a hold of the
 * texture by {@link FrameBuffer#getColorBufferTexture()}. This class will only work with OpenGL ES 2.0.
 * </p>
 *
 * <p>
 * FrameBuffers are managed. In case of an OpenGL context loss, which only happens on Android when a user switches to another
 * application or receives an incoming call, the framebuffer will be automatically recreated.
 * </p>
 *
 * <p>
 * A FrameBuffer must be disposed if it is no longer needed
 * </p>
 *
 * @author mzechner, realitix */
export class FrameBuffer {
    /** the framebuffer handle * */
    protected framebufferHandle: WebGLFramebuffer;

    public readonly gl: WebGLRenderingContext;

    public readonly width: number;

    public readonly height: number;

    public readonly texture: WebGLTexture;

    private lastViewport!: Int32Array;

    /** Creates a new FrameBuffer having the given dimensions and potentially a depth and a stencil buffer attached.
     *
     * @param format The format of the color buffer; according to the OpenGL ES 2 spec, only RGB565, RGBA4444 and RGB5_A1 are
     *           color-renderable
     * @param width The width of the framebuffer in pixels
     * @param height The height of the framebuffer in pixels
     * @param hasDepth Whether to attach a depth buffer
     * @throws com.badlogic.gdx.utils.GdxRuntimeException in case the FrameBuffer could not be created */
    public constructor(gl: WebGLRenderingContext, width: number, height: number) {
        this.gl = gl;
        this.width = width;
        this.height = height;
        this.texture = this.createTexture();
        this.framebufferHandle = this.gl.createFramebuffer()!;
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebufferHandle);

        this.bindTexture();
        this.gl.framebufferTexture2D(
            this.gl.FRAMEBUFFER,
            this.gl.COLOR_ATTACHMENT0,
            this.gl.TEXTURE_2D,
            this.texture,
            0,
        );

        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null);
        this.bindTexture();

        const result = this.gl.checkFramebufferStatus(this.gl.FRAMEBUFFER);

        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);

        if (result !== this.gl.FRAMEBUFFER_COMPLETE) {
            this.dispose();

            if (result === this.gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT)
                throw new Error("Frame buffer couldn't be constructed: incomplete attachment");
            if (result === this.gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS)
                throw new Error("Frame buffer couldn't be constructed: incomplete dimensions");
            if (result === this.gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT)
                throw new Error("Frame buffer couldn't be constructed: missing attachment");
            if (result === this.gl.FRAMEBUFFER_UNSUPPORTED)
                throw new Error("Frame buffer couldn't be constructed: unsupported combination of formats");
            throw new Error(`Frame buffer couldn't be constructed: unknown error ${result}`);
        }
    }

    public bindTexture() {
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
    }

    protected createTexture() {
        const format = this.gl.RGBA;
        const type = this.gl.UNSIGNED_BYTE;
        const texture = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, format, this.width, this.height, 0, format, type, null);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
        return texture!;
    }

    /** Releases all resources associated with the FrameBuffer. */

    public dispose() {
        this.gl.deleteTexture(this.texture);

        this.gl.deleteFramebuffer(this.framebufferHandle);
    }

    /** Makes the frame buffer current so everything gets drawn to it. */
    public bind() {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.framebufferHandle);
    }

    /** Unbinds the framebuffer, all drawing will be performed to the normal framebuffer from here on. */
    public unbind() {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    }

    /** Binds the frame buffer and sets the viewport accordingly, so everything gets drawn to it. */
    public begin() {
        this.bind();
        this.lastViewport = this.gl.getParameter(this.gl.VIEWPORT);
        this.gl.viewport(0, 0, this.width, this.height);
    }

    /** Unbinds the framebuffer, all drawing will be performed to the normal framebuffer from here on. */
    public endSimple() {
        this.end(this.lastViewport[0], this.lastViewport[1], this.lastViewport[2], this.lastViewport[3]);
    }

    /** Unbinds the framebuffer and sets viewport sizes, all drawing will be performed to the normal framebuffer from here on.
     *
     * @param x The x-axis position of the viewport in pixels
     * @param y The y-asis position of the viewport in pixels
     * @param width The width of the viewport in pixels
     * @param height The height of the viewport in pixels */
    public end(x: number, y: number, width: number, height: number) {
        this.unbind();
        this.gl.viewport(x, y, width, height);
    }
}
