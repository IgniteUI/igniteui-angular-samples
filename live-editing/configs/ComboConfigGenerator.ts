import { IgxComboModule } from "igniteui-angular";
import { ComboFeatures } from "../../src/app/combo/combo-features/combo-features.component";
import { CascadingCombos } from "./../../src/app/combo/cascading-combos/cascading-combos.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class ComboConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            appModuleConfig: new AppModuleConfig({
                imports: [IgxComboModule],
                ngDeclarations: [ComboFeatures, CascadingCombos],
                ngImports: [ComboFeatures, CascadingCombos]
            }),
            component: ComboFeatures
        }));

        return configs;
    }
}
