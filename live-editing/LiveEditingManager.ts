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

        this.generate(StyleSyntax.CSS, false);
        this.generate(StyleSyntax.Sass, false);
    }

    private generate(styleSyntax: StyleSyntax, showLogs?: boolean) {

        let logInfo = "";
        if (styleSyntax === StyleSyntax.CSS) {
            logInfo = "CSS syntax"
        } else {
            logInfo = "Sass syntax"
        }
        console.log("Live-Editing... " + logInfo);

        new SharedAssetsGenerator(styleSyntax, showLogs).generateSharedAssets();
        new SampleAssetsGenerator(styleSyntax, showLogs).generateSamplesAssets();
        new MetaDataGenerator(styleSyntax).Generate();
    }
}

new LiveEditingManager().run();
