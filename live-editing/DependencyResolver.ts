import * as fs from "fs";
import * as path from "path";
import * as Collections from "typescript-collections";

const PACKAGES_CONFIG_PATH = path.join(__dirname, "../package.json");

const COMMON_PACKAGE_DEPENDENCIES = [
    "@angular/common",
    "@angular/compiler",
    "@angular/core",
    "@angular/platform-browser",
    "@angular/platform-browser-dynamic",
    "rxjs",
    "zone.js",
    
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
    "igniteui-angular",
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
