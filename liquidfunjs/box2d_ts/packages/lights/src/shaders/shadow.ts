import { createShaderProgram, glsl } from "typed-glsl";

const vertexSource = glsl`
attribute vec4 a_position;
attribute vec2 a_texCoord;
varying vec2 v_texCoords;

void main() {
    v_texCoords = a_texCoord;
    gl_Position = a_position;
}
`;

const fragmentSource = glsl`
#ifdef GL_ES
precision lowp float;
#define MED mediump
#else
#define MED 
#endif

varying MED vec2 v_texCoords;
uniform sampler2D u_texture;
uniform vec4 ambient;

void main() {
    vec4 c = texture2D(u_texture, v_texCoords);
    gl_FragColor.rgb = c.rgb * c.a + ambient.rgb;
    gl_FragColor.a = ambient.a - c.a;
}
`;

export function createShadowShader(gl: WebGLRenderingContext) {
    return createShaderProgram(gl, vertexSource, fragmentSource, {
        // fixme
        a_position: "vertexAttribPointer",
        a_texCoord: "vertexAttribPointer",
        u_texture: "uniform1i",
        ambient: "uniform4f",
    });
}

export type ShadowShader = ReturnType<typeof createShadowShader>;
