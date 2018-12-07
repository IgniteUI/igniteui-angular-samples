/* tslint:disable:object-literal-sort-keys */
import { IgxIconModule, IgxNavbarModule } from "igniteui-angular";
import { NavbarSample2Component } from "../../src/app/navbar/navbar-sample-2/navbar-sample-2.component";
import { NavbarSample1Component } from "../../src/app/navbar/navbar-sample-1/navbar-sample-1.component";
import { NavbarComponent } from "../../src/app/navbar/navbar.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class NavbarConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

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

        configs.push(new Config({
            component: NavbarSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxNavbarModule, NavbarSample2Component],
                ngDeclarations: [NavbarSample2Component],
                ngImports: [IgxNavbarModule]
            }),
            shortenComponentPathBy: "/navbar/"
        }));

        return configs;
    }
}
