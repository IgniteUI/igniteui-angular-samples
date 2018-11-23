/* tslint:disable:object-literal-sort-keys */
// tslint:disable-next-line:max-line-length
import { IgxButtonModule, IgxDropDownModule, IgxIconModule, IgxInputGroupModule, IgxNavbarModule, IgxRippleModule, IgxToggleModule } from "igniteui-angular";
import { DropDownSample1Component } from "../../src/app/dropdown/dropdown-sample-1/dropdown-sample-1.component";
import { DropDownSample2Component } from "../../src/app/dropdown/dropdown-sample-2/dropdown-sample-2.component";
import { DropDownSample3Component } from "../../src/app/dropdown/dropdown-sample-3/dropdown-sample-3.component";

import { DropdownMenuComponent } from "../../src/app/dropdown/dropdown-menu/dropdown-menu.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class DropDownConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: DropDownSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule, DropDownSample1Component, IgxButtonModule],
                ngDeclarations: [DropDownSample1Component],
                ngImports: [IgxDropDownModule, IgxButtonModule]
            }),
            shortenComponentPathBy: "/dropdown/"
        }));

        configs.push(new Config({
            component: DropDownSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule, DropDownSample2Component, IgxButtonModule, IgxInputGroupModule,
                    IgxRippleModule, IgxIconModule],
                ngDeclarations: [DropDownSample2Component],
                ngImports: [IgxDropDownModule, IgxButtonModule, IgxInputGroupModule, IgxRippleModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/dropdown/"
        }));

        configs.push(new Config({
            component: DropDownSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule, DropDownSample3Component, IgxButtonModule],
                ngDeclarations: [DropDownSample3Component],
                ngImports: [IgxDropDownModule, IgxButtonModule]
            }),
            shortenComponentPathBy: "/dropdown/"
        }));

        configs.push(new Config({
            component: DropdownMenuComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule, DropdownMenuComponent, IgxIconModule, IgxNavbarModule, IgxToggleModule],
                ngDeclarations: [DropdownMenuComponent],
                ngImports: [IgxDropDownModule, IgxIconModule, IgxNavbarModule, IgxToggleModule]
            }),
            shortenComponentPathBy: "/dropdown/"
        }));

        return configs;
    }
}
