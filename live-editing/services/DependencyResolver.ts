// tslint:disable:prefer-const
// tslint:disable:prefer-for-of
import * as fs from "fs";
import * as path from "path";
import * as Collections from "typescript-collections";
import { DependenciesType } from "./DependenciesType";

const PACKAGES_CONFIG_PATH = path.join(__dirname, "../../package.json");

const COMMON_PACKAGE_DEPENDENCIES = [
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
    "intl",
    "tslib"
];

const CHARTS_DEPENDENCIES = [
    "@angular/animations",
    "igniteui-angular-charts",
    "tslib"
];

export class DependencyResolver {
    public static resolveSampleDependencies(type: DependenciesType = DependenciesType.Default,
                                            additionalDependencies?: string[]) {
        let packageFile = JSON.parse(fs.readFileSync(PACKAGES_CONFIG_PATH, "utf8"));
        let packageFileDependencies = packageFile.dependencies;
        let dependenciesNeeded = new Collections.Set<string>();

        // Add shared dependencies.
        for (let i = 0; i < COMMON_PACKAGE_DEPENDENCIES.length; i++) {
            dependenciesNeeded.add(COMMON_PACKAGE_DEPENDENCIES[i]);
        }

        // Add sample dependencies.
        switch (type) {
            case DependenciesType.Default:
                for (let i = 0; i < DEFAULT_DEPENDENCIES.length; i++) {
                    dependenciesNeeded.add(DEFAULT_DEPENDENCIES[i]);
                }

                break;
            case DependenciesType.Charts:
                for (let i = 0; i < CHARTS_DEPENDENCIES.length; i++) {
                    dependenciesNeeded.add(CHARTS_DEPENDENCIES[i]);
                }

                break;
            default:
                throw new Error("Unrecognized dependency type.");
        }

        // Add extra dependencies
        if (additionalDependencies) {
            for (let i = 0; i < additionalDependencies.length; i++) {
                dependenciesNeeded.add(additionalDependencies[i]);
            }
        }

        for (let key in packageFileDependencies) {
            if (!dependenciesNeeded.contains(key)) {
                delete packageFileDependencies[key];
            }
        }

        return packageFileDependencies;
    }
}
