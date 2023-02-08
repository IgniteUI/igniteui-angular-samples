import {IgxAvatarModule,
IgxChipsModule,
IgxIconModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class ChipConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'ChipSimpleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxChipsModule', 'IgxIconModule', 'ChipSimpleComponent'],
                ngDeclarations: ['ChipSimpleComponent'],
                ngImports: ['IgxChipsModule', 'IgxIconModule']
            }),
            shortenComponentPathBy: "/data-display/"
        }));

        configs.push(new Config({
            component: 'ChipAreaSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxChipsModule',
                    'IgxIconModule',
                    'IgxAvatarModule',
                    'ChipAreaSampleComponent'
                ],
                ngDeclarations: ['ChipAreaSampleComponent'],
                ngImports: ['IgxChipsModule', 'IgxIconModule', 'IgxAvatarModule']
            }),
            shortenComponentPathBy: "/data-display/"
        }));

        configs.push(new Config({
            component: 'ChipStylingSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxChipsModule', 'IgxIconModule', 'ChipStylingSampleComponent'],
                ngDeclarations: ['ChipStylingSampleComponent'],
                ngImports: ['IgxChipsModule', 'IgxIconModule']
            }),
            shortenComponentPathBy: "/data-display/"
        }));

        return configs;
    }
}
