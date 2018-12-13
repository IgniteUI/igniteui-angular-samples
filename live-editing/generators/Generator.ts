import { StyleSyntax } from "./misc/StyleSyntax";

import * as fs from "fs";
import * as path from "path";

export const SAMPLE_SRC_FOLDER = "src/";
export const SAMPLE_APP_FOLDER = "src/app/";

const ASSETS_SAMPLES_DIR = path.join(__dirname, "../../src/assets/samples/");
const ASSETS_SAMPLES_CSS_SUPPORT_DIR = path.join(__dirname, "../../src/assets/samples/css-support/");

export abstract class Generator {
    protected styleSyntax: StyleSyntax;

    constructor(styleSyntax: StyleSyntax) {
        this.styleSyntax = styleSyntax;
        if (!fs.existsSync(ASSETS_SAMPLES_DIR)) {
            fs.mkdirSync(ASSETS_SAMPLES_DIR);
        }

        if (styleSyntax === StyleSyntax.CSS && !fs.existsSync(ASSETS_SAMPLES_CSS_SUPPORT_DIR)) {
            fs.mkdirSync(ASSETS_SAMPLES_CSS_SUPPORT_DIR);
        }
    }

    protected getAssetsSamplesDir() {
        if (this.styleSyntax === StyleSyntax.CSS) {
            return ASSETS_SAMPLES_CSS_SUPPORT_DIR;
        }

        return ASSETS_SAMPLES_DIR;
    }
}
