import { HttpClientModule } from "@angular/common/http";
import { IgxComboModule, IgxDropDownModule, IgxIconModule,
    IgxInputGroupModule, IgxSwitchModule, IgxToastModule } from "igniteui-angular";
import { ComboFeatures } from "../../src/app/combo/combo-features/combo-features.component";
import { ComboMainComponent } from "../../src/app/combo/combo-main/combo-main.component";
import { ComboRemoteComponent } from "../../src/app/combo/combo-remote/combo-remote.component";
import { ComboTemplateComponent } from "../../src/app/combo/combo-template/combo-template.component";
import { RemoteService } from "../../src/app/grid/services/remote.service";
import { CascadingCombos } from "./../../src/app/combo/cascading-combos/cascading-combos.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class ComboConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            additionalFiles: ["/src/app/combo/combo-features/local-data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxComboModule, IgxSwitchModule, ComboFeatures],
                ngDeclarations: [ComboFeatures],
                ngImports: [IgxComboModule, IgxSwitchModule]
            }),
            component: ComboFeatures
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/combo/cascading-combos/local-data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxComboModule, IgxDropDownModule, IgxIconModule, IgxInputGroupModule, CascadingCombos],
                ngDeclarations: [CascadingCombos],
                ngImports: [IgxComboModule, IgxDropDownModule, IgxIconModule, IgxInputGroupModule]
            }),
            component: CascadingCombos
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/combo/combo-main/local-data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxComboModule, ComboMainComponent],
                ngDeclarations: [ComboMainComponent],
                ngImports: [IgxComboModule]
            }),
            component: ComboMainComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/combo/combo-template/local-data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxComboModule, ComboTemplateComponent],
                ngDeclarations: [ComboTemplateComponent],
                ngImports: [IgxComboModule]
            }),
            component: ComboTemplateComponent
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/grid/services/remote.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxComboModule, IgxToastModule, ComboRemoteComponent,
                    HttpClientModule, RemoteService],
                ngDeclarations: [ComboRemoteComponent],
                ngImports: [IgxComboModule, IgxToastModule, HttpClientModule],
                ngProviders: [RemoteService]
            }),
            component: ComboRemoteComponent
        }));

        return configs;
    }
}
