/* tslint:disable:object-literal-sort-keys */
import { IgxAvatarModule, IgxButtonModule, IgxIconModule, IgxRippleModule } from "igniteui-angular";
import { RippleStylingSampleComponent
       } from "../../src/app/interactions/ripple/ripple-stying/ripple-styling-sample.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class RippleConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'RippleStylingSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxRippleModule', 'IgxAvatarModule', 'IgxIconModule', 'IgxButtonModule',
                    'RippleStylingSampleComponent'],
                ngDeclarations: ['RippleStylingSampleComponent'],
                ngImports: ['IgxRippleModule', 'IgxAvatarModule', 'IgxIconModule', 'IgxButtonModule']
            }),
            shortenComponentPathBy: "/interactions/ripple/"
        }));

        return configs;
    }
}
