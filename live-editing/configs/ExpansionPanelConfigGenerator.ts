/* tslint:disable:object-literal-sort-keys */

import { IgxExpansionPanelModule, IgxIconModule } from "igniteui-angular";
import { ExpansionPanelSample1Component, ExpansionPanelSample2Component,
    // tslint:disable-next-line:max-line-length
    ExpansionPanelSample3Component } from "../../src/app/expansion-panel/expansion-sample-1/expansion-sample-1.component";

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

        configs.push(new Config({
            component: ExpansionPanelSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxExpansionPanelModule, ExpansionPanelSample2Component],
                ngDeclarations: [ExpansionPanelSample2Component],
                ngImports: [IgxIconModule, IgxExpansionPanelModule]
            }),
            shortenComponentPathBy: "/expansion-panel/"
        }));

        configs.push(new Config({
            component: ExpansionPanelSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxAvatarModule, IgxExpansionPanelModule, ExpansionPanelSample2Component],
                ngDeclarations: [ExpansionPanelSample2Component],
                ngImports: [IgxIconModule, IgxAvatarModule, IgxExpansionPanelModule]
            }),
            shortenComponentPathBy: "/expansion-panel/"
        }));

        return configs;
    }
}
