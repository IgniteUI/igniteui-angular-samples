/* tslint:disable:object-literal-sort-keys */
import { RouterModule } from "@angular/router";
import { IgxBottomNavModule } from "igniteui-angular";
import { TabbarSample1Component } from "../../src/app/layouts/tabbar/tabbar-sample-1/tabbar-sample-1.component";
import { TabbarSample2Component } from "../../src/app/layouts/tabbar/tabbar-sample-2/tabbar-sample-2.component";
import {
    TabbarSample3Component } from "../../src/app/layouts/tabbar/tabbar-sample-3/components/tabbar-sample-3.component";
import {
    TabbarSample3Module } from "../../src/app/layouts/tabbar/tabbar-sample-3/tabbar-sample-3.module";
import { TabbarStyleComponent } from "../../src/app/layouts/tabbar/tabbar-style/tabbar-style.component";
import { TabbarView1Component } from "../../src/app/layouts/tabbar/views/view1/view1.component";
import { TabbarView2Component } from "../../src/app/layouts/tabbar/views/view2/view2.component";
import { TabbarView3Component } from "../../src/app/layouts/tabbar/views/view3/view3.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class TabBarConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // tabbar sample 1
        configs.push(new Config({
            component: TabbarSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBottomNavModule, TabbarSample1Component],
                ngDeclarations: [TabbarSample1Component],
                ngImports: [IgxBottomNavModule]
            }),
            shortenComponentPathBy: "/layouts/tabbar/"
        }));

        // tabbar sample 2
        configs.push(new Config({
            component: TabbarSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBottomNavModule, TabbarSample2Component],
                ngDeclarations: [TabbarSample2Component],
                ngImports: [IgxBottomNavModule]
            }),
            shortenComponentPathBy: "/layouts/tabbar/"
        }));

        // tabbar sample 3
        configs.push(new Config({
            component: TabbarSample3Component,
            additionalFiles: [
                "/src/app/layouts/tabbar/tabbar-sample-3/tabbar.routing.module.ts",
                "/src/app/layouts/tabbar/tabbar-sample-3/tabbar-sample-3.module.ts",
                "/src/app/layouts/tabbar/views/views.module.ts",
                "/src/app/layouts/tabbar/views/view1/view1.component.ts",
                "/src/app/layouts/tabbar/views/view1/view1.component.html",
                "/src/app/layouts/tabbar/views/view2/view2.component.ts",
                "/src/app/layouts/tabbar/views/view2/view2.component.html",
                "/src/app/layouts/tabbar/views/view3/view3.component.ts",
                "/src/app/layouts/tabbar/views/view3/view3.component.html"
            ],
            appModuleConfig: new AppModuleConfig({
                imports: [
                    TabbarSample3Module,
                    TabbarSample3Component,
                    IgxBottomNavModule,
                    RouterModule,
                    TabbarView1Component,
                    TabbarView2Component,
                    TabbarView3Component
                ],
                ngDeclarations: [
                    TabbarSample3Component
                ],
                ngImports: [
                    IgxBottomNavModule,
                    TabbarSample3Module,
                    RouterModule,
                    `
                    RouterModule.forRoot([
                        { path: "tabbar-view1", component: TabbarView1Component },
                        { path: "tabbar-view2", component: TabbarView2Component },
                        { path: "tabbar-view3", component: TabbarView3Component }
                    ])
                    `
                ]
            }),
            shortenComponentPathBy: "/layouts/tabbar/"
        }));

        // tabbar styling sample
        configs.push(new Config({
            component: TabbarStyleComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxBottomNavModule, TabbarStyleComponent],
                ngDeclarations: [TabbarStyleComponent],
                ngImports: [IgxBottomNavModule]
            }),
            shortenComponentPathBy: "/layouts/tabbar/"
        }));

        return configs;
    }
}
