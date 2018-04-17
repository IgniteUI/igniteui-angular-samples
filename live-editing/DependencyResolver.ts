import * as fs from "fs";
import * as path from "path";
import * as Collections from "typescript-collections";

const PACKAGES_CONFIG_PATH = path.join(__dirname, "../package.json");

const COMMON_PACKAGE_DEPENDENCIES = [
    //"@angular/animations",
    "@angular/common",
    "@angular/compiler",
    "@angular/core",
    //"@angular/http",
    "@angular/platform-browser",
    "@angular/platform-browser-dynamic",
    //"@angular/router",
    // "@types/hammerjs",
    // "classlist.js",
    "core-js",
    // "hammerjs",
    "rxjs",
    // "web-animations-js",
    "zone.js",
    // "intl"
];

const DEFAULT_DEPENDENCIES = [
    "@angular/animations",
    "@angular/forms",
    "@angular/http",
    "@angular/router",
    "@types/hammerjs",
    "classlist.js",
    "igniteui-angular",
    "igniteui-angular-charts",
    "hammerjs",
    "web-animations-js",
    "jszip",
    "intl",
    "tslib"
];

export class DependencyResolver {

    public static resolveSampleDependencies(configDependencies: Array<string>) {
        configDependencies = configDependencies || DEFAULT_DEPENDENCIES;
 
        let packageFile = JSON.parse(fs.readFileSync(PACKAGES_CONFIG_PATH, "utf8"));
        let packageFileDependencies = packageFile.dependencies;
        let dependenciesNeeded = new Collections.Set<string>();

        // Add shared dependencies.
        for (let i = 0; i < COMMON_PACKAGE_DEPENDENCIES.length; i++) {
            dependenciesNeeded.add(COMMON_PACKAGE_DEPENDENCIES[i]);
        }

        // Add sample dependencies.
        for (let i = 0; i < configDependencies.length; i++) {
            dependenciesNeeded.add(configDependencies[i]);
        }

        for (let key in packageFileDependencies) {
            if (!dependenciesNeeded.contains(key)) {
                delete packageFileDependencies[key];
            }
        }
        
        return packageFileDependencies;
    }
}
