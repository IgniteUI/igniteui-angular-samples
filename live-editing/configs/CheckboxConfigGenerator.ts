import { IgxCheckboxModule } from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class CheckboxConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // checkbox sample 2
        configs.push(new Config({
            component: 'CheckboxSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/checkbox/"
        }));

        // checkbox sample 2
        configs.push(new Config({
            component: 'CheckboxSample2Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/checkbox/"
        }));

        configs.push(new Config({
            component: 'CheckboxSample3Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/data-entries/checkbox/"
        }));

        // checkbox styling
        configs.push(new Config({
            component: 'CheckboxStylingComponent',
            additionalFiles: ["/src/app/data-entries/checkbox/checkbox-styling/layout.scss"],
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
