import { StyleSyntax } from "./StyleSyntax";

import * as fs from "fs";
import * as path from "path";

const ASSETS_SAMPLES_DIR = path.join(__dirname, "../../src/assets/samples/");
const ASSETS_SAMPLES_CSS_SUPPORT_DIR = path.join(__dirname, "../../src/assets/samples/css-support/");

export abstract class Generator {
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

    protected styleSyntax: StyleSyntax;
}
