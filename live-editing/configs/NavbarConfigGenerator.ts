/* tslint:disable:object-literal-sort-keys */
import { IgxIconModule, IgxNavbarModule } from "igniteui-angular";
import { NavbarSample1Component } from "../../src/app/menus/navbar/navbar-sample-1/navbar-sample-1.component";
import { NavbarSample2Component } from "../../src/app/menus/navbar/navbar-sample-2/navbar-sample-2.component";
import { NavbarSample3Component } from "../../src/app/menus/navbar/navbar-sample-3/navbar-sample-3.component";
import { NavbarStyleComponent } from "../../src/app/menus/navbar/navbar-style/navbar-style.component";
import { NavbarComponent } from "../../src/app/menus/navbar/navbar.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";
import { NavbarCustomTitleComponent } from "../../src/app/menus/navbar/navbar-custom-title/navbar-custom-title.component";

export class NavbarConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'NavbarComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxNavbarModule', 'NavbarComponent'],
                ngDeclarations: ['NavbarComponent'],
                ngImports: ['IgxIconModule', 'IgxNavbarModule']
            }),
            shortenComponentPathBy: "/menus/"
        }));

        configs.push(new Config({
            component: 'NavbarSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxNavbarModule', 'NavbarSample1Component'],
                ngDeclarations: ['NavbarSample1Component'],
                ngImports: ['IgxIconModule', 'IgxNavbarModule']
            }),
            shortenComponentPathBy: "/menus/navbar/"
        }));

        configs.push(new Config({
            component: 'NavbarSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxNavbarModule', 'NavbarSample2Component'],
                ngDeclarations: ['NavbarSample2Component'],
                ngImports: ['IgxIconModule', 'IgxNavbarModule']
            }),
            shortenComponentPathBy: "/menus/navbar/"
        }));

        configs.push(new Config({
            component: 'NavbarSample3Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxNavbarModule', 'NavbarSample3Component'],
                ngDeclarations: ['NavbarSample3Component'],
                ngImports: ['IgxIconModule', 'IgxNavbarModule']
            }),
            shortenComponentPathBy: "/menus/navbar/"
        }));

        configs.push(new Config({
            component: 'NavbarStyleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxNavbarModule', 'NavbarStyleComponent'],
                ngDeclarations: ['NavbarStyleComponent'],
                ngImports: ['IgxIconModule', 'IgxNavbarModule']
            }),
            shortenComponentPathBy: "/menus/navbar/"
        }));

        configs.push(new Config({
            component: 'NavbarCustomTitleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxIconModule', 'IgxNavbarModule', 'NavbarCustomTitleComponent'],
                ngDeclarations: ['NavbarCustomTitleComponent'],
                ngImports: ['IgxIconModule', 'IgxNavbarModule']
            }),
            shortenComponentPathBy: "/menus/navbar/"
        }));

        return configs;
    }
}
