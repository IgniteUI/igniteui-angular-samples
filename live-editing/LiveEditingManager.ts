import * as fs from "fs";
// tslint:disable-next-line: no-implicit-dependencies
import * as fsExtra from "fs-extra";
import * as path from "path";

import { MetaDataGenerator } from "./generators/MetaDataGenerator";
import { StyleSyntax } from "./generators/misc/StyleSyntax";
import { SampleAssetsGenerator } from "./generators/SampleAssetsGenerator";
import { SharedAssetsGenerator } from "./generators/SharedAssetsGenerator";

export class LiveEditingManager {
    public static  ASSETS_SAMPLES_DIR = path.join(__dirname, "../src/assets/samples/");
    public static  ASSETS_SAMPLES_CSS_SUPPORT_DIR = path.join(__dirname, "../src/assets/samples/css-support/");
    public static  DEFAULT_PROJECT = true;
    public run(changeAssetsPath: boolean, compileSass: boolean) {

        if (changeAssetsPath) {
            LiveEditingManager.DEFAULT_PROJECT = false;
            // tslint:disable-next-line: max-line-length
            LiveEditingManager.ASSETS_SAMPLES_CSS_SUPPORT_DIR = path.join(__dirname, "../projects/app-lob/src/assets/samples/css-support/");
            LiveEditingManager.ASSETS_SAMPLES_DIR = path.join(__dirname, "../projects/app-lob/src/assets/samples/");
        }

        fsExtra.removeSync(LiveEditingManager.ASSETS_SAMPLES_DIR);
        fs.mkdirSync(LiveEditingManager.ASSETS_SAMPLES_DIR);

        if (compileSass) {
            fs.mkdirSync(LiveEditingManager.ASSETS_SAMPLES_CSS_SUPPORT_DIR);
            this.generate(StyleSyntax.CSS, false);
        }

        this.generate(StyleSyntax.Sass, false);

        console.log("-----------------------------------------------------");
        console.log("Live-Editing - output folder: " +  LiveEditingManager.ASSETS_SAMPLES_DIR);
    }

    private generate(styleSyntax: StyleSyntax, showLogs?: boolean) {

        let logInfo = "";
        if (styleSyntax === StyleSyntax.CSS) {
            logInfo = "CSS syntax";
        } else {
            logInfo = "Sass syntax";
        }
        console.log("-----------------------------------------------------");
        console.log("Live-Editing - with " + logInfo);

        new SharedAssetsGenerator(styleSyntax, showLogs).generateSharedAssets();
        new SampleAssetsGenerator(styleSyntax, showLogs).generateSamplesAssets();
        new MetaDataGenerator(styleSyntax).Generate();
    }
}
