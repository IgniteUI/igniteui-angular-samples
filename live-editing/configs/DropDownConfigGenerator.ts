/* tslint:disable:object-literal-sort-keys */
// tslint:disable-next-line:max-line-length
import { IgxButtonModule, IgxDropDownModule, IgxIconModule, IgxInputGroupModule,
    IgxNavbarModule, IgxRippleModule, IgxSwitchModule, IgxToggleModule } from "igniteui-angular";
import { DropdownMenuComponent } from "../../src/app/data-entries/dropdown/dropdown-menu/dropdown-menu.component";
import { DropDownSample1Component
} from "../../src/app/data-entries/dropdown/dropdown-sample-1/dropdown-sample-1.component";
import { DropDownSample2Component
} from "../../src/app/data-entries/dropdown/dropdown-sample-2/dropdown-sample-2.component";
import { DropDownSample3Component
} from "../../src/app/data-entries/dropdown/dropdown-sample-3/dropdown-sample-3.component";
import { DropDownSample4Component
} from "../../src/app/data-entries/dropdown/dropdown-sample-4/dropdown-sample-4.component";
import { DropDownSample5Component
} from "../../src/app/data-entries/dropdown/dropdown-sample-5/dropdown-sample-5.component";
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
            shortenComponentPathBy: "/data-entries/dropdown/"
        }));

        configs.push(new Config({
            component: DropDownSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule, DropDownSample2Component, IgxButtonModule],
                ngDeclarations: [DropDownSample2Component],
                ngImports: [IgxDropDownModule, IgxButtonModule]
            }),
            shortenComponentPathBy: "/data-entries/dropdown/"
        }));

        configs.push(new Config({
            component: DropDownSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule, DropDownSample3Component, IgxButtonModule],
                ngDeclarations: [DropDownSample3Component],
                ngImports: [IgxDropDownModule, IgxButtonModule]
            }),
            shortenComponentPathBy: "/data-entries/dropdown/"
        }));

        configs.push(new Config({
            component: DropDownSample5Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule, DropDownSample5Component, IgxButtonModule, IgxSwitchModule],
                ngDeclarations: [DropDownSample5Component],
                ngImports: [IgxDropDownModule, IgxButtonModule, IgxSwitchModule]
            }),
            shortenComponentPathBy: "/data-entries/dropdown/"
        }));

        configs.push(new Config({
            component: DropDownSample4Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule, DropDownSample4Component, IgxInputGroupModule,
                    IgxRippleModule, IgxIconModule, IgxToggleModule],
                ngDeclarations: [DropDownSample4Component],
                ngImports: [IgxDropDownModule, IgxInputGroupModule, IgxRippleModule, IgxIconModule, IgxToggleModule]
            }),
            shortenComponentPathBy: "/data-entries/dropdown/"
        }));

        configs.push(new Config({
            component: DropdownMenuComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule, DropdownMenuComponent, IgxIconModule, IgxNavbarModule, IgxToggleModule],
                ngDeclarations: [DropdownMenuComponent],
                ngImports: [IgxDropDownModule, IgxIconModule, IgxNavbarModule, IgxToggleModule]
            }),
            shortenComponentPathBy: "/data-entries/dropdown/"
        }));

        return configs;
    }
}
