// tslint:disable:prefer-const
import * as fs from "fs";
import * as path from "path";
import { DependencyResolver } from "./../services/DependencyResolver";
import { LiveEditingFile } from "./LiveEditingFile";
import { SharedAssetsFile } from "./SharedAssetsFile";
import { StyleSyntax } from "./StyleSyntax";
import { SharedAssetsGeneratorArgs } from "./SharedAssetsGeneratorArgs";
import { SassCompiler } from "../services/SassCompiler";
import { Generator } from "./Generator";

const INDEX_FILE_PATH = path.join(__dirname, "../../src/index.html");
const POLYPFILLS_FILE_PATH = path.join(__dirname, "../../src/polyfills.ts");
const STYLES_FILE_PATH = path.join(__dirname, "../../src/styles.scss");
const ANGULAR_CLI_TEMPLATE_PATH = path.join(__dirname, "../templates/angular-cli.json.template");
const ANGULAR_CLI_TEMPLATE_CSS_SUPPORT_PATH = path.join(__dirname, "../templates/angular-cli-css-support.json.template");
const MAIN_TS_FILE_PATH = path.join(__dirname, "../templates/main.ts.template");
const APP_COMPONENT_SCSS_PATH = path.join(__dirname, "../../src/app/app.component.scss");
const APP_COMPONENT_TS_PATH = path.join(__dirname, "../../src/app/app.component.ts");

export class SharedAssetsGenerator extends Generator {
    constructor(styleSyntax: StyleSyntax = StyleSyntax.Sass) {
        super(styleSyntax);
    }

    public generateSharedAssets() {
        switch (this.styleSyntax) {
            case StyleSyntax.Sass:
                this._generateSharedAssetsWithSass();
                break;

            case StyleSyntax.CSS:
                this._generateSharedAssetsWithCSS();
                break;

            default:
                throw new Error("Unrecognized style syntax.");
        }
    }

    private _generateSharedAssetsWithSass() {
        let styles = fs.readFileSync(STYLES_FILE_PATH, "utf8");
        let appComponentScssFileContent = fs.readFileSync(APP_COMPONENT_SCSS_PATH, "utf8");
        let appComponentTsFileContnet = fs.readFileSync(APP_COMPONENT_TS_PATH, "utf8");

        let args = new SharedAssetsGeneratorArgs("styles.scss", styles, ANGULAR_CLI_TEMPLATE_PATH,
            "app/app.component.scss", appComponentScssFileContent,
            appComponentTsFileContnet);
        this._generateSharedAssets(args);
    }

    private _generateSharedAssetsWithCSS() {
        let sassCompiler: SassCompiler = new SassCompiler();

        let styles = fs.readFileSync(STYLES_FILE_PATH, "utf8");        
        styles = sassCompiler.compile(styles);

        let appComponentStylesFileContent = fs.readFileSync(APP_COMPONENT_SCSS_PATH, "utf8");
        appComponentStylesFileContent = sassCompiler.compile(appComponentStylesFileContent);

        let appComponentTsFileContnet = fs.readFileSync(APP_COMPONENT_TS_PATH, "utf8");
        appComponentTsFileContnet = appComponentTsFileContnet.replace(
            "app.component.scss", "app.component.css");

        let args = new SharedAssetsGeneratorArgs("styles.css", styles,
            ANGULAR_CLI_TEMPLATE_CSS_SUPPORT_PATH, "app/app.component.css",
            appComponentStylesFileContent, appComponentTsFileContnet);
        this._generateSharedAssets(args);
    }

    private _generateSharedAssets(args: SharedAssetsGeneratorArgs) {
        let files = new Array<LiveEditingFile>();

        files.push(new LiveEditingFile("index.html", fs.readFileSync(INDEX_FILE_PATH, "utf8")));
        files.push(new LiveEditingFile("polyfills.ts", fs.readFileSync(POLYPFILLS_FILE_PATH, "utf8")));
        files.push(new LiveEditingFile(args.stylesFileName, args.stylesFileContent));
        files.push(new LiveEditingFile(".angular-cli.json", fs.readFileSync(args.angularCliFilePath, "utf8")));
        files.push(new LiveEditingFile("main.ts", fs.readFileSync(MAIN_TS_FILE_PATH, "utf8")));
        files.push(new LiveEditingFile(args.appComponentStylesFileName, args.appComponentStylesFileContent));
        files.push(new LiveEditingFile("app/app.component.ts", args.appComponentTsFileContent));

        let sharedFile = new SharedAssetsFile(files);
        fs.writeFileSync(this.getAssetsSamplesDir() + "/shared.json", JSON.stringify(sharedFile));
    }
}
