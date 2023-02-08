import {IgxDividerModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class DividerConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'DividerDefaultComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDividerModule', 'DividerDefaultComponent'],
                ngDeclarations: ['DividerDefaultComponent'],
                ngImports: ['IgxDividerModule']
            }),
            shortenComponentPathBy: "/layouts/divider/"
        }));

        configs.push(new Config({
            component: 'DividerDashedComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDividerModule', 'DividerDashedComponent'],
                ngDeclarations: ['DividerDashedComponent'],
                ngImports: ['IgxDividerModule']
            }),
            shortenComponentPathBy: "/layouts/divider/"
        }));

        configs.push(new Config({
            component: 'DividerVerticalComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDividerModule', 'DividerVerticalComponent'],
                ngDeclarations: ['DividerVerticalComponent'],
                ngImports: ['IgxDividerModule']
            }),
            shortenComponentPathBy: "/layouts/divider/"
        }));

        configs.push(new Config({
            component: 'DividerInsetComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDividerModule', 'DividerInsetComponent'],
                ngDeclarations: ['DividerInsetComponent'],
                ngImports: ['IgxDividerModule']
            }),
            shortenComponentPathBy: "/layouts/divider/"
        }));

        return configs;
    }
}
