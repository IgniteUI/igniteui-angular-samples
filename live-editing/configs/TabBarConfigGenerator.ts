import { Router, RouterModule, Routes } from "@angular/router";
import { IgxAvatarModule, IgxButtonModule,
    IgxIconModule, IgxListModule, IgxRippleModule, IgxTabsModule } from "igniteui-angular/main";
import { TabbarSample1Component } from "../../src/app/tabbar/tabbar-sample-1/tabbar-sample-1.component";
import { TabbarSample2Component } from "../../src/app/tabbar/tabbar-sample-2/tabbar-sample-2.component";
import { TabbarComponent } from "../../src/app/tabbar/tabbar.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class TabBarConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        // tabbar sample
        configs.push(new Config({
            component: TabbarComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxButtonModule, IgxIconModule,
                    IgxRippleModule, IgxListModule, IgxTabsModule, "Routes",
                    Router, RouterModule, TabbarComponent],
                ngDeclarations: [TabbarComponent],
                ngImports: [ "RouterModule.forRoot(Routes = [\{component: TabbarComponent, path: 'tabbar'}])",
                    IgxAvatarModule, IgxButtonModule, IgxIconModule,
                    IgxRippleModule, IgxListModule, IgxTabsModule]
            })
        }));

        // tabbar sample 1
        configs.push(new Config({
            component: TabbarSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxIconModule, IgxListModule,
                    IgxTabsModule, Router, RouterModule, TabbarSample1Component],
                ngDeclarations: [TabbarSample1Component],
                ngImports: [RouterModule, IgxAvatarModule, IgxIconModule,
                    IgxListModule, IgxTabsModule]
            }),
            shortenComponentPathBy: "/tabbar/"
        }));

        // tabbar sample 2
        configs.push(new Config({
            component: TabbarSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxIconModule, IgxListModule,
                    IgxTabsModule, Router, RouterModule, TabbarSample2Component],
                ngDeclarations: [TabbarSample2Component],
                ngImports: [RouterModule, IgxAvatarModule, IgxIconModule,
                    IgxListModule, IgxTabsModule]
            }),
            shortenComponentPathBy: "/tabbar/"
        }));

        return configs;
    }
}
