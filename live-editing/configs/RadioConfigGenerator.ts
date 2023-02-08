import {ReactiveFormsModule} from '@angular/forms';
import {IgxButtonModule,
IgxInputGroupModule,
IgxRadioModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class RadioConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'RadioSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxRadioModule', 'RadioSample1Component'],
                ngDeclarations: ['RadioSample1Component'],
                ngImports: ['IgxRadioModule']
            }),
            shortenComponentPathBy: "/data-entries/radio/"
        }));

        configs.push(new Config({
            component: 'RadioSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxRadioModule', 'RadioSample2Component'],
                ngDeclarations: ['RadioSample2Component'],
                ngImports: ['IgxRadioModule']
            }),
            shortenComponentPathBy: "/data-entries/radio/"
        }));

        configs.push(new Config({
            component: 'RadioGroupSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule',
                          'IgxRadioModule',
                          'RadioGroupSampleComponent',
                          'IgxInputGroupModule',
                          'ReactiveFormsModule'],
                ngDeclarations: ['RadioGroupSampleComponent'],
                ngImports: ['IgxButtonModule', 'IgxRadioModule', 'IgxInputGroupModule', 'ReactiveFormsModule']
            }),
            shortenComponentPathBy: "/data-entries/radio/"
        }));

        configs.push(new Config({
            component: 'RadioGroupVerticalComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxRadioModule', 'RadioGroupVerticalComponent'],
                ngDeclarations: ['RadioGroupVerticalComponent'],
                ngImports: ['IgxRadioModule']
            }),
            shortenComponentPathBy: "/data-entries/radio/"
        }));

        configs.push(new Config({
            component: 'RadioStylingSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxRadioModule', 'RadioStylingSampleComponent'],
                ngDeclarations: ['RadioStylingSampleComponent'],
                ngImports: ['IgxRadioModule']
            }),
            shortenComponentPathBy: "/data-entries/radio/"
        }));

        return configs;
    }
}
