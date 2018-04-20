/* tslint:disable:object-literal-sort-keys */
import { IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxRippleModule } from "igniteui-angular/main";
import { RippleSample1Component } from "../../src/app/ripple/ripple-sample-1/ripple-sample-1.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class RippleConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

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
