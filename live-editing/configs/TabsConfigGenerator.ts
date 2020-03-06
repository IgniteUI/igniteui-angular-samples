/* tslint:disable:object-literal-sort-keys */
import { RouterModule } from "@angular/router";
import {
    IgxAvatarModule,
    IgxButtonModule,
    IgxCardModule,
    IgxIconModule,
    IgxNavbarModule,
    IgxRippleModule,
    IgxTabsModule
} from "igniteui-angular";

import { TabsSample1Component } from "../../src/app/layouts/tabs/tabs-sample-1/tabs-sample-1.component";
import { TabsSample2Component } from "../../src/app/layouts/tabs/tabs-sample-2/tabs-sample-2.component";
import { TabsSample3Component } from "../../src/app/layouts/tabs/tabs-sample-3/tabs-sample-3.component";
import { TabsSample4Component } from "../../src/app/layouts/tabs/tabs-sample-4/components/tabs-sample-4.component";
import { TabsSample4Module } from "../../src/app/layouts/tabs/tabs-sample-4/tabs-sample-4.module";
import { View1Component } from "../../src/app/layouts/tabs/views/view1/view1.component";
import { View2Component } from "../../src/app/layouts/tabs/views/view2/view2.component";
import { View3Component } from "../../src/app/layouts/tabs/views/view3/view3.component";

import { TabsStyleComponent } from "../../src/app/layouts/tabs/tabs-style/tabs-style.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class TabsConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: TabsSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTabsModule, TabsSample1Component],
                ngDeclarations: [TabsSample1Component],
                ngImports: [IgxTabsModule]
            }),
            shortenComponentPathBy: "/layouts/tabs/"
        }));

        configs.push(new Config({
            component: TabsSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxTabsModule,
                    IgxNavbarModule,
                    IgxIconModule,
                    TabsSample2Component
                ],
                ngDeclarations: [TabsSample2Component],
                ngImports: [
                    IgxTabsModule,
                    IgxNavbarModule,
                    IgxIconModule
                ]
            }),
            shortenComponentPathBy: "/layouts/tabs/"
        }));

        configs.push(new Config({
            component: TabsSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTabsModule, TabsSample3Component],
                ngDeclarations: [TabsSample3Component],
                ngImports: [IgxTabsModule]
            }),
            shortenComponentPathBy: "/layouts/tabs/"
        }));

        configs.push(new Config({
            component: TabsSample4Component,
            additionalFiles: [
                "/src/app/layouts/tabs/tabs-sample-4/tabs.routing.module.ts",
                "/src/app/layouts/tabs/tabs-sample-4/tabs-sample-4.module.ts",
                "/src/app/layouts/tabs/views/views.module.ts",
                "/src/app/layouts/tabs/views/view1/view1.component.ts",
                "/src/app/layouts/tabs/views/view1/view1.component.html",
                "/src/app/layouts/tabs/views/view2/view2.component.ts",
                "/src/app/layouts/tabs/views/view2/view2.component.html",
                "/src/app/layouts/tabs/views/view3/view3.component.ts",
                "/src/app/layouts/tabs/views/view3/view3.component.html"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: [
                    RouterModule,
                    IgxTabsModule,
                    TabsSample4Module,
                    TabsSample4Component,
                    View1Component,
                    View2Component,
                    View3Component
                ],
                ngDeclarations: [TabsSample4Component],
                ngImports: [
                    IgxTabsModule,
                    TabsSample4Module,
                    `
                    RouterModule.forRoot([
                        { path: "view1", component: View1Component },
                        { path: "view2", component: View2Component },
                        { path: "view3", component: View3Component }
                    ])
                    `
                ]
            }),
            shortenComponentPathBy: "/layouts/tabs/"
        }));

        configs.push(new Config({
            component: TabsStyleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxTabsModule,
                    IgxCardModule,
                    IgxAvatarModule,
                    IgxButtonModule,
                    IgxRippleModule,
                    TabsStyleComponent
                ],
                ngDeclarations: [TabsStyleComponent],
                ngImports: [
                    IgxTabsModule,
                    IgxCardModule,
                    IgxAvatarModule,
                    IgxButtonModule,
                    IgxRippleModule
                ]
            }),
            shortenComponentPathBy: "/layouts/tabs/"
        }));

        return configs;
    }
}
