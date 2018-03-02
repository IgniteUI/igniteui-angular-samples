import { GridConfigGenerator } from "./configs/GridConfigGenerator";

import * as fs from "fs";
import * as path from "path";
import * as Collections from "typescript-collections";
import { LiveEditingFile } from "./LiveEditingFile";
import { IConfigGenerator } from "./configs/core/IConfigGenerator";
import { Config } from "./configs/core/Config";
import { TsImportsService } from "./TsImportsService";
import { Type } from "@angular/core/src/type";

const BASE_PATH = path.join(__dirname, "../");
//const BASE_PATH = path.join(__dirname, "../src/app/");
const ASSETS_SAMPLES_DIR = path.join(__dirname, "../src/assets/samples/");
const APP_MODULE_TEMPLATE_PATH = path.join(__dirname, "/templates/app.module.ts.template");
const APP_MODULE_PATH = path.join(__dirname, "../src/app/app.module.ts");

const COMPONENT_FILE_EXTENSIONS = ["ts", "html", "scss"];
const GO_DIR_BACK_REG_EX = new RegExp(/\.\.\//g);

const SAMPLE_ASSETS_BASE_DIR = "app/";
const CONFIG_GENERATORS = [GridConfigGenerator];

export class SampleAssetsGenerator {
    private tsImportsService: TsImportsService;

    constructor() {
        if (!fs.existsSync(ASSETS_SAMPLES_DIR)) {
            fs.mkdirSync(ASSETS_SAMPLES_DIR);
        }

        this.tsImportsService = new TsImportsService();
    }

    public generateSamplesAssets() {
        let currentFileImports = this.tsImportsService.getFileImports(__filename);
        for (let i = 0; i < CONFIG_GENERATORS.length; i++) {
            let configGeneratorFilePath = path.join(__dirname, currentFileImports.getValue(CONFIG_GENERATORS[i].name) + ".ts");
            let configGeneratorImports = this.tsImportsService.getFileImports(configGeneratorFilePath);
            let configs = (new CONFIG_GENERATORS[i]).generateConfigs();
            for (var j = 0; j < configs.length; j++) {
                this.generateSampleAssets(configs[j], configGeneratorImports);
            }
        }
    }

    private generateSampleAssets(config: Config, configImports: Collections.Dictionary<string, string>) {
        let componentModuleSpecifier = configImports.getValue(config.component.name);
        let componentPath = componentModuleSpecifier.replace(GO_DIR_BACK_REG_EX, "");
        let componentFilesPaths = new Array<string>();
        for (var i = 0; i < COMPONENT_FILE_EXTENSIONS.length; i++) {
            componentFilesPaths.push(componentPath + "." + COMPONENT_FILE_EXTENSIONS[i]);
        }

        let sampleFiles = new Array<LiveEditingFile>();
        let componentTsContent: string;
        for (let i = 0; i < componentFilesPaths.length; i++) {
            let filePath = componentFilesPaths[i].substring(componentFilesPaths[i].indexOf(SAMPLE_ASSETS_BASE_DIR));
            let fileContent = fs.readFileSync(path.join(BASE_PATH, componentFilesPaths[i]), "utf8");
            let file = new LiveEditingFile(filePath, fileContent);
            this.shortenComponentPath(config, file);
            sampleFiles.push(file);
            //if (componentFilesPaths[i].indexOf(".ts") !== -1) {
            //    componentTsContent = fileContent;
            //}
        }

        if (config.additionalFiles !== null && config.additionalFiles.length > 0) {
            for (let i = 0; i < config.additionalFiles.length; i++) {
                var filePath = config.additionalFiles[i].substring(config.additionalFiles[i].indexOf(SAMPLE_ASSETS_BASE_DIR));
                var fileContent = fs.readFileSync(path.join(BASE_PATH, config.additionalFiles[i]), "utf8");
                var file = new LiveEditingFile(filePath, fileContent);
                this.shortenComponentPath(config, file);
                sampleFiles.push(file);
            }
        }

        //var appModuleFile = new LiveEditingFile("app/app.module.ts", getAppModuleConfig(sampleConfig));
        //sampleFiles.push(shortenComponentPath(sampleConfig, appModuleFile, appModulePath, shortenComponentPathExceptions));
        //sampleFiles.push(new LiveEditingFile("app/app.component.html", getAppComponentHtml(componentTsContent)));

        //fs.writeFileSync(assetsSamplesDir + sampleConfig.componentRoutePath + ".json", JSON.stringify(sampleFiles));
    }

    //private getAppComponentHtml(componentTsContent) {
    //    var componentSelectorRegex = /selector:[\s]*["']([a-zA-Z0-9-]+)["']/g;
    //    var componentSeletcor = componentSelectorRegex.exec(componentTsContent)[1];
    //    var appComponentHtml = "<" + componentSeletcor + "></" + componentSeletcor + ">";
    //    return appComponentHtml;
    //}

    //private getAppModuleConfig(sampleConfig) {
    //    var appModuleTemplate = fs.readFileSync(APP_MODULE_TEMPLATE_PATH, "utf8");

    //    var imports = "";
    //    for (var i = 0; i < sampleConfig.appModuleConfig.imports.length; i++) {
    //        var appModuleImport = '\r\nimport { ' +
    //            this.formatAppModuleTypes(sampleConfig.appModuleConfig.imports[i].import.split(","), false, 1, "\r\n") +
    //            ' } from "' + sampleConfig.appModuleConfig.imports[i].from + '";';
    //        imports = imports + appModuleImport;
    //    }

    //    var ngDeclarations = "," + this.formatAppModuleTypes(sampleConfig.appModuleConfig.ngDeclarations.split(','), true, 2);
    //    var ngImports = "," + this.formatAppModuleTypes(sampleConfig.appModuleConfig.ngImports.split(","), true, 2);

    //    var ngProviders = "";
    //    if (sampleConfig.appModuleConfig.ngProviders) {
    //        ngProviders = this.formatAppModuleTypes(sampleConfig.appModuleConfig.ngProviders.split(","), false, 2, "\r\n\t");
    //    }

    //    appModuleTemplate = appModuleTemplate
    //        .replace("{imports}", imports)
    //        .replace("{ngDeclarations}", ngDeclarations)
    //        .replace("{ngImports}", ngImports)
    //        .replace("{ngProviders}", ngProviders);

    //    return appModuleTemplate;
    //}

    private formatAppModuleTypes(types, multiline, tabsCount, suffixIfMultiple) {
        if (types.length === 1 && !multiline) {
            return types.join("");
        }

        let formattedTypes = "\r\n";
        let tabs = "";
        for (let i = 0; i < tabsCount; i++) {
            tabs = tabs + "\t";
        }

        for (let i = 0; i < types.length; i++) {
            formattedTypes = formattedTypes + tabs + types[i].trim();
            if (i < types.length - 1) {
                formattedTypes = formattedTypes + ",\r\n";
            }
        }

        if (suffixIfMultiple) {
            formattedTypes = formattedTypes + suffixIfMultiple;
        }

        return formattedTypes;
    }

    private shortenComponentPath(config: Config, file: LiveEditingFile) {
        if (!config.shortenComponentPathBy) {
            return;
        }

        let shorteningRegex = new RegExp(config.shortenComponentPathBy, "g");
        file.path = file.path.replace(shorteningRegex, "/");
        file.content = file.content.replace(shorteningRegex, "/");
    }
}
