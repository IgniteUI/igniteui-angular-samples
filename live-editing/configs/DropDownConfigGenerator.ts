/* tslint:disable:object-literal-sort-keys */
import { HttpClientModule } from "@angular/common/http";
import { IgxButtonModule, IgxDropDownModule,  IgxForOfModule, IgxIconModule, IgxInputGroupModule,
    IgxNavbarModule, IgxRippleModule, IgxSwitchModule, IgxToastModule, IgxToggleModule } from "igniteui-angular";
// tslint:disable-next-line:max-line-length
import { DropDownRemoteComponent } from "../../src/app/data-entries/dropdown/drop-down-remote-virtual/drop-down-remote.component";
// tslint:disable-next-line:max-line-length
import { DropDownVirtualComponent } from "../../src/app/data-entries/dropdown/drop-down-virtual/drop-down-virtual.component";
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
import { RemoteService } from "../../src/app/grid/services/remote.service";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class DropDownConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: DropDownSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule, DropDownSample1Component, IgxButtonModule, IgxToggleModule],
                ngDeclarations: [DropDownSample1Component],
                ngImports: [IgxDropDownModule, IgxButtonModule, IgxToggleModule]
            }),
            shortenComponentPathBy: "/data-entries/dropdown/"
        }));

        configs.push(new Config({
            component: DropDownSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule, DropDownSample2Component, IgxButtonModule, IgxToggleModule],
                ngDeclarations: [DropDownSample2Component],
                ngImports: [IgxDropDownModule, IgxButtonModule, IgxToggleModule]
            }),
            shortenComponentPathBy: "/data-entries/dropdown/"
        }));

        configs.push(new Config({
            component: DropDownSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule, DropDownSample3Component, IgxButtonModule, IgxToggleModule],
                ngDeclarations: [DropDownSample3Component],
                ngImports: [IgxDropDownModule, IgxButtonModule, IgxToggleModule]
            }),
            shortenComponentPathBy: "/data-entries/dropdown/"
        }));

        configs.push(new Config({
            component: DropDownSample5Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule, DropDownSample5Component, IgxButtonModule, IgxSwitchModule,
                    IgxToggleModule],
                ngDeclarations: [DropDownSample5Component],
                ngImports: [IgxDropDownModule, IgxButtonModule, IgxSwitchModule, IgxToggleModule]
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
                imports: [IgxDropDownModule, DropdownMenuComponent, IgxIconModule, IgxNavbarModule,
                    IgxButtonModule, IgxToggleModule],
                ngDeclarations: [DropdownMenuComponent],
                ngImports: [IgxDropDownModule, IgxIconModule, IgxNavbarModule, IgxButtonModule, IgxToggleModule]
            }),
            shortenComponentPathBy: "/data-entries/dropdown/"
        }));

        configs.push(new Config({
            component: DropDownVirtualComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule, DropDownVirtualComponent,
                    IgxButtonModule, IgxToggleModule, IgxForOfModule],
                ngDeclarations: [DropDownVirtualComponent],
                ngImports: [IgxDropDownModule, IgxButtonModule, IgxToggleModule, IgxForOfModule]
            }),
            shortenComponentPathBy: "/data-entries/dropdown/"
        }));

        configs.push(new Config({
            component: DropDownRemoteComponent,
            additionalFiles: ["/src/app/grid/services/remote.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDropDownModule, DropDownRemoteComponent,
                    IgxButtonModule, IgxToggleModule, IgxForOfModule, IgxToastModule, HttpClientModule, RemoteService],
                ngDeclarations: [DropDownRemoteComponent],
                ngImports: [IgxDropDownModule, IgxButtonModule, IgxToastModule,
                    IgxToggleModule, IgxForOfModule, HttpClientModule],
                ngProviders: [RemoteService]
            })
        }));

        return configs;
    }
}
