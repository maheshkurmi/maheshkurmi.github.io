import { createShaderProgram, glsl } from "typed-glsl";

const vertexSource = glsl`
attribute vec4 a_position;
attribute vec4 quad_colors;
attribute float s;
uniform mat4 u_projTrans;
varying vec4 v_color;

void main() {
    v_color = s * quad_colors;
    gl_Position =  u_projTrans * a_position;
}
`;

const createFragmentSource = (GAMMA: string) => glsl`
#ifdef GL_ES
precision lowp float;
#define MED mediump
#else
#define MED 
#endif

varying vec4 v_color;

void main() {
    gl_FragColor = ${GAMMA}(v_color);
}
`;

export function createLightShader(gl: WebGLRenderingContext, gammaCorrection: boolean) {
    const fragmentSrc = createFragmentSource(gammaCorrection ? "sqrt" : "");
    return createShaderProgram(gl, vertexSource, fragmentSrc, {
        a_position: "vertexAttribPointer",
        quad_colors: "vertexAttribPointer",
        s: "vertexAttribPointer",
        u_projTrans: "uniformMatrix4f",
    });
}

export type LightShader = ReturnType<typeof createLightShader>;
