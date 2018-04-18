import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { IgxTabsModule, IgxCardModule, IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxRippleModule, IgxNavbarModule } from "igniteui-angular/main";
import { TabsSample1Component } from "../../src/app/tabs/tabs-sample-1/tabs-sample-1.component";
import { TabsSample2Component } from "../../src/app/tabs/tabs-sample-2/tabs-sample-2.component";
import { TabsSample3Component } from "../../src/app/tabs/tabs-sample-3/tabs-sample-3.component";

export class TabsConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        configs.push(new Config({
            component: TabsSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTabsModule, TabsSample1Component],
                ngDeclarations: [TabsSample1Component],
                ngImports: [IgxTabsModule]
            }),
            shortenComponentPathBy: "/tabs/"
        }));

        configs.push(new Config({
            component: TabsSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTabsModule, IgxNavbarModule, IgxIconModule, TabsSample2Component],
                ngDeclarations: [TabsSample2Component],
                ngImports: [IgxTabsModule, IgxNavbarModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/tabs/"
        }));

        configs.push(new Config({
            component: TabsSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTabsModule, IgxCardModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule, TabsSample3Component],
                ngDeclarations: [TabsSample3Component],
                ngImports: [IgxTabsModule, IgxCardModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule]
            }),
            shortenComponentPathBy: "/tabs/"
        }));

        return configs;
    }
}
