import * as fs from "fs";
// tslint:disable-next-line: no-implicit-dependencies
import * as fsExtra from "fs-extra";
import * as path from "path";

import { MetaDataGenerator } from "./generators/MetaDataGenerator";
import { SampleAssetsGenerator } from "./generators/SampleAssetsGenerator";
import { SharedAssetsGenerator } from "./generators/SharedAssetsGenerator";
import { TsRoutingPathService } from "./services/TsRoutingPathService";
export class LiveEditingManager {
    public static  ASSETS_SAMPLES_DIR = path.join(__dirname, "../src/assets/samples/");
    public static  DEFAULT_PROJECT = true;

    public static routingPathService: TsRoutingPathService = new TsRoutingPathService();

    constructor(){
       LiveEditingManager.routingPathService.generateRouting();
    }

    public run(changeAssetsPath: boolean) {

        if (changeAssetsPath) {
            LiveEditingManager.DEFAULT_PROJECT = false;
            LiveEditingManager.ASSETS_SAMPLES_DIR = path.join(__dirname, "../projects/app-lob/src/assets/samples/");
        }
        fsExtra.removeSync(LiveEditingManager.ASSETS_SAMPLES_DIR);
        fs.mkdirSync(LiveEditingManager.ASSETS_SAMPLES_DIR);

        this.generate(false);

        console.log("-----------------------------------------------------");
        console.log("Live-Editing - output folder: " +  LiveEditingManager.ASSETS_SAMPLES_DIR);
    }

    private generate(showLogs?: boolean) {

        const logInfo = "Sass syntax";

        console.log("-----------------------------------------------------");
        console.log("Live-Editing - with " + logInfo);

        new SharedAssetsGenerator(showLogs).generateSharedAssets();
        new SampleAssetsGenerator(showLogs).generateSamplesAssets();
        new MetaDataGenerator().Generate();
    }
}
