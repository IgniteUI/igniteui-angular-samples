import {IgxSwitchModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class SwitchConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // switch sample 1
        configs.push(new Config({
            component: 'SwitchSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSwitchModule', 'SwitchSample1Component'],
                ngDeclarations: ['SwitchSample1Component'],
                ngImports: ['IgxSwitchModule']
            }),
            shortenComponentPathBy: "/data-entries/switch/"
        }));

        // switch sample 2
        configs.push(new Config({
            component: 'SwitchSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSwitchModule', 'SwitchSample2Component'],
                ngDeclarations: ['SwitchSample2Component'],
                ngImports: ['IgxSwitchModule']
            }),
            shortenComponentPathBy: "/data-entries/switch/"
        }));

        // switch styling
        configs.push(new Config({
            component: 'SwitchStylingComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxSwitchModule', 'SwitchStylingComponent'],
                ngDeclarations: ['SwitchStylingComponent'],
                ngImports: ['IgxSwitchModule']
            }),
            shortenComponentPathBy: "/data-entries/switch/"
        }));

        return configs;
    }
}
