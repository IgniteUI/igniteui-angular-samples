import {IgxGridModule,
IgxIconModule,
IgxInputGroupModule,
IgxTimePickerModule} from 'igniteui-angular';
import {AppModuleConfig} from './core/AppModuleConfig';
import {Config} from './core/Config';
import {IConfigGenerator} from './core/IConfigGenerator';
export class LocalizationConfigGenerator implements IConfigGenerator {
    

    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // localization sample 1
        configs.push(new Config({
            component: 'LocalizationSample1Component',
            additionalFiles: ["src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxInputGroupModule', 'LocalizationSample1Component', 'IgxGridModule', 'IgxIconModule'],
                ngDeclarations: ['LocalizationSample1Component'],
                ngImports: ['IgxInputGroupModule', 'IgxGridModule', 'IgxGridModule']
            }),
            shortenComponentPathBy: "/localization-samples/"
        }));

        // localization sample 2
        configs.push(new Config({
            component: 'LocalizationSample2Component',
            additionalFiles: ["src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxInputGroupModule', 'LocalizationSample2Component', 'IgxIconModule',
                          'IgxTimePickerModule', 'IgxGridModule'],
                ngDeclarations: ['LocalizationSample2Component'],
                ngImports: ['IgxInputGroupModule', 'IgxIconModule', 'IgxTimePickerModule', 'IgxGridModule']
            }),
            shortenComponentPathBy: "/localization-samples/"
        }));

        // localization sample 3
        configs.push(new Config({
            component: 'LocalizationSample3Component',
            additionalFiles: ["src/app/data/nwindData.ts"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxInputGroupModule', 'LocalizationSample3Component', 'IgxGridModule', 'IgxIconModule'],
                ngDeclarations: ['LocalizationSample3Component'],
                ngImports: ['IgxInputGroupModule', 'IgxGridModule', 'IgxGridModule']
            }),
            shortenComponentPathBy: "/localization-samples/"
        }));

        return configs;
    }
}
