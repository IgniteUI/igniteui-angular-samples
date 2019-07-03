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

    /* for example:
    getConfig(DataChartAxisSettingsComponent,
              [IgxDataChartCoreModule, IgxDataChartCategoryModule, IgxLegendModule, IgxNumberAbbreviatorModule],
              [SharedData], ["/src/app/charts/data-chart/SharedData.ts"]
    )); */
    public getConfig(
        mainComponent: Type<any>, modules: any[], services?: any[], additionalFilesPaths?: string[],
        otherComponents?: Array<Type<any>>) {

        const imports: any[] = [];
        imports.push(mainComponent); // add sample component for importing
        for (const m of modules) {
            imports.push(m); // add modules for importing
        }
        // add optional data sources
        if (services !== undefined &&
            services !== null &&
            services.length > 0) {
            for (const s of services) {
                imports.push(s);
            }
        }

        const declarations = [ mainComponent ];
        if (otherComponents !== undefined &&
            otherComponents.length > 0) {
            for (const comp of otherComponents) {
                declarations.push(comp);
            }
        }

        const fields = {
            additionalFiles: additionalFilesPaths,
            component: mainComponent,
            appModuleConfig: new AppModuleConfig({
                imports: imports,
                ngDeclarations: declarations,
                ngImports: modules,
                ngProviders: services
            }),
            dependenciesType: this.dependenciesType,
            shortenComponentPathBy: this.componentPathBy
        };
        return new Config(fields);
    }
}
