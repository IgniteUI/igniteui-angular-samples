/* tslint:disable:object-literal-sort-keys */

import { IgxIconModule, IgxExpansionPanelModule } from "igniteui-angular";
import { ExpansionPanelSample1Component } from "../../src/app/expansion-panel/expansion-sample-1/expansion-sample-1.component";

import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class DropDownConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: ExpansionPanelSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxExpansionPanelModule, ExpansionPanelSample1Component],
                ngDeclarations: [ExpansionPanelSample1Component],
                ngImports: [IgxIconModule, IgxExpansionPanelModule]
            }),
            shortenComponentPathBy: "/expansion-panel/"
        }));

        return configs;
    }
}
