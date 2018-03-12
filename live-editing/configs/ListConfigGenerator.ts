import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { IgxAvatarModule, IgxFilterOptions, IgxFilterModule, IgxIconModule, IgxLabelModule, IgxListModule } from "igniteui-angular/main";
import { ListComponent } from "../../src/app/list/list.component";
import { ListSample1Component } from "../../src/app/list/list-sample-1/list-sample-1.component";
import { ListSample3Component } from "../../src/app/list/list-sample-3/list-sample-3.component";
import { ListSample4Component } from "../../src/app/list/list-sample-4/list-sample-4.component";
import { ListSample5Component } from "../../src/app/list/list-sample-5/list-sample-5.component";
import { ListSample2Component } from "../../src/app/list/list-sample-2/list-sample-2.component";

export class ListConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        // list
        configs.push(new Config({
            component: ListComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxFilterOptions, IgxFilterModule, IgxIconModule,
                    IgxLabelModule, IgxListModule, ListComponent],
                ngDeclarations: [ListComponent],
                ngImports: [IgxAvatarModule, IgxFilterModule, IgxIconModule, IgxLabelModule, IgxListModule]
            })
        }));

        // list sample 1
        configs.push(new Config({
            component: ListSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxListModule, ListSample1Component],
                ngDeclarations: [ListSample1Component],
                ngImports: [IgxListModule]
            }),
            shortenComponentPathBy: "/list/"
        }));

        // list sample 2
        configs.push(new Config({
            component: ListSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxListModule, ListSample2Component],
                ngDeclarations: [ListSample2Component],
                ngImports: [IgxListModule]
            }),
            shortenComponentPathBy: "/list/"
        }));

        // list sample 3
        configs.push(new Config({
            component: ListSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxListModule, ListSample3Component],
                ngDeclarations: [ListSample3Component],
                ngImports: [IgxListModule]
            }),
            shortenComponentPathBy: "/list/"
        }));

        // list sample 4
        configs.push(new Config({
            component: ListSample4Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxFilterModule, IgxIconModule, IgxListModule,
                    ListSample4Component],
                ngDeclarations: [ListSample4Component],
                ngImports: [IgxAvatarModule, IgxFilterModule, IgxIconModule, IgxListModule]
            }),
            shortenComponentPathBy: "/list/"
        }));

        // list sample 5
        configs.push(new Config({
            component: ListSample5Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxListModule, ListSample5Component],
                ngDeclarations: [ListSample5Component],
                ngImports: [IgxListModule]
            }),
            shortenComponentPathBy: "/list/"
        }));

        return configs;
    }
}
