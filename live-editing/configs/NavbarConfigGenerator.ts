import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { NavbarComponent } from "../../src/app/navbar/navbar.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { IgxIconModule, IgxNavbarModule } from "igniteui-angular/main";
import { NavbarSample1Component } from "../../src/app/navbar/navbar-sample-1/navbar-sample-1.component";

export class NavbarConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        configs.push(new Config({
            component: NavbarComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxIconModule, IgxNavbarModule, NavbarComponent],
                ngDeclarations: [NavbarComponent],
                ngImports: [IgxIconModule, IgxNavbarModule]
            })
        }));

        configs.push(new Config({
            component: NavbarSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxNavbarModule, NavbarSample1Component],
                ngDeclarations: [NavbarSample1Component],
                ngImports: [IgxNavbarModule]
            }),
            shortenComponentPathBy: "/navbar/"
        }));

        return configs;
    }
}
