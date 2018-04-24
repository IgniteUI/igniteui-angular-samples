// tslint:disable:prefer-for-of
// tslint:disable:prefer-const
import { AvatarConfigGenerator } from "./configs/AvatarConfigGenerator";
import { BadgeConfigGenerator } from "./configs/BadgeConfigGenerator";
import { ButtonConfigGenerator } from "./configs/ButtonConfigGenerator";
import { ButtonGroupConfigGenerator } from "./configs/ButtonGroupConfigGenerator";
import { CalendarConfigGenerator } from "./configs/CalendarConfigGenerator";
import { CardConfigGenerator } from "./configs/CardConfigGenerator";
import { CarouselConfigGenerator } from "./configs/CarouselConfigGenerator";
import { CategoryChartConfigGenerator } from "./configs/CategoryChartConfigGenerator";
import { CheckboxConfigGenerator } from "./configs/CheckboxConfigGenerator";
import { CircularProgressbarConfigGenerator } from "./configs/CircularProgressbarConfigGenerator";
import { DatePickerConfigGenerator } from "./configs/DatePickerConfigGenerator";
import { DialogConfigGenerator } from "./configs/DialogConfigGenerator";
import { ExportCsvConfigGenerator } from "./configs/ExportCsvConfigGenerator";
import { ExportExcelConfigGenerator } from "./configs/ExportExcelConfigGenerator";
import { ForConfigGenerator } from "./configs/ForConfigGenerator";
import { FinancialChartConfigGenerator } from "./configs/FinancialChartConfigGenerator";
import { ForConfigGenerator } from "./configs/ForConfigGenerator";
import { GridConfigGenerator } from "./configs/GridConfigGenerator";
import { IconConfigGenerator } from "./configs/IconConfigGenerator";
import { InputGroupConfigGenerator } from "./configs/InputGroupConfigGenerator";
import { LayoutConfigGenerator } from "./configs/LayoutConfigGenerator";
import { LinearProgressbarConfigGenerator } from "./configs/LinearProgressbarConfigGenerator";
import { ListConfigGenerator } from "./configs/ListConfigGenerator";
import { MaskConfigGenerator } from "./configs/MaskConfigGenerator";
import { NavbarConfigGenerator } from "./configs/NavbarConfigGenerator";
import { NavdrawerConfigGenerator } from "./configs/NavDrawerConfigGenerator";
import { RadioConfigGenerator } from "./configs/RadioConfigGenerator";
import { RippleConfigGenerator } from "./configs/RippleConfigGenerator";
import { SliderConfigGenerator } from "./configs/SliderConfigGenerator";
import { SnackbarConfigGenerator } from "./configs/SnackbarConfigGenerator";
import { SwitchConfigGenerator } from "./configs/SwitchConfigGenerator";
import { TabBarConfigGenerator } from "./configs/TabBarConfigGenerator";
import { TabsConfigGenerator } from "./configs/TabsConfigGenerator";
import { TimePickerConfigGenerator } from "./configs/TimePickerConfigGenerator";
import { ToastConfigGenerator } from "./configs/ToastConfigGenerator";
import { ToggleConfigGenerator } from "./configs/ToggleConfigGenerator";

import * as fs from "fs";
import * as path from "path";
import * as Collections from "typescript-collections";
import { Config } from "./configs/core/Config";
import { IConfigGenerator } from "./configs/core/IConfigGenerator";
import { DependencyResolver } from "./DependencyResolver";
import { LiveEditingFile } from "./LiveEditingFile";
import { SampleDefinitionFile } from "./SampleDefinitionFile";
import { TsImportsService } from "./TsImportsService";

import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";
import { Type } from "@angular/core/src/type";

import * as Routing from "../src/app/app-routing.module";

const BASE_PATH = path.join(__dirname, "../");
const ASSETS_SAMPLES_DIR = path.join(__dirname, "../src/assets/samples/");
const APP_MODULE_TEMPLATE_PATH = path.join(__dirname, "/templates/app.module.ts.template");
const APP_MODULE_PATH = path.join(__dirname, "../src/app/app.module.ts");

const COMPONENT_FILE_EXTENSIONS = ["ts", "html", "scss"];
const GO_DIR_BACK_REG_EX = new RegExp(/\.\.\//g);

const SAMPLE_ASSETS_BASE_DIR: string = "app/";
const CONFIG_GENERATORS = [AvatarConfigGenerator, BadgeConfigGenerator, ButtonConfigGenerator,
    ButtonGroupConfigGenerator, CalendarConfigGenerator, CardConfigGenerator, CarouselConfigGenerator,
    CategoryChartConfigGenerator, CheckboxConfigGenerator, CircularProgressbarConfigGenerator, DatePickerConfigGenerator,
    DialogConfigGenerator, ExportCsvConfigGenerator, ExportExcelConfigGenerator, ForConfigGenerator, FinancialChartConfigGenerator,
    GridConfigGenerator, IconConfigGenerator,
    InputGroupConfigGenerator, LayoutConfigGenerator, LinearProgressbarConfigGenerator,
    ListConfigGenerator, MaskConfigGenerator, NavbarConfigGenerator, NavdrawerConfigGenerator, RadioConfigGenerator,
    RippleConfigGenerator, SliderConfigGenerator, SnackbarConfigGenerator, SwitchConfigGenerator,
    TabBarConfigGenerator, TabsConfigGenerator, ToastConfigGenerator, ToggleConfigGenerator, TimePickerConfigGenerator];

export class SampleAssetsGenerator {
    private tsImportsService: TsImportsService;
    private componentRoutes: Collections.Dictionary<string, string>;

    constructor() {
        if (!fs.existsSync(ASSETS_SAMPLES_DIR)) {
            fs.mkdirSync(ASSETS_SAMPLES_DIR);
        }

        this.tsImportsService = new TsImportsService();

        this.componentRoutes = new Collections.Dictionary<string, string>();
        for (let i = 0; i < Routing.appRoutes.length; i++) {
            this.componentRoutes.setValue(Routing.appRoutes[i].component.name,
                Routing.appRoutes[i].path);
        }
    }

    public generateSamplesAssets() {
        let currentFileImports = this.tsImportsService.getFileImports(__filename);
        for (let i = 0; i < CONFIG_GENERATORS.length; i++) {
            let configGeneratorFilePath = path.join(__dirname,
                currentFileImports.getValue(CONFIG_GENERATORS[i].name) + ".ts");
            let configGeneratorImports = this.tsImportsService.getFileImports(configGeneratorFilePath);
            let configs = (new CONFIG_GENERATORS[i]()).generateConfigs();
            for (let j = 0; j < configs.length; j++) {
                this.generateSampleAssets(configs[j], configGeneratorImports);
            }
        }
    }

    private generateSampleAssets(config: Config, configImports: Collections.Dictionary<string, string>) {
        let componentModuleSpecifier = configImports.getValue(config.component.name);
        let componentPath = componentModuleSpecifier.replace(GO_DIR_BACK_REG_EX, "");
        let componentFilesPaths = new Array<string>();
        for (let i = 0; i < COMPONENT_FILE_EXTENSIONS.length; i++) {
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
            if (componentFilesPaths[i].indexOf(".ts") !== -1) {
                componentTsContent = fileContent;
            }
        }

        if (config.additionalFiles !== undefined && config.additionalFiles.length > 0) {
            for (let i = 0; i < config.additionalFiles.length; i++) {
                let filePath = config.additionalFiles[i].substring(
                    config.additionalFiles[i].indexOf(SAMPLE_ASSETS_BASE_DIR));
                let fileContent = fs.readFileSync(path.join(BASE_PATH, config.additionalFiles[i]), "utf8");
                let file = new LiveEditingFile(filePath, fileContent);
                this.shortenComponentPath(config, file);
                sampleFiles.push(file);
            }
        }

        let appModuleFile = new LiveEditingFile(
            SAMPLE_ASSETS_BASE_DIR + "app.module.ts", this.getAppModuleConfig(config, configImports));
        this.shortenComponentPath(config, appModuleFile);
        sampleFiles.push(appModuleFile);
        sampleFiles.push(new LiveEditingFile(
            SAMPLE_ASSETS_BASE_DIR + "app.component.html", this.getAppComponentHtml(componentTsContent)));

        let dependencies = DependencyResolver.resolveSampleDependencies(config.additionalDependencies);
        let sampleDef = new SampleDefinitionFile(sampleFiles, dependencies);
        fs.writeFileSync(ASSETS_SAMPLES_DIR + this.componentRoutes.getValue(config.component.name) + ".json",
            JSON.stringify(sampleDef));
    }

    private getAppComponentHtml(componentTsContent) {
        let componentSelectorRegex = /selector:[\s]*["']([a-zA-Z0-9-]+)["']/g;
        let componentSeletcor = componentSelectorRegex.exec(componentTsContent)[1];
        let appComponentHtml = "<" + componentSeletcor + "></" + componentSeletcor + ">";
        return appComponentHtml;
    }

    private getAppModuleConfig(config: Config, configImports: Collections.Dictionary<string, string>) {
        let appModuleTemplate = fs.readFileSync(APP_MODULE_TEMPLATE_PATH, "utf8");

        let imports = this.getAppModuleImports(config, configImports);

        let appModuleNgDeclarations: string[] = config.appModuleConfig.ngDeclarations.map((d) => d.name);
        let ngDeclarations = "," + this.formatAppModuleTypes(appModuleNgDeclarations, true, 2);

        let appModuleNgImports: string[] = this.getAppModuleNgImports(config);

        let ngImports = "," + this.formatAppModuleTypes(appModuleNgImports, true, 2);

        let ngProviders = "";
        if (config.appModuleConfig.ngProviders !== undefined &&
            config.appModuleConfig.ngProviders.length > 0) {
            let appModuleNgProviders: string[] = config.appModuleConfig.ngProviders
                .map((p) => p as Type<any>).map((p) => p.name);
            ngProviders = this.formatAppModuleTypes(appModuleNgProviders, false, 2, "\r\n\t");
        }

        appModuleTemplate = appModuleTemplate
            .replace("{imports}", imports)
            .replace("{ngDeclarations}", ngDeclarations)
            .replace("{ngImports}", ngImports)
            .replace("{ngProviders}", ngProviders);

        return appModuleTemplate;
    }

    private getAppModuleNgImports(config: Config) {
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
                        config.appModuleConfig.ngImports[i] as ModuleWithProviders,
                        useClass = "", forRoot = ".forRoot()";
                    if (appModuleNgImportWithProviders.providers.length > 0
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

    private getAppModuleImports(config: Config, configImports: Collections.Dictionary<string, string>): string {
        let sampleImports = new Collections.Dictionary<string, string[]>();

        for (let i = 0; i < config.appModuleConfig.imports.length; i++) {
            let importName;
            if (typeof config.appModuleConfig.imports[i] === "string") {
                importName = config.appModuleConfig.imports[i];
            } else {
                importName = config.appModuleConfig.imports[i].name;
            }

            let importModuleSpecifier = configImports.getValue(importName);
            if (sampleImports.containsKey(importModuleSpecifier)) {
                sampleImports.getValue(importModuleSpecifier).push(importName);
            } else {
                sampleImports.setValue(importModuleSpecifier, [importName]);
            }
        }

        let imports = "";
        let sampleImportsKeys = sampleImports.keys();
        for (let i = 0; i < sampleImportsKeys.length; i++) {
            let currentImportModuleSpecifier: string = sampleImportsKeys[i];
            let baseDirIndex: number = currentImportModuleSpecifier.indexOf(SAMPLE_ASSETS_BASE_DIR);
            if (baseDirIndex !== -1) {
                currentImportModuleSpecifier = "." +
                    currentImportModuleSpecifier.substring(baseDirIndex + SAMPLE_ASSETS_BASE_DIR.length - 1);
            }
            let currentImportModules: string[] = sampleImports.getValue(sampleImportsKeys[i]);
            let currentImport = "\r\nimport { " + this.formatAppModuleTypes(currentImportModules, false, 1, "\r\n") +
                ' } from "' + currentImportModuleSpecifier + '";';
            imports = imports + currentImport;
        }

        return imports;
    }

    private formatAppModuleTypes(types: string[], multiline: boolean, tabsCount: number,
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
