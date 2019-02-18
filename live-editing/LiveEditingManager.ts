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

        console.log("Live-Editing... CSS");
        this._run(StyleSyntax.CSS, true);
        console.log("Live-Editing... SASS");
        this._run(StyleSyntax.Sass, false);
    }

    public _run(styleSyntax: StyleSyntax, showLogs?: boolean) {
        new SharedAssetsGenerator(styleSyntax, showLogs).generateSharedAssets();
        new SampleAssetsGenerator(styleSyntax, showLogs).generateSamplesAssets();
        new MetaDataGenerator(styleSyntax).Generate();
    }
}

new LiveEditingManager().run();
