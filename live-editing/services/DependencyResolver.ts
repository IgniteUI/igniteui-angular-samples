// tslint:disable:prefer-const
// tslint:disable:prefer-for-of
// tslint:disable:no-implicit-dependencies
import * as fs from "fs";
import * as path from "path";
import { DependenciesType } from "./DependenciesType";

const PACKAGES_CONFIG_PATH = path.join(__dirname, "../../package.json");

const SHARED_DEPENDENCIES = [
    "@angular/common",
    "@angular/compiler",
    "@angular/core",
    "@angular/forms", // included in app.module.ts.template
    "@angular/platform-browser",
    "@angular/platform-browser-dynamic",
    "rxjs",
    "zone.js",

    "igniteui-angular", // needed for all samples because of styles.scss
    "jszip", // dependency for igniteui-angular

    // For polyfills
    "classlist.js",
    "core-js",
    "hammerjs",
    "@types/hammerjs",
    "intl",
    "web-animations-js"
];

const DEFAULT_DEPENDENCIES = [
    "@angular/animations",
    "@angular/forms",
    "@angular/router",
    "classlist.js",
    "hammerjs",
    "web-animations-js",
    "jszip",
    "immediate",
    "intl",
    "tslib"
];

const CHARTS_DEPENDENCIES = [
    "@angular/animations",
    "igniteui-angular-core",
    "igniteui-angular-charts",
    "tslib"
];

const MAPS_DEPENDENCIES = [
    "@angular/animations",
    "igniteui-angular-core",
    "igniteui-angular-charts",
    "igniteui-angular-maps",
    "tslib"
];

const GAUGES_DEPENDENCIES = [
    "@angular/animations",
    "igniteui-angular-core",
    "igniteui-angular-gauges",
    "tslib"
];

const EXCEL_DEPENDENCIES = [
    "@angular/animations",
    "igniteui-angular-core",
    "igniteui-angular-excel",
    "tslib"
];

const SPREAD_DEPENDENCIES = [
    "@angular/animations",
    "igniteui-angular-core",
    "igniteui-angular-excel",
    "igniteui-angular-spreadsheet",
    "igniteui-angular-spreadsheet-chart-adapter",
    "tslib"
];

const EXACT_VERSION_PACKAGES = [
    "igniteui-angular",
    "igniteui-angular-core",
    "igniteui-angular-charts",
    "igniteui-angular-gauges",
    "igniteui-angular-excel",
    "igniteui-angular-maps",
    "igniteui-angular-spreadsheet",
    "igniteui-angular-spreadsheet-chart-adapter"
];

export class DependencyResolver {
    private _defaultDependencies: Set<string>;
    private _chartsDependencies: Set<string>;
    private _mapsDependencies: Set<string>;
    private _gaugesDependencies: Set<string>;
    private _excelDependencies: Set<string>;
    private _spreadsheetDependencies: Set<string>;
    private _packageFileDependencies;
    private _specificVersionPackages: Set<string>;

    constructor() {
        this._defaultDependencies = new Set<string>();
        SHARED_DEPENDENCIES.forEach((d) => this._defaultDependencies.add(d));
        DEFAULT_DEPENDENCIES.forEach((d) => this._defaultDependencies.add(d));

        this._chartsDependencies = new Set<string>();
        SHARED_DEPENDENCIES.forEach((d) => this._chartsDependencies.add(d));
        CHARTS_DEPENDENCIES.forEach((d) => this._chartsDependencies.add(d));

        this._mapsDependencies = new Set<string>();
        SHARED_DEPENDENCIES.forEach((d) => this._mapsDependencies.add(d));
        MAPS_DEPENDENCIES.forEach((d) => this._mapsDependencies.add(d));

        this._gaugesDependencies = new Set<string>();
        SHARED_DEPENDENCIES.forEach((d) => this._gaugesDependencies.add(d));
        GAUGES_DEPENDENCIES.forEach((d) => this._gaugesDependencies.add(d));

        this._excelDependencies = new Set<string>();
        SHARED_DEPENDENCIES.forEach((d) => this._excelDependencies.add(d));
        EXCEL_DEPENDENCIES.forEach((d) => this._excelDependencies.add(d));

        this._spreadsheetDependencies = new Set<string>();
        SHARED_DEPENDENCIES.forEach((d) => this._spreadsheetDependencies.add(d));
        SPREAD_DEPENDENCIES.forEach((d) => this._spreadsheetDependencies.add(d));

        let packageFile = JSON.parse(fs.readFileSync(PACKAGES_CONFIG_PATH, "utf8"));
        this._packageFileDependencies = packageFile.dependencies;

        this._specificVersionPackages = new Set<string>();
        EXACT_VERSION_PACKAGES.forEach((d) => this._specificVersionPackages.add(d));
    }

    public resolveSampleDependencies(type: DependenciesType = DependenciesType.Default,
                                     additionalDependencies?: string[]) {
        let packageFileDependencies = JSON.parse(JSON.stringify(this._packageFileDependencies));
        let dependencies: Set<string>;

        switch (type) {
            case DependenciesType.Default:
                dependencies = new Set<string>(this._defaultDependencies);
                break;
            case DependenciesType.Charts:
                dependencies = new Set<string>(this._chartsDependencies);
                break;
            case DependenciesType.Gauges:
                dependencies = new Set<string>(this._gaugesDependencies);
                break;
            case DependenciesType.Excel:
                dependencies = new Set<string>(this._excelDependencies);
                break;
            case DependenciesType.Spreadsheet:
                dependencies = new Set<string>(this._spreadsheetDependencies);
                break;
            case DependenciesType.Maps:
                dependencies = new Set<string>(this._mapsDependencies);
                break;
            default:
                throw new Error("Unrecognized dependency type.");
        }

        if (additionalDependencies) {
            additionalDependencies.forEach((d) => dependencies.add(d));
        }

        for (let key in packageFileDependencies) {
            if (dependencies.has(key)) {
                if (this._specificVersionPackages.has(key)) {
                    let version = packageFileDependencies[key];
                    packageFileDependencies[key] = version.replace("~", "").replace("^", "");
                }
            } else {
                delete packageFileDependencies[key];
            }
        }

        return packageFileDependencies;

    }
}
