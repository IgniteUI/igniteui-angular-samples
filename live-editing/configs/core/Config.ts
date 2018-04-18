import { AppModuleConfig } from "./AppModuleConfig";
import { Type } from '@angular/core/src/type';

export class Config {
    public component: Type<any>;
    public additionalFiles: Array<string>;
    public appModuleConfig: AppModuleConfig;
    public shortenComponentPathBy: string;
    public additionalDependencies: Array<string>;

    constructor(fields: {
        component: Type<any>, additionalFiles?: Array<string>,
        appModuleConfig: AppModuleConfig, shortenComponentPathBy?: string, packageDependencies: Array<string>
    }) {
        this.component = fields.component;
        this.additionalFiles = fields.additionalFiles;
        this.appModuleConfig = fields.appModuleConfig;
        this.shortenComponentPathBy = fields.shortenComponentPathBy;
        this.additionalDependencies = fields.packageDependencies;
    }
}
