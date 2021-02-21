import {IgxCheckboxModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class CheckboxConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // checkbox sample 2
        configs.push(new Config({
            component: 'CheckboxSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCheckboxModule', 'CheckboxSample1Component'],
                ngDeclarations: ['CheckboxSample1Component'],
                ngImports: ['IgxCheckboxModule']
            }),
            shortenComponentPathBy: "/data-entries/checkbox/"
        }));

        // checkbox sample 2
        configs.push(new Config({
            component: 'CheckboxSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCheckboxModule', 'CheckboxSample2Component'],
                ngDeclarations: ['CheckboxSample2Component'],
                ngImports: ['IgxCheckboxModule']
            }),
            shortenComponentPathBy: "/data-entries/checkbox/"
        }));

        configs.push(new Config({
            component: 'CheckboxSample3Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCheckboxModule', 'CheckboxSample3Component'],
                ngDeclarations: ['CheckboxSample3Component'],
                ngImports: ['IgxCheckboxModule']
            }),
            shortenComponentPathBy: "/data-entries/checkbox/"
        }));

        // checkbox styling
        configs.push(new Config({
            component: 'CheckboxStylingComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCheckboxModule', 'CheckboxStylingComponent'],
                ngDeclarations: ['CheckboxStylingComponent'],
                ngImports: ['IgxCheckboxModule']
            }),
            shortenComponentPathBy: "/data-entries/checkbox/"
        }));

        return configs;
    }
}
