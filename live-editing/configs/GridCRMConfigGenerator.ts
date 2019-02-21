/* tslint:disable:object-literal-sort-keys */
import { HttpClientModule } from "@angular/common/http";
import {
    IgxAvatarModule,
    IgxBadgeModule,
    IgxButtonModule,
    IgxCheckboxModule,
    IgxExcelExporterService,
    IgxGridModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxProgressBarModule,
    IgxRippleModule,
    IgxSwitchModule,
    IgxToggleModule
} from "igniteui-angular";
import { GridCRMComponent } from "../../src/app/grid-crm/grid-crm/grid-crm.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class GridCRMConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: GridCRMComponent,
            additionalFiles: ["/src/app/grid-crm/grid-crm/data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [HttpClientModule, IgxAvatarModule, IgxBadgeModule, IgxButtonModule,
                    IgxGridModule, IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, IgxToggleModule, IgxCheckboxModule,
                    IgxExcelExporterService, GridCRMComponent],
                ngDeclarations: [GridCRMComponent],
                ngImports: [IgxAvatarModule, IgxBadgeModule, IgxButtonModule, IgxGridModule,
                    IgxIconModule, IgxInputGroupModule, IgxProgressBarModule,
                    IgxRippleModule, IgxSwitchModule, IgxToggleModule, IgxCheckboxModule, HttpClientModule],
                ngProviders: [IgxExcelExporterService]
            }),
            shortenComponentPathBy: "/grid-crm/"
        }));

        return configs;
    }
}
