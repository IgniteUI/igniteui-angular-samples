// tslint:disable:prefer-const
// tslint:disable:prefer-for-of
// tslint:disable:no-implicit-dependencies
import * as fs from "fs";
import * as path from "path";
import * as Collections from "typescript-collections";
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
    "@angular/http",
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

const EXACT_VERSION_PACKAGES = [
    "igniteui-angular",
    "igniteui-angular-core",
    "igniteui-angular-charts",
    "igniteui-angular-gauges",
    "igniteui-angular-excel"
];

export class DependencyResolver {
    private _defaultDependencies: Collections.Set<string>;
    private _chartsDependencies: Collections.Set<string>;
    private _gaugesDependencies: Collections.Set<string>;
    private _excelDependencies: Collections.Set<string>;
    private _packageFileDependencies;
    private _specificVersionPackages: Collections.Set<string>;

    constructor() {
        this._defaultDependencies = new Collections.Set<string>();
        SHARED_DEPENDENCIES.forEach((d) => this._defaultDependencies.add(d));
        DEFAULT_DEPENDENCIES.forEach((d) => this._defaultDependencies.add(d));

        this._chartsDependencies = new Collections.Set<string>();
        SHARED_DEPENDENCIES.forEach((d) => this._chartsDependencies.add(d));
        CHARTS_DEPENDENCIES.forEach((d) => this._chartsDependencies.add(d));

        this._gaugesDependencies = new Collections.Set<string>();
        SHARED_DEPENDENCIES.forEach((d) => this._gaugesDependencies.add(d));
        GAUGES_DEPENDENCIES.forEach((d) => this._gaugesDependencies.add(d));

        this._excelDependencies = new Collections.Set<string>();
        SHARED_DEPENDENCIES.forEach((d) => this._excelDependencies.add(d));
        EXCEL_DEPENDENCIES.forEach((d) => this._excelDependencies.add(d));

        let packageFile = JSON.parse(fs.readFileSync(PACKAGES_CONFIG_PATH, "utf8"));
        this._packageFileDependencies = packageFile.dependencies;

        this._specificVersionPackages = new Collections.Set<string>();
        EXACT_VERSION_PACKAGES.forEach((d) => this._specificVersionPackages.add(d));
    }

    public resolveSampleDependencies(type: DependenciesType = DependenciesType.Default,
                                     additionalDependencies?: string[]) {
        let packageFileDependencies = JSON.parse(JSON.stringify(this._packageFileDependencies));
        let dependencies = new Collections.Set<string>();

        switch (type) {
            case DependenciesType.Default:
                dependencies.union(this._defaultDependencies);
                break;
            case DependenciesType.Charts:
                dependencies.union(this._chartsDependencies);
                break;
            case DependenciesType.Gauges:
                dependencies.union(this._gaugesDependencies);
                break;
            case DependenciesType.Excel:
                dependencies.union(this._excelDependencies);
            default:
                throw new Error("Unrecognized dependency type.");
        }

        if (additionalDependencies) {
            additionalDependencies.forEach((d) => dependencies.add(d));
        }

        for (let key in packageFileDependencies) {
            if (dependencies.contains(key)) {
                if (this._specificVersionPackages.contains(key)) {
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
