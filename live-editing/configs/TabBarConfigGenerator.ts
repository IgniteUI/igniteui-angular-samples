import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { TabbarComponent } from "../../src/app/tabbar/tabbar.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Routes, Router, RouterModule } from "@angular/router";
import { IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxRippleModule, IgxListModule, IgxBottomNavModule } from "igniteui-angular/main";
import { TabbarSample1Component } from "../../src/app/tabbar/tabbar-sample-1/tabbar-sample-1.component";
import { TabbarSample2Component } from "../../src/app/tabbar/tabbar-sample-2/tabbar-sample-2.component";

export class TabBarConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        // tabbar sample
        configs.push(new Config({
            component: TabbarComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxButtonModule, IgxIconModule,
                    IgxRippleModule, IgxListModule, IgxBottomNavModule, "Routes",
                    Router, RouterModule, TabbarComponent],
                ngDeclarations: [TabbarComponent],
                ngImports: [ "RouterModule.forRoot(Routes = [\{component: TabbarComponent, path: 'tabbar'}])",
                    IgxAvatarModule, IgxButtonModule, IgxIconModule,
                    IgxRippleModule, IgxListModule, IgxBottomNavModule]
            })
        }));

        // tabbar sample 1
        configs.push(new Config({
            component: TabbarSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxIconModule, IgxListModule,
                    IgxBottomNavModule, Router, RouterModule, TabbarSample1Component],
                ngDeclarations: [TabbarSample1Component],
                ngImports: [RouterModule, IgxAvatarModule, IgxIconModule,
                    IgxListModule, IgxBottomNavModule]
            }),
            shortenComponentPathBy: "/tabbar/"
        }));

        // tabbar sample 2
        configs.push(new Config({
            component: TabbarSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxAvatarModule, IgxIconModule, IgxListModule,
                    IgxBottomNavModule, Router, RouterModule, TabbarSample2Component],
                ngDeclarations: [TabbarSample2Component],
                ngImports: [RouterModule, IgxAvatarModule, IgxIconModule,
                    IgxListModule, IgxBottomNavModule]
            }),
            shortenComponentPathBy: "/tabbar/"
        }));

        return configs;
    }
}
