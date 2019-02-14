/* tslint:disable:object-literal-sort-keys */
import { IgxButtonModule, IgxIconModule, IgxRippleModule } from "igniteui-angular";
import { ButtonsSample1Component
} from "../../src/app/data-entries/buttons/buttons-sample-1/buttons-sample-1.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class ButtonConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // buttons sample 1
        configs.push(new Config({
            component: ButtonsSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxRippleModule, ButtonsSample1Component],
                ngDeclarations: [ButtonsSample1Component],
                ngImports: [IgxButtonModule, IgxIconModule, IgxRippleModule]
            }),
            shortenComponentPathBy: "/data-entries/buttons/"
        }));

        return configs;
    }
}
