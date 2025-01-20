import {IgxAvatarModule,
IgxButtonModule,
IgxIconModule,
IgxRippleModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class RippleConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'RippleStylingSampleComponent',
            additionalFiles: ["/src/app/interactions/ripple/ripple-stying/layout.scss"],
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
