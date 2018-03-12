import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { ButtonsSample1Component } from "../../src/app/buttons/buttons-sample-1/buttons-sample-1.component";
import { IgxButtonModule, IgxIconModule, IgxRippleModule } from "igniteui-angular/main";
import { AppModuleConfig } from "./core/AppModuleConfig";

export class ButtonConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        // buttons sample 1
        configs.push(new Config({
            component: ButtonsSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxIconModule, IgxRippleModule, ButtonsSample1Component],
                ngDeclarations: [ButtonsSample1Component],
                ngImports: [IgxButtonModule, IgxIconModule, IgxRippleModule]
            }),
            shortenComponentPathBy: "/buttons/"
        }));

        return configs;
    }
}
