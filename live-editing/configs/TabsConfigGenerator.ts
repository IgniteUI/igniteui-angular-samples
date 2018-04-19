/* tslint:disable:object-literal-sort-keys */
import { IgxAvatarModule, IgxButtonModule, IgxCardModule, IgxIconModule,
    IgxNavbarModule, IgxRippleModule, IgxTabsModule } from "igniteui-angular/main";
import { TabsSample1Component } from "../../src/app/tabs/tabs-sample-1/tabs-sample-1.component";
import { TabsSample2Component } from "../../src/app/tabs/tabs-sample-2/tabs-sample-2.component";
import { TabsSample3Component } from "../../src/app/tabs/tabs-sample-3/tabs-sample-3.component";
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
                imports: [IgxTabsModule, IgxCardModule, IgxAvatarModule,
                    IgxButtonModule, IgxRippleModule, TabsSample3Component],
                ngDeclarations: [TabsSample3Component],
                ngImports: [IgxTabsModule, IgxCardModule, IgxAvatarModule, IgxButtonModule, IgxRippleModule]
            }),
            shortenComponentPathBy: "/tabs/"
        }));

        return configs;
    }
}
