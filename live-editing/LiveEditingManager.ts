import * as fs from "fs";
import * as fsExtra from "fs-extra";
import * as path from "path";

import { MetaDataGenerator } from "./generators/MetaDataGenerator";
import { StyleSyntax } from "./generators/misc/StyleSyntax";
import { SampleAssetsGenerator } from "./generators/SampleAssetsGenerator";
import { SharedAssetsGenerator } from "./generators/SharedAssetsGenerator";

export const ASSETS_SAMPLES_DIR = path.join(__dirname, "../src/assets/samples/");
export const ASSETS_SAMPLES_CSS_SUPPORT_DIR = path.join(__dirname, "../src/assets/samples/css-support/");

class LiveEditingManager {
    public run() {
        fsExtra.removeSync(ASSETS_SAMPLES_DIR);
        fs.mkdirSync(ASSETS_SAMPLES_DIR);
        fs.mkdirSync(ASSETS_SAMPLES_CSS_SUPPORT_DIR);

        this._run(StyleSyntax.CSS);
        this._run(StyleSyntax.Sass);
    }

    public _run(styleSyntax: StyleSyntax) {
        new SharedAssetsGenerator(styleSyntax).generateSharedAssets();
        new SampleAssetsGenerator(styleSyntax).generateSamplesAssets();
        new MetaDataGenerator(styleSyntax).Generate();
    }
}

new LiveEditingManager().run();
