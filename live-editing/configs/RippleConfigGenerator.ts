import {IgxAvatarModule,
IgxButtonModule,
IgxIconModule,
IgxRippleModule} from '@infragistics/igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
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
