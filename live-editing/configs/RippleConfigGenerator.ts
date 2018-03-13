import { IConfigGenerator } from "./core/IConfigGenerator";
import { Config } from "./core/Config";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { RippleSample1Component } from "../../src/app/ripple/ripple-sample-1/ripple-sample-1.component";
import { IgxRippleModule, IgxAvatarModule, IgxIconModule, IgxButtonModule } from "igniteui-angular/main";

export class RippleConfigGenerator implements IConfigGenerator {
    generateConfigs(): Config[] {
        let configs = new Array<Config>();

        configs.push(new Config({
            component: RippleSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxRippleModule, IgxAvatarModule, IgxIconModule, IgxButtonModule,
                    RippleSample1Component],
                ngDeclarations: [RippleSample1Component],
                ngImports: [IgxRippleModule, IgxAvatarModule, IgxIconModule, IgxButtonModule]
            }),
            shortenComponentPathBy: "/ripple/"
        }));

        return configs;
    }
}
