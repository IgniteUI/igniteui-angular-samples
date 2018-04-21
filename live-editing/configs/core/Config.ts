import { Type } from "@angular/core/src/type";
import { AppModuleConfig } from "./AppModuleConfig";

export class Config {
    public component: Type<any>;
    public additionalFiles: string[];
    public appModuleConfig: AppModuleConfig;
    public shortenComponentPathBy: string;
    public additionalDependencies: string[];

    constructor(fields: {
        component: Type<any>, additionalFiles?: string[],
        appModuleConfig: AppModuleConfig, shortenComponentPathBy?: string,
        packageDependencies?: string[]
    }) {
        this.component = fields.component;
        this.additionalFiles = fields.additionalFiles;
        this.appModuleConfig = fields.appModuleConfig;
        this.shortenComponentPathBy = fields.shortenComponentPathBy;
        this.additionalDependencies = fields.packageDependencies;
    }
}
