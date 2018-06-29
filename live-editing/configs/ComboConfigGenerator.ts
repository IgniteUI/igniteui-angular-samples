import { HttpClientModule } from "@angular/common/http";
import { IgxComboModule, IgxDropDownModule, IgxIconModule,
    IgxInputGroupModule, IgxSwitchModule } from "igniteui-angular";
import { ComboFeatures } from "../../src/app/combo/combo-features/combo-features.component";
import { RemoteService } from "../../src/app/grid/services/remote.service";
import { CascadingCombos } from "./../../src/app/combo/cascading-combos/cascading-combos.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class ComboConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            additionalFiles: ["/src/app/combo/combo-features/local-data.ts",
                "/src/app/grid/services/remote.service.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxComboModule, IgxSwitchModule, ComboFeatures,
                    HttpClientModule, RemoteService],
                ngDeclarations: [ComboFeatures],
                ngImports: [IgxComboModule, IgxSwitchModule, HttpClientModule],
                ngProviders: [RemoteService]
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

        return configs;
    }
}
