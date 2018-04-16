import * as fs from "fs";
import * as path from "path";
import { LiveEditingFile } from "./LiveEditingFile";
import { SharedAssetsFile } from "./SharedAssetsFile";
import * as Collections from "typescript-collections";

const SAMPLES_PACKAGE_DEPENDENCIES = [
    "@angular/animations",
    "@angular/common",
    "@angular/compiler",
    "@angular/core",
    "@angular/forms",
    "@angular/http",
    "@angular/platform-browser",
    "@angular/platform-browser-dynamic",
    "@angular/router",
    "@types/hammerjs",
    "classlist.js",
    "core-js",
    "hammerjs",
    "igniteui-angular",
    "igniteui-angular-charts",
    "intl",
    "jszip",
    "rxjs",
    "tslib",
    "web-animations-js",
    "zone.js"
];

const PACKAGES_CONFIG_PATH = path.join(__dirname, "../package.json");
const INDEX_FILE_PATH = path.join(__dirname, "../src/index.html");
const POLYPFILLS_FILE_PATH = path.join(__dirname, "../src/polyfills.ts");
const STYLES_FILE_PATH = path.join(__dirname, "../src/styles.scss");
const ANGULAR_CLI_TEMPLATE_PATH = path.join(__dirname, "../live-editing/templates/angular-cli.json.template");
const MAIN_TS_FILE_PATH = path.join(__dirname, "../live-editing/templates/main.ts.template");
const APP_COMPONENT_SCSS_PATH = path.join(__dirname, "../src/app/app.component.scss");
const APP_COMPONENT_TS_PATH = path.join(__dirname, "../src/app/app.component.ts");
const ASSETS_SAMPLES_DIR = path.join(__dirname, "../src/assets/samples/");

export class SharedAssetsGenerator {
    constructor() {
        if (!fs.existsSync(ASSETS_SAMPLES_DIR)) {
            fs.mkdirSync(ASSETS_SAMPLES_DIR);
        }
    }

    public generateSharedAssets() {
        let files = new Array<LiveEditingFile>();

        files.push(new LiveEditingFile("index.html", fs.readFileSync(INDEX_FILE_PATH, "utf8")));
        files.push(new LiveEditingFile("polyfills.ts", fs.readFileSync(POLYPFILLS_FILE_PATH, "utf8")));
        files.push(new LiveEditingFile("styles.scss", fs.readFileSync(STYLES_FILE_PATH, "utf8")));
        files.push(new LiveEditingFile(".angular-cli.json", fs.readFileSync(ANGULAR_CLI_TEMPLATE_PATH, "utf8")));
        files.push(new LiveEditingFile("main.ts", fs.readFileSync(MAIN_TS_FILE_PATH, "utf8")));
        files.push(new LiveEditingFile("app/app.component.scss", fs.readFileSync(APP_COMPONENT_SCSS_PATH, "utf8")));
        files.push(new LiveEditingFile("app/app.component.ts", fs.readFileSync(APP_COMPONENT_TS_PATH, "utf8")));

        let sharedFile = new SharedAssetsFile(JSON.stringify(this.getSamplesPackageDependencies()), files);
        fs.writeFileSync(ASSETS_SAMPLES_DIR + "/shared.json", JSON.stringify(sharedFile));
    }

    private getSamplesPackageDependencies() {
        let packageFile = JSON.parse(fs.readFileSync(PACKAGES_CONFIG_PATH, "utf8"));
        let packageFileDependencies = packageFile.dependencies;
        let dependenciesNeeded = new Collections.Set<string>();

        for (let i = 0; i < SAMPLES_PACKAGE_DEPENDENCIES.length; i++) {
            dependenciesNeeded.add(SAMPLES_PACKAGE_DEPENDENCIES[i]);
        }

        for (let key in packageFileDependencies) {
            if (!dependenciesNeeded.contains(key)) {
                delete packageFileDependencies[key];
            }
        }
        
        return packageFileDependencies;
    }
}
