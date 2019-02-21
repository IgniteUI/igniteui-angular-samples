import { ASSETS_SAMPLES_CSS_SUPPORT_DIR, ASSETS_SAMPLES_DIR } from "../LiveEditingManager";
import { StyleSyntax } from "./misc/StyleSyntax";

export const SAMPLE_SRC_FOLDER = "src/";
export const SAMPLE_APP_FOLDER = "src/app/";

export abstract class Generator {
    protected styleSyntax: StyleSyntax;

    constructor(styleSyntax: StyleSyntax) {
        this.styleSyntax = styleSyntax;
    }

    protected getAssetsSamplesDir() {
        if (this.styleSyntax === StyleSyntax.CSS) {
            return ASSETS_SAMPLES_CSS_SUPPORT_DIR;
        }

        return ASSETS_SAMPLES_DIR;
    }
}
