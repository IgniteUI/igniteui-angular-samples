// tslint:disable:prefer-for-of
// tslint:disable:prefer-const
import * as fs from "fs";
import * as path from "path";
import { SassCompiler } from "../services/SassCompiler";
import { Config } from "./../configs/core/Config";
import { DependencyResolver } from "./../services/DependencyResolver";
import { TsImportsService } from "./../services/TsImportsService";
import { Generator, SAMPLE_APP_FOLDER, SAMPLE_SRC_FOLDER } from "./Generator";
import { StyleSyntax } from "./misc/StyleSyntax";

import * as Routing from "../../src/app/app-routing.module";

import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";
import { Type } from "@angular/core/src/type";

import { Route } from "@angular/router";
import { CONFIG_GENERATORS } from "./ConfigGenerators";
import { LiveEditingFile } from "./misc/LiveEditingFile";
import { SampleDefinitionFile } from "./misc/SampleDefinitionFile";
import { MODULE_ROUTES } from "./Routes";

const BASE_PATH = path.join(__dirname, "../../");
const APP_MODULE_TEMPLATE_PATH = path.join(__dirname, "../templates/app.module.ts.template");
const CONFIG_GENERATORS_FILE_NAME = "ConfigGenerators.ts";

const COMPONENT_STYLE_FILE_EXTENSION = "scss";
const COMPONENT_FILE_EXTENSIONS = ["ts", "html", COMPONENT_STYLE_FILE_EXTENSION];
const GO_DIR_BACK_REG_EX = new RegExp(/\.\.\//g);

export class SampleAssetsGenerator extends Generator {
    private _dependencyResolver: DependencyResolver;
    private _tsImportsService: TsImportsService;
    private _sassCompiler: SassCompiler;
    private _componentRoutes: Map<string, string>;
    private _showLogs: boolean;

    constructor(styleSyntax: StyleSyntax = StyleSyntax.Sass, showLogs?: boolean) {
        super(styleSyntax);

        this._showLogs = showLogs;
        console.log("Live-Editing - SampleAssetsGenerator... ");
        this._dependencyResolver = new DependencyResolver();
        this._tsImportsService = new TsImportsService();
        this._sassCompiler = new SassCompiler();

        this._componentRoutes = new Map<string, string>();
        this._generateRoutes();
    }

    public generateSamplesAssets() {
        let configGeneratorsFilePath = path.join(__dirname, CONFIG_GENERATORS_FILE_NAME);
        let currentFileImports = this._tsImportsService.getFileImports(configGeneratorsFilePath);

        for (let i = 0; i < CONFIG_GENERATORS.length; i++) {
            let generator = CONFIG_GENERATORS[i];
            let generatorName = generator.name;
            let generatorPath = path.join(__dirname,
                currentFileImports.get(generatorName) + ".ts");
            let generatorImports = this._tsImportsService.getFileImports(generatorPath);
            let generatorConfigs = (new CONFIG_GENERATORS[i]()).generateConfigs();

            // if (generatorName !== "DataChartConfigGenerator") {
            //     continue;
            // }
            for (let j = 0; j < generatorConfigs.length; j++) {
                this._generateSampleAssets(generatorConfigs[j], generatorImports);
            }
        }
    }

    private _generateRoutes() {
        let modulePaths = new Map<string, string>();
        for (let i = 0; i < Routing.samplesRoutes.length; i++) {
            let route: Route = Routing.samplesRoutes[i];
            if (route.component) {
                this._componentRoutes.set(route.component.name, route.path);
            } else if (route.loadChildren) {
                let loadChildren = route.loadChildren.toString();
                let moduleName = loadChildren.substring(loadChildren.lastIndexOf("#") + 1);
                modulePaths.set(moduleName, route.path);
            }
        }

        for (let i = 0; i < MODULE_ROUTES.length; i++) {
            let moduleName = MODULE_ROUTES[i].module.name;
            let modulePath = modulePaths.get(moduleName);
            if (this._showLogs) {
                let stats =  MODULE_ROUTES[i].routes.length + " routes";
                console.log("Live-Editing - generated " + stats + " for " + moduleName);
            }
            for (let j = 0; j < MODULE_ROUTES[i].routes.length; j++) {
                let route: Route = MODULE_ROUTES[i].routes[j];
                let routePath = modulePath;
                if (route.path) {
                    routePath += "/" + route.path;
                }

                this._componentRoutes.set(route.component.name, routePath);
            }
        }
    }

    private _generateSampleAssets(config: Config, configImports: Map<string, string>) {
        let sampleFiles = this._getComponentFiles(config, configImports);
        let sampleFilesCount =  sampleFiles.length;
        this._processComponentFilesStyles(sampleFiles);
        let componentTsContent;
        let componentTsName;
        for (let i = 0; i < sampleFiles.length; i++) {
            if (sampleFiles[i].path.indexOf(".ts") !== -1) {
                componentTsContent = sampleFiles[i].content;
                componentTsName = this._getFileName(sampleFiles[i].path).replace(".component", "");
                componentTsName = componentTsName.replace(".ts", "");
                break;
            }
        }
        let additionalFiles: LiveEditingFile[] = [];
        if (config.additionalFiles !== undefined && config.additionalFiles.length > 0) {
            additionalFiles = this._getAdditionalFiles(config);
            this._processAdditionalFilesStyles(additionalFiles);
            sampleFiles = sampleFiles.concat(additionalFiles);
        }

        let appModuleFile = new LiveEditingFile(
            SAMPLE_APP_FOLDER + "app.module.ts", this._getAppModuleConfig(config, configImports));
        this._shortenComponentPath(config, appModuleFile);
        sampleFiles.push(appModuleFile);
        sampleFiles.push(new LiveEditingFile(
            SAMPLE_APP_FOLDER + "app.component.html", this._getAppComponentHtml(componentTsContent)));

        if (this._showLogs) {
            let stats = sampleFilesCount + " + " +  additionalFiles.length + " files";
            console.log("Live-Editing - generated " + stats + " for " + componentTsName);
        }

        let dependencies = this._dependencyResolver.resolveSampleDependencies(
            config.dependenciesType, config.additionalDependencies);
        let sampleDef = new SampleDefinitionFile(sampleFiles, dependencies);
        fs.writeFileSync(this.getAssetsSamplesDir() +
            this._componentRoutes.get(config.component.name).replace("/", "-") + ".json",
                JSON.stringify(sampleDef));
    }

    private _getComponentFiles(config: Config,
                               configImports: Map<string, string>): LiveEditingFile[] {
        let componentFiles = new Array<LiveEditingFile>();
        let componentModuleSpecifier = configImports.get(config.component.name);
        let componentPath = componentModuleSpecifier.replace(GO_DIR_BACK_REG_EX, "");
        for (let i = 0; i < COMPONENT_FILE_EXTENSIONS.length; i++) {
            let componentFilePath = componentPath + "." + COMPONENT_FILE_EXTENSIONS[i];
            let fileContent = fs.readFileSync(path.join(BASE_PATH, componentFilePath), "utf8");
            let file = new LiveEditingFile(componentFilePath, fileContent);
            this._shortenComponentPath(config, file);
            componentFiles.push(file);
        }

        return componentFiles;
    }

    private _processComponentFilesStyles(componentFiles: LiveEditingFile[]) {
        if (this.styleSyntax === StyleSyntax.CSS) {
            let tsFile: LiveEditingFile;
            let styleFile: LiveEditingFile;
            for (let i = 0; i < componentFiles.length; i++) {
                if (componentFiles[i].path.indexOf(".ts") !== -1) {
                    tsFile = componentFiles[i];
                } else if (componentFiles[i].path.indexOf("." + COMPONENT_STYLE_FILE_EXTENSION) !== -1) {
                    styleFile = componentFiles[i];
                }
            }

            let styleFileName = this._getFileName(styleFile.path);
            styleFile.path = styleFile.path.replace("." + COMPONENT_STYLE_FILE_EXTENSION, ".css");
            let newStyleFileName = this._getFileName(styleFile.path);
            styleFile.content = this._sassCompiler.compile(styleFile.content);
            tsFile.content = tsFile.content.replace(styleFileName, newStyleFileName);
        }
    }

    private _getAdditionalFiles(config: Config): LiveEditingFile[] {
        let additionalFiles = new Array<LiveEditingFile>();
        for (let i = 0; i < config.additionalFiles.length; i++) {
            let fileContent = fs.readFileSync(path.join(BASE_PATH, config.additionalFiles[i]), "utf8");
            config.additionalFiles[i] = config.additionalFiles[i].substring(
                config.additionalFiles[i].indexOf(SAMPLE_SRC_FOLDER));
            let file = new LiveEditingFile(config.additionalFiles[i], fileContent);
            this._shortenComponentPath(config, file);
            additionalFiles.push(file);
        }

        return additionalFiles;
    }

    private _processAdditionalFilesStyles(additionalFiles: LiveEditingFile[]) {
        if (this.styleSyntax === StyleSyntax.CSS) {
            for (let i = 0; i < additionalFiles.length; i++) {
                if (additionalFiles[i].path.indexOf("." + COMPONENT_STYLE_FILE_EXTENSION) !== -1) {
                    let file = additionalFiles[i];
                    let fileName = this._getFileName(file.path);
                    file.path = file.path.replace("." + COMPONENT_STYLE_FILE_EXTENSION, ".css");
                    file.content = this._sassCompiler.compile(file.content);

                    // additional component detected
                    if (fileName.indexOf("component") !== -1) {
                        let newFileName = this._getFileName(file.path);
                        let componentFileName = newFileName.replace(".css", ".ts");
                        for (let j = 0; j < additionalFiles.length; j++) {
                            if (additionalFiles[j].path.indexOf(componentFileName) !== -1) {
                                additionalFiles[j].content = additionalFiles[j].content.replace(fileName, newFileName);
                                break;
                            }
                        }
                    }
                }
            }
        }
    }

    private _getAppComponentHtml(componentTsContent) {
        let selectorRegex = /selector:[\s]*["']([a-zA-Z0-9-]+)["']/g;
        let selectorComponent = selectorRegex.exec(componentTsContent)[1];
        let appComponentHtml = "<" + selectorComponent + "></" + selectorComponent + ">";
        return appComponentHtml;
    }

    private _getAppModuleConfig(config: Config, configImports: Map<string, string>) {
        let appModuleTemplate = fs.readFileSync(APP_MODULE_TEMPLATE_PATH, "utf8");

        let imports = this._getAppModuleImports(config, configImports);

        let appModuleNgDeclarations: string[] = config.appModuleConfig.ngDeclarations.map((d) => d.name);
        let ngDeclarations = "," + this._formatAppModuleTypes(appModuleNgDeclarations, true, 2);

        let appModuleNgImports: string[] = this._getAppModuleNgImports(config);

        let ngImports = "," + this._formatAppModuleTypes(appModuleNgImports, true, 2);

        let ngProviders = "";
        if (config.appModuleConfig.ngProviders !== undefined &&
            config.appModuleConfig.ngProviders.length > 0) {
            let appModuleNgProviders: string[] = config.appModuleConfig.ngProviders
                .map((p) => p as Type<any>).map((p) => p.name);
            ngProviders = this._formatAppModuleTypes(appModuleNgProviders, false, 2, "\r\n\t");
        }

        let ngEntryComponents = "";
        if (config.appModuleConfig.ngEntryComponents !== undefined &&
            config.appModuleConfig.ngEntryComponents.length > 0) {
            let appModuleNgEntryComponents: string[] = config.appModuleConfig.ngEntryComponents.map((d) => d.name);
            ngEntryComponents = this._formatAppModuleTypes(appModuleNgEntryComponents, false, 2, "\r\n\t");
        }

        appModuleTemplate = appModuleTemplate
            .replace("{imports}", imports)
            .replace("{ngDeclarations}", ngDeclarations)
            .replace("{ngImports}", ngImports)
            .replace("{ngProviders}", ngProviders)
            .replace("{ngEntryComponents}", ngEntryComponents);

        return appModuleTemplate;
    }

    private _getAppModuleNgImports(config: Config) {
        let appModuleNgImports: string[] = new Array<string>();
        for (let i = 0; i < config.appModuleConfig.ngImports.length; i++) {
            if (typeof config.appModuleConfig.ngImports[i] === "string") {
                appModuleNgImports.push(config.appModuleConfig.ngImports[i]);
            } else {
                let appModuleNgImport: Type<any> = config.appModuleConfig.ngImports[i] as Type<any>;
                if (appModuleNgImport.name !== undefined) {
                    appModuleNgImports.push(appModuleNgImport.name);
                } else {
                    let appModuleNgImportWithProviders: ModuleWithProviders =
                        config.appModuleConfig.ngImports[i] as ModuleWithProviders;
                    let useClass = "";
                    let forRoot = ".forRoot()";
                    if (appModuleNgImportWithProviders.providers
                        && appModuleNgImportWithProviders.providers.length > 0
                        && appModuleNgImportWithProviders.providers[0].useClass
                        && appModuleNgImportWithProviders.providers[0].useClass.name) {
                        useClass = appModuleNgImportWithProviders.providers[0].useClass.name;
                        forRoot = `.forRoot(${useClass})`;
                    }

                    appModuleNgImports.push(appModuleNgImportWithProviders.ngModule.name + forRoot);
                }
            }
        }

        return appModuleNgImports;
    }

    private _getAppModuleImports(config: Config, configImports: Map<string, string>): string {
        let sampleImports = new Map<string, string[]>();

        for (let i = 0; i < config.appModuleConfig.imports.length; i++) {
            let importName;
            if (typeof config.appModuleConfig.imports[i] === "string") {
                importName = config.appModuleConfig.imports[i];
            } else {
                importName = config.appModuleConfig.imports[i].name;
            }

            let importModuleSpecifier = configImports.get(importName);
            if (sampleImports.has(importModuleSpecifier)) {
                sampleImports.get(importModuleSpecifier).push(importName);
            } else {
                sampleImports.set(importModuleSpecifier, [importName]);
            }
        }

        let imports = "";
        let sampleImportsKeys = [...sampleImports.keys()];
        for (let i = 0; i < sampleImportsKeys.length; i++) {
            let currentImportModuleSpecifier: string = sampleImportsKeys[i];
            let baseDirIndex: number = currentImportModuleSpecifier.indexOf(SAMPLE_APP_FOLDER);
            if (baseDirIndex !== -1) {
                currentImportModuleSpecifier = "." +
                    currentImportModuleSpecifier.substring(baseDirIndex + SAMPLE_APP_FOLDER.length - 1);
            }
            let currentImportModules: string[] = sampleImports.get(sampleImportsKeys[i]);
            let currentImport = "\r\nimport { " + this._formatAppModuleTypes(currentImportModules, false, 1, "\r\n") +
                ' } from "' + currentImportModuleSpecifier + '";';
            imports = imports + currentImport;
        }

        return imports;
    }

    private _formatAppModuleTypes(types: string[], multiline: boolean, tabsCount: number,
                                  suffixIfMultiple: string = null): string {
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

        if (types.length > 1 && suffixIfMultiple) {
            formattedTypes = formattedTypes + suffixIfMultiple;
        }

        return formattedTypes;
    }

    private _shortenComponentPath(config: Config, file: LiveEditingFile) {
        if (!config.shortenComponentPathBy) {
            return;
        }

        let shorteningRegex = new RegExp(config.shortenComponentPathBy, "g");
        file.path = file.path.replace(shorteningRegex, "/");
        file.content = file.content.replace(shorteningRegex, "/");
    }

    private _getFileName(filePath: string) {
        return filePath.substring(filePath.lastIndexOf("/") + 1, filePath.length);
    }
}
