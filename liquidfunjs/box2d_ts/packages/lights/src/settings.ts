/** Gamma correction value recommended to be used */
export const RECOMMENDED_GAMMA_CORRECTION = 0.625;
export const NO_GAMMA_CORRECTION = 1;

export const lightSettings = {
    /**
     * Enables/disables usage of diffuse algorithm.
     *
     * <p>If set to true lights are blended using the diffuse shader. This is
     * more realistic model than normally used as it preserve colors but might
     * look bit darker and also it might improve performance slightly.
     */
    isDiffuse: false,

    /**
     * Gamma correction. Try to set it to SUGGESTED_GAMMA_CORRECTION
     *
     * <p><b>This need to be set before creating instance of rayHandler.</b>
     *
     * <p>NOTE: To match the visuals with gamma uncorrected lights the light
     * distance parameters is modified implicitly.
     */
    gammaCorrection: NO_GAMMA_CORRECTION,
};
