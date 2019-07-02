/* tslint:disable:object-literal-sort-keys */
// tslint:disable:object-literal-shorthand
// tslint:disable:max-line-length
// tslint:disable:member-ordering
// tslint:disable:prefer-const
import { Type } from "@angular/core";
import { Config } from "./Config";
import { IConfigGenerator } from "./IConfigGenerator";
import { AppModuleConfig } from "./AppModuleConfig";
import { DependenciesType } from "../../services/DependenciesType";

export abstract class BaseConfigGenerator implements IConfigGenerator {
    abstract generateConfigs(): Config[];
    dependenciesType: DependenciesType;
    componentPathBy: string;

    constructor(dependenciesType: DependenciesType, componentPathBy: string) {
        this.dependenciesType = dependenciesType;
        this.componentPathBy = componentPathBy;
    }

    public getConfig(component: Type<any>, modules: any[], dataSources?: any[], dataPaths?: string[]) {
        const imports: any[] = [];
        imports.push(component);  // add sample component for importing
        for (const m of modules) {
            imports.push(m); // add modules for importing
        }
        // add optional data sources
        if (dataSources !== undefined &&
            dataSources !== null &&
            dataSources.length > 0) {
            for (const ds of dataSources) {
                imports.push(ds);
            }
        }

        const fields = {
            additionalFiles: dataPaths,
            component: component,
            appModuleConfig: new AppModuleConfig({
                imports: imports,
                ngDeclarations: [component],
                ngImports: modules
            }),
            dependenciesType: this.dependenciesType,
            shortenComponentPathBy: this.componentPathBy
        };
        return new Config(fields);
    }
}
