
/* tslint:disable:object-literal-sort-keys */
// tslint:disable-next-line:max-line-length
import { IgxAvatarModule, IgxExpansionPanelModule, IgxGridModule, IgxIconModule, IgxToastModule } from "igniteui-angular";
// tslint:disable-next-line:max-line-length
import { ExpansionPanelSample1Component} from "../../src/app/expansion-panel/expansion-sample-1/expansion-sample-1.component";
// tslint:disable-next-line:max-line-length
import { ExpansionPanelSample2Component} from "../../src/app/expansion-panel/expansion-sample-2/expansion-sample-2.component";
// tslint:disable-next-line:max-line-length
import { ExpansionPanelSample3Component} from "../../src/app/expansion-panel/expansion-sample-3/expansion-sample-3.component";
// tslint:disable-next-line:max-line-length
import { ExpansionPanelSample4Component} from "../../src/app/expansion-panel/expansion-sample-4/expansion-sample-4.component";

import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class ExpansionPanelConfigGenerator implements IConfigGenerator {
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
                imports: [IgxIconModule, IgxExpansionPanelModule, IgxToastModule, ExpansionPanelSample2Component],
                ngDeclarations: [ExpansionPanelSample2Component],
                ngImports: [IgxIconModule, IgxExpansionPanelModule, IgxToastModule]
            }),
            shortenComponentPathBy: "/expansion-panel/"
        }));

        configs.push(new Config({
            component: ExpansionPanelSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxAvatarModule, IgxToastModule,
                    IgxExpansionPanelModule, ExpansionPanelSample3Component],
                ngDeclarations: [ExpansionPanelSample3Component],
                ngImports: [IgxIconModule, IgxAvatarModule, IgxToastModule, IgxExpansionPanelModule]
            }),
            shortenComponentPathBy: "/expansion-panel/"
        }));

        configs.push(new Config({
            component: ExpansionPanelSample4Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxAvatarModule, IgxExpansionPanelModule,
                    ExpansionPanelSample4Component, IgxGridModule],
                ngDeclarations: [ExpansionPanelSample4Component],
                ngImports: [IgxIconModule, IgxAvatarModule, IgxExpansionPanelModule, IgxGridModule]
            }),
            shortenComponentPathBy: "/expansion-panel/"
        }));

        return configs;
    }
}
