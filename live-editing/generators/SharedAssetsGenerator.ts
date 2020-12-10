// tslint:disable:prefer-const
import * as fs from "fs";
import * as path from "path";
import { Generator, SAMPLE_APP_FOLDER, SAMPLE_SRC_FOLDER } from "./Generator";
import { LiveEditingFile } from "./misc/LiveEditingFile";
import { SharedAssetsFile } from "./misc/SharedAssetsFile";
import { SharedAssetsGeneratorArgs } from "./misc/SharedAssetsGeneratorArgs";
import { DevDependencyResolver } from "../services/DependencyResolver";
const INDEX_FILE_PATH = path.join(__dirname, "../../src/index.html");
const POLYPFILLS_FILE_PATH = path.join(__dirname, "../../src/polyfills.ts");
const STYLES_FILE_PATH = path.join(__dirname, "../../src/styles.scss");
const ANGULAR_JSON_TEMPLATE_PATH = path.join(__dirname, "../templates/angular.json.template");
const MAIN_TS_FILE_PATH = path.join(__dirname, "../templates/main.ts.template");
const APP_COMPONENT_SCSS_PATH = path.join(__dirname, "../../src/app/app.component.scss");
const APP_COMPONENT_TS_PATH = path.join(__dirname, "../../src/app/app.component.ts");
export class SharedAssetsGenerator extends Generator {
    private _showLogs: boolean;

    constructor(showLogs?: boolean) {
        super();
        this._showLogs = showLogs;
        console.log("Live-Editing - SharedAssetsGenerator... ");
    }

    public generateSharedAssets() {
        let styles = fs.readFileSync(STYLES_FILE_PATH, "utf8");
        let appComponentScssFileContent = fs.readFileSync(APP_COMPONENT_SCSS_PATH, "utf8");
        let appComponentTsFileContnet = fs.readFileSync(APP_COMPONENT_TS_PATH, "utf8");

        let args = new SharedAssetsGeneratorArgs("styles.scss", styles, ANGULAR_JSON_TEMPLATE_PATH,
            "app.component.scss", appComponentScssFileContent,
            appComponentTsFileContnet);
        this._generateSharedAssets(args);
    }

    private _generateSharedAssets(args: SharedAssetsGeneratorArgs) {
        let indexFile = fs.readFileSync(INDEX_FILE_PATH, "utf8");
        let angularJsonFile = fs.readFileSync(args.angularJsonFilePath, "utf8");
        let mainTsFile = fs.readFileSync(MAIN_TS_FILE_PATH, "utf8");
        let files = new Array<LiveEditingFile>();
        let polyfillsFile = fs.readFileSync(POLYPFILLS_FILE_PATH, "utf8");


        files.push(new LiveEditingFile(SAMPLE_SRC_FOLDER + "index.html", indexFile));
        files.push(new LiveEditingFile(SAMPLE_SRC_FOLDER + "polyfills.ts", polyfillsFile));
        files.push(new LiveEditingFile(SAMPLE_SRC_FOLDER + args.stylesFileName, args.stylesFileContent));
        files.push(new LiveEditingFile("angular.json", angularJsonFile));
        files.push(new LiveEditingFile(SAMPLE_SRC_FOLDER + "main.ts", mainTsFile));
        files.push(new LiveEditingFile(SAMPLE_APP_FOLDER + args.appComponentStylesFileName,
             args.appComponentStylesFileContent));
        files.push(new LiveEditingFile(SAMPLE_APP_FOLDER + "app.component.ts", args.appComponentTsFileContent));

        let sharedFile = new SharedAssetsFile(files, new DevDependencyResolver().devDependencies);
        fs.writeFileSync(this.getAssetsSamplesDir() + "shared.json", JSON.stringify(sharedFile));
    }
}
