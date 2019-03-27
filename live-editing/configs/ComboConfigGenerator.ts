import { HttpClientModule } from "@angular/common/http";
import { IgxComboModule, IgxSelectModule, IgxSwitchModule, IgxToastModule } from "igniteui-angular";
import { RemoteService } from "../../src/app/grid/services/remote.service";
import { ComboFeatures } from "../../src/app/lists/combo/combo-features/combo-features.component";
import { ComboMainComponent } from "../../src/app/lists/combo/combo-main/combo-main.component";
import { ComboRemoteComponent } from "../../src/app/lists/combo/combo-remote/combo-remote.component";
import { ComboTemplateComponent } from "../../src/app/lists/combo/combo-template/combo-template.component";
import { CascadingCombos } from "./../../src/app/lists/combo/cascading-combos/cascading-combos.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class ComboConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            additionalFiles: ["/src/app/lists/combo/combo-features/local-data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxComboModule, IgxSwitchModule, ComboFeatures],
                ngDeclarations: [ComboFeatures],
                ngImports: [IgxComboModule, IgxSwitchModule]
            }),
            component: ComboFeatures,
            shortenComponentPathBy: "/lists/combo/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/lists/combo/cascading-combos/local-data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxComboModule, IgxSelectModule, CascadingCombos],
                ngDeclarations: [CascadingCombos],
                ngImports: [IgxComboModule, IgxSelectModule]
            }),
            component: CascadingCombos,
            shortenComponentPathBy: "/lists/combo/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/lists/combo/combo-main/local-data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxComboModule, ComboMainComponent],
                ngDeclarations: [ComboMainComponent],
                ngImports: [IgxComboModule]
            }),
            component: ComboMainComponent,
            shortenComponentPathBy: "/lists/combo/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/lists/combo/combo-template/local-data.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: [IgxComboModule, ComboTemplateComponent],
                ngDeclarations: [ComboTemplateComponent],
                ngImports: [IgxComboModule]
            }),
            component: ComboTemplateComponent,
            shortenComponentPathBy: "/lists/combo/"
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
