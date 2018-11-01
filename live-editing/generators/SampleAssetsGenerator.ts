// tslint:disable:prefer-for-of
// tslint:disable:prefer-const
import { AvatarConfigGenerator } from "./../configs/AvatarConfigGenerator";
import { BadgeConfigGenerator } from "./../configs/BadgeConfigGenerator";
import { ButtonConfigGenerator } from "./../configs/ButtonConfigGenerator";
import { ButtonGroupConfigGenerator } from "./../configs/ButtonGroupConfigGenerator";
import { CalendarConfigGenerator } from "./../configs/CalendarConfigGenerator";
import { CardConfigGenerator } from "./../configs/CardConfigGenerator";
import { CarouselConfigGenerator } from "./../configs/CarouselConfigGenerator";
import { CategoryChartConfigGenerator } from "./../configs/CategoryChartConfigGenerator";
import { CheckboxConfigGenerator } from "./../configs/CheckboxConfigGenerator";
import { ChipConfigGenerator } from "./../configs/ChipConfigGenerator";
import { CircularProgressbarConfigGenerator } from "./../configs/CircularProgressbarConfigGenerator";
import { ComboConfigGenerator } from "./../configs/ComboConfigGenerator";
import { DatePickerConfigGenerator } from "./../configs/DatePickerConfigGenerator";
import { DensityConfigGenerator } from "./../configs/DensityConfigGenerator";
import { DialogConfigGenerator } from "./../configs/DialogConfigGenerator";
import { DragAndDropConfigGenerator } from "./../configs/DragAndDropConfigGenerator";
import { DropDownConfigGenerator } from "./../configs/DropDownConfigGenerator";
import { ExcelLibraryConfigGenerator } from "./../configs/ExcelLibraryConfigGenerator";
import { ExpansionPanelConfigGenerator } from "./../configs/ExpansionPanelConfigGenerator";
import { ExportCsvConfigGenerator } from "./../configs/ExportCsvConfigGenerator";
import { ExportExcelConfigGenerator } from "./../configs/ExportExcelConfigGenerator";
import { FinancialChartConfigGenerator } from "./../configs/FinancialChartConfigGenerator";
import { ForConfigGenerator } from "./../configs/ForConfigGenerator";
import { GaugesConfigGenerator } from "./../configs/GaugesConfigGenerator";
import { GridConfigGenerator } from "./../configs/GridConfigGenerator";
import { IconConfigGenerator } from "./../configs/IconConfigGenerator";
import { InputGroupConfigGenerator } from "./../configs/InputGroupConfigGenerator";
import { LayoutConfigGenerator } from "./../configs/LayoutConfigGenerator";
import { LinearProgressbarConfigGenerator } from "./../configs/LinearProgressbarConfigGenerator";
import { ListConfigGenerator } from "./../configs/ListConfigGenerator";
import { MaskConfigGenerator } from "./../configs/MaskConfigGenerator";
import { NavbarConfigGenerator } from "./../configs/NavbarConfigGenerator";
import { NavdrawerConfigGenerator } from "./../configs/NavDrawerConfigGenerator";
import { OverlayConfigGenerator } from "./../configs/OverlayConfigGenerator";
import { RadioConfigGenerator } from "./../configs/RadioConfigGenerator";
import { RippleConfigGenerator } from "./../configs/RippleConfigGenerator";
import { ShadowsConfigGenerator } from "./../configs/ShadowsConfigGenerator";
import { SliderConfigGenerator } from "./../configs/SliderConfigGenerator";
import { SnackbarConfigGenerator } from "./../configs/SnackbarConfigGenerator";
import { SwitchConfigGenerator } from "./../configs/SwitchConfigGenerator";
import { TabBarConfigGenerator } from "./../configs/TabBarConfigGenerator";
import { TabsConfigGenerator } from "./../configs/TabsConfigGenerator";
import { TextHighlightConfigGenerator } from "./../configs/TextHighlightConfigGenerator";
import { TimePickerConfigGenerator } from "./../configs/TimePickerConfigGenerator";
import { ToastConfigGenerator } from "./../configs/ToastConfigGenerator";
import { ToggleConfigGenerator } from "./../configs/ToggleConfigGenerator";
import { TooltipConfigGenerator } from "./../configs/TooltipConfigGenerator";

import * as fs from "fs";
import * as path from "path";
import * as Collections from "typescript-collections";
import { SassCompiler } from "../services/SassCompiler";
import { Config } from "./../configs/core/Config";
import { IConfigGenerator } from "./../configs/core/IConfigGenerator";
import { DependencyResolver } from "./../services/DependencyResolver";
import { TsImportsService } from "./../services/TsImportsService";
import { Generator } from "./Generator";
import { LiveEditingFile } from "./LiveEditingFile";
import { SampleDefinitionFile } from "./SampleDefinitionFile";
import { StyleSyntax } from "./StyleSyntax";

import { ModuleWithProviders } from "@angular/core/src/metadata/ng_module";
import { Type } from "@angular/core/src/type";

import * as Routing from "../../src/app/app-routing.module";

const BASE_PATH = path.join(__dirname, "../../");
const APP_MODULE_TEMPLATE_PATH = path.join(__dirname, "../templates/app.module.ts.template");
const APP_MODULE_PATH = path.join(__dirname, "../../src/app/app.module.ts");

const COMPONENT_STYLE_FILE_EXTENSION = "scss";
const COMPONENT_FILE_EXTENSIONS = ["ts", "html", COMPONENT_STYLE_FILE_EXTENSION];
const GO_DIR_BACK_REG_EX = new RegExp(/\.\.\//g);

const SAMPLE_ASSETS_BASE_DIR: string = "app/";
const CONFIG_GENERATORS = [AvatarConfigGenerator, BadgeConfigGenerator, ButtonConfigGenerator,
    ButtonGroupConfigGenerator, CalendarConfigGenerator, CardConfigGenerator, CarouselConfigGenerator,
    CategoryChartConfigGenerator, CheckboxConfigGenerator, ChipConfigGenerator, CircularProgressbarConfigGenerator,
    ComboConfigGenerator, DatePickerConfigGenerator, DensityConfigGenerator, DialogConfigGenerator,
    DropDownConfigGenerator, ExpansionPanelConfigGenerator, ExportCsvConfigGenerator, ExportExcelConfigGenerator,
    ExcelLibraryConfigGenerator,
    ForConfigGenerator, FinancialChartConfigGenerator, GridConfigGenerator, IconConfigGenerator, OverlayConfigGenerator,
    GaugesConfigGenerator, DragAndDropConfigGenerator,
    InputGroupConfigGenerator, LayoutConfigGenerator, LinearProgressbarConfigGenerator,
    ListConfigGenerator, MaskConfigGenerator, NavbarConfigGenerator, NavdrawerConfigGenerator, RadioConfigGenerator,
    RippleConfigGenerator, SliderConfigGenerator, SnackbarConfigGenerator, SwitchConfigGenerator,
    TabBarConfigGenerator, TabsConfigGenerator, TextHighlightConfigGenerator, ToastConfigGenerator,
    ToggleConfigGenerator, TooltipConfigGenerator, TimePickerConfigGenerator, ShadowsConfigGenerator];

export class SampleAssetsGenerator extends Generator {
    private _tsImportsService: TsImportsService;
    private _sassCompiler: SassCompiler;
    private _componentRoutes: Collections.Dictionary<string, string>;

    constructor(styleSyntax: StyleSyntax = StyleSyntax.Sass) {
        super(styleSyntax);

        this._tsImportsService = new TsImportsService();
        this._sassCompiler = new SassCompiler();

        this._componentRoutes = new Collections.Dictionary<string, string>();
        for (let i = 0; i < Routing.samplesRoutes.length; i++) {
            let sample = Routing.samplesRoutes[i];
            if (sample.component !== undefined) {
                this._componentRoutes.setValue(sample.component.name, sample.path);
            } else {
                // sample with lazy loading, e.g.
                // "app/excel-library/working-with/cells.module#ExcelLibraryWorkingWithCellsModule"
                let child = sample.loadChildren.toString();
                let moduleName = child.split("#")[1];
                let componentName = moduleName.replace("Module", "Component");
                this._componentRoutes.setValue(componentName, sample.path);
            }
        }
    }

    public generateSamplesAssets() {
        let currentFileImports = this._tsImportsService.getFileImports(__filename);
        for (let i = 0; i < CONFIG_GENERATORS.length; i++) {
            let configGeneratorFilePath = path.join(__dirname,
                currentFileImports.getValue(CONFIG_GENERATORS[i].name) + ".ts");
            let configGeneratorImports = this._tsImportsService.getFileImports(configGeneratorFilePath);
            let configs = (new CONFIG_GENERATORS[i]()).generateConfigs();
            for (let j = 0; j < configs.length; j++) {
                this._generateSampleAssets(configs[j], configGeneratorImports);
            }
        }
    }

    private _generateSampleAssets(config: Config, configImports: Collections.Dictionary<string, string>) {
        let sampleFiles = this._getComponentFiles(config, configImports);
        this._processComponentFilesStyles(sampleFiles);
        let componentTsContent;
        for (let i = 0; i < sampleFiles.length; i++) {
            if (sampleFiles[i].path.indexOf(".ts") !== -1) {
                componentTsContent = sampleFiles[i].content;
                break;
            }
        }

        if (config.additionalFiles !== undefined && config.additionalFiles.length > 0) {
            let additionalFiles = this._getAdditionalFiles(config);
            this._processAdditionalFilesStyles(additionalFiles);
            sampleFiles = sampleFiles.concat(additionalFiles);
        }

        let appModuleFile = new LiveEditingFile(
            SAMPLE_ASSETS_BASE_DIR + "app.module.ts", this._getAppModuleConfig(config, configImports));
        this._shortenComponentPath(config, appModuleFile);
        sampleFiles.push(appModuleFile);
        sampleFiles.push(new LiveEditingFile(
            SAMPLE_ASSETS_BASE_DIR + "app.component.html", this._getAppComponentHtml(componentTsContent)));

        let dependencies = DependencyResolver.resolveSampleDependencies(
            config.dependenciesType, config.additionalDependencies);
        let sampleDef = new SampleDefinitionFile(sampleFiles, dependencies);
        fs.writeFileSync(this.getAssetsSamplesDir() + this._componentRoutes.getValue(config.component.name) + ".json",
            JSON.stringify(sampleDef));
    }

    private _getComponentFiles(config: Config,
        configImports: Collections.Dictionary<string, string>): LiveEditingFile[] {
        let componentFiles = new Array<LiveEditingFile>();
        let componentModuleSpecifier = configImports.getValue(config.component.name);
        let componentPath = componentModuleSpecifier.replace(GO_DIR_BACK_REG_EX, "");
        for (let i = 0; i < COMPONENT_FILE_EXTENSIONS.length; i++) {
            let componentFilePath = componentPath + "." + COMPONENT_FILE_EXTENSIONS[i];
            let filePath = componentFilePath.substring(componentFilePath.indexOf(SAMPLE_ASSETS_BASE_DIR));
            let fileContent = fs.readFileSync(path.join(BASE_PATH, componentFilePath), "utf8");
            let file = new LiveEditingFile(filePath, fileContent);
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
            let filePath = config.additionalFiles[i].substring(
                config.additionalFiles[i].indexOf(SAMPLE_ASSETS_BASE_DIR));
            let fileContent = fs.readFileSync(path.join(BASE_PATH, config.additionalFiles[i]), "utf8");
            let file = new LiveEditingFile(filePath, fileContent);
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

    private _getAppModuleConfig(config: Config, configImports: Collections.Dictionary<string, string>) {
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
                        config.appModuleConfig.ngImports[i] as ModuleWithProviders,
                        useClass = "", forRoot = ".forRoot()";
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

    private _getAppModuleImports(config: Config, configImports: Collections.Dictionary<string, string>): string {
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
