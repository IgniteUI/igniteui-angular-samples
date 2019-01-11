/* tslint:disable:object-literal-sort-keys */
import {
    IgxAvatarModule, IgxButtonModule, IgxFilterModule, IgxFilterOptions,
    IgxIconModule, IgxInputGroupModule, IgxListModule, IgxSliderModule, IgxToastModule
} from "igniteui-angular";
import { ListChatSampleComponent } from "../../src/app/lists/list/list-chat-sample/list-chat-sample.component";
import { ListSample1Component } from "../../src/app/lists/list/list-sample-1/list-sample-1.component";
import { ListSample2Component } from "../../src/app/lists/list/list-sample-2/list-sample-2.component";
import { ListSample3Component } from "../../src/app/lists/list/list-sample-3/list-sample-3.component";
import { ListSample4Component } from "../../src/app/lists/list/list-sample-4/list-sample-4.component";
import { ListSample5Component } from "../../src/app/lists/list/list-sample-5/list-sample-5.component";
import { ListSample6Component } from "../../src/app/lists/list/list-sample-6/list-sample-6.component";
import { ListSample7Component } from "../../src/app/lists/list/list-sample-7/list-sample-7.component";
import { ListComponent } from "../../src/app/lists/list/list.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class ListConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // list
        configs.push(new Config({
            component: ListComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxFilterOptions, IgxFilterModule, IgxIconModule,
                    IgxInputGroupModule, IgxListModule, ListComponent],
                ngDeclarations: [ListComponent],
                ngImports: [IgxAvatarModule, IgxFilterModule, IgxIconModule, IgxInputGroupModule, IgxListModule]
            }),
            shortenComponentPathBy: "/lists/"
        }));

        // list sample 1
        configs.push(new Config({
            component: ListSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxListModule, ListSample1Component],
                ngDeclarations: [ListSample1Component],
                ngImports: [IgxListModule]
            }),
            shortenComponentPathBy: "/lists/list/"
        }));

        // list sample 2
        configs.push(new Config({
            component: ListSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxListModule, ListSample2Component],
                ngDeclarations: [ListSample2Component],
                ngImports: [IgxListModule]
            }),
            shortenComponentPathBy: "/lists/list/"
        }));

        // list sample 3
        configs.push(new Config({
            component: ListSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxListModule, ListSample3Component],
                ngDeclarations: [ListSample3Component],
                ngImports: [IgxListModule]
            }),
            shortenComponentPathBy: "/lists/list/"
        }));

        // list sample 4
        configs.push(new Config({
            component: ListSample4Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxFilterModule, IgxIconModule, IgxListModule,
                    IgxInputGroupModule, ListSample4Component],
                ngDeclarations: [ListSample4Component],
                ngImports: [IgxAvatarModule, IgxFilterModule, IgxIconModule, IgxListModule,
                    IgxInputGroupModule]
            }),
            shortenComponentPathBy: "/lists/list/"
        }));

        // list sample 5
        configs.push(new Config({
            component: ListSample5Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxListModule, ListSample5Component],
                ngDeclarations: [ListSample5Component],
                ngImports: [IgxListModule]
            }),
            shortenComponentPathBy: "/lists/list/"
        }));

        // list sample 6
        configs.push(new Config({
            component: ListSample6Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxListModule, ListSample6Component],
                ngDeclarations: [ListSample6Component],
                ngImports: [IgxButtonModule, IgxListModule]
            }),
            shortenComponentPathBy: "/lists/list/"
        }));

        // list sample 7
        configs.push(new Config({
            component: ListSample7Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxIconModule, IgxListModule,
                    ListSample7Component, IgxSliderModule, IgxToastModule],
                ngDeclarations: [ListSample7Component],
                ngImports: [IgxAvatarModule, IgxIconModule, IgxListModule,
                    IgxSliderModule, IgxToastModule]
            }),
            shortenComponentPathBy: "/lists/list/"
        }));

        // list chat sample
        configs.push(new Config({
            component: ListChatSampleComponent,
            additionalFiles: ["/src/app/lists/list/list-chat-sample/services/contacts.service.ts",
                "/src/app/lists/list/list-chat-sample/services/messages.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxIconModule, IgxListModule, IgxInputGroupModule, ListChatSampleComponent],
                ngDeclarations: [ListChatSampleComponent],
                ngImports: [IgxAvatarModule, IgxIconModule, IgxListModule, IgxInputGroupModule]
            }),
            shortenComponentPathBy: "/lists/list/"
        }));

        return configs;
    }
}
