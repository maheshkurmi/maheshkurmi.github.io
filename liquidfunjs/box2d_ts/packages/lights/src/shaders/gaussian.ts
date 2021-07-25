import { createShaderProgram, glsl } from "typed-glsl";

const createVertexSource = (FBO_W: string, FBO_H: string) => glsl`
attribute vec4 a_position;
uniform vec2  dir;
attribute vec2 a_texCoord;
varying vec2 v_texCoords0;
varying vec2 v_texCoords1;
varying vec2 v_texCoords2;
varying vec2 v_texCoords3;
varying vec2 v_texCoords4;

const vec2 futher = vec2(3.2307692308 / ${FBO_W}, 3.2307692308 / ${FBO_H} );
const vec2 closer = vec2(1.3846153846 / ${FBO_W}, 1.3846153846 / ${FBO_H} );

void main() {
    vec2 f = futher * dir;
    vec2 c = closer * dir;
    v_texCoords0 = a_texCoord - f;
    v_texCoords1 = a_texCoord - c;
    v_texCoords2 = a_texCoord;
    v_texCoords3 = a_texCoord + c;
    v_texCoords4 = a_texCoord + f;
    gl_Position = a_position;
}
`;

const createFragmentSource = (RGB: string) => glsl`
#ifdef GL_ES
precision lowp float;
#define MED mediump
#else
#define MED 
#endif

uniform sampler2D u_texture;
varying MED vec2 v_texCoords0;
varying MED vec2 v_texCoords1;
varying MED vec2 v_texCoords2;
varying MED vec2 v_texCoords3;
varying MED vec2 v_texCoords4;
const float center = 0.2270270270;
const float close  = 0.3162162162;
const float far    = 0.0702702703;

void main() {	 
    gl_FragColor${RGB} = far    * texture2D(u_texture, v_texCoords0)${RGB}
	      		+ close  * texture2D(u_texture, v_texCoords1)${RGB}
				+ center * texture2D(u_texture, v_texCoords2)${RGB}
				+ close  * texture2D(u_texture, v_texCoords3)${RGB}
				+ far    * texture2D(u_texture, v_texCoords4)${RGB};
}
`;

export function createGaussianShader(gl: WebGLRenderingContext, width: number, height: number, diffuse: boolean) {
    const vertexSrc = createVertexSource(width.toFixed(1), height.toFixed(1));
    const fragmentSrc = createFragmentSource(diffuse ? ".rgb" : "");

    return createShaderProgram(gl, vertexSrc, fragmentSrc, {
        a_position: "vertexAttribPointer",
        a_texCoord: "vertexAttribPointer",
        dir: "uniform2f",
    });
}

export type GaussianShader = ReturnType<typeof createGaussianShader>;
