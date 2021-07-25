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
 * A {@link VertexData} implementation based on OpenGL vertex buffer objects.
 * <p>
 * If the OpenGL ES context was lost you can call {@link #invalidate()} to recreate a new OpenGL vertex buffer object.
 * <p>
 * The data is bound via glVertexAttribPointer() according to the attribute aliases specified via {@link VertexAttributes}
 * in the constructor.
 * <p>
 * VertexBufferObjects must be disposed via the {@link #dispose()} method when no longer needed
 *
 * @author mzechner, Dave Clayton <contact@redskyforge.com> */
export class VertexBufferObject {
    private buffer: WebGLBuffer;

    private gl: WebGLRenderingContext;

    /** Constructs a new interleaved VertexBufferObject.
     *
     * @param isStatic Whether the vertex data is static.
     * @param attributes The {@link VertexAttributes}. */
    public constructor(gl: WebGLRenderingContext, usage: GLenum, data: ArrayBufferView) {
        this.gl = gl;
        this.buffer = gl.createBuffer()!;
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, data, usage);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    }

    public setData(data: ArrayBufferView, bind = true) {
        if (bind) this.bind();
        this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, data);
        if (bind) this.unbind();
    }

    /** Binds this VertexBufferObject for rendering via glDrawArrays or glDrawElements */
    public bind() {
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
    }

    /** Unbinds this VertexBufferObject. */
    public unbind() {
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
    }

    /** Disposes of all resources this VertexBufferObject uses. */
    public dispose() {
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);
        this.gl.deleteBuffer(this.buffer);
    }
}
