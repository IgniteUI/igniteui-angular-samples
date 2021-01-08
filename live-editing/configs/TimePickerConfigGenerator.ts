import {IgxButtonModule,
IgxIconModule,
IgxInputGroupModule,
IgxTimePickerModule,
IgxToastModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class TimePickerConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // time picker sample 1
        configs.push(new Config({
            component: 'TimePickerSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxTimePickerModule', 'TimePickerSample1Component'],
                ngDeclarations: ['TimePickerSample1Component'],
                ngImports: ['IgxTimePickerModule']
            }),
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        // time picker sample 4
        configs.push(new Config({
            component: 'TimePickerSample4Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxTimePickerModule', 'IgxToastModule', 'TimePickerSample4Component'],
                ngDeclarations: ['TimePickerSample4Component'],
                ngImports: ['IgxTimePickerModule', 'IgxToastModule']
            }),
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        // time picker sample 5
        configs.push(new Config({
            component: 'TimePickerSample5Component',
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxTimePickerModule',
                    'IgxInputGroupModule',
                    'IgxIconModule',
                    'TimePickerSample5Component'
                ],
                ngDeclarations: ['TimePickerSample5Component'],
                ngImports: ['IgxTimePickerModule', 'IgxInputGroupModule', 'IgxIconModule']
            }),
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        // time picker sample 6
        configs.push(new Config({
            component: 'TimePickerSample6Component',
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxTimePickerModule',
                    'IgxInputGroupModule',
                    'IgxIconModule',
                    'IgxButtonModule',
                    'TimePickerSample6Component'
                ],
                ngDeclarations: ['TimePickerSample6Component'],
                ngImports: [
                    'IgxTimePickerModule',
                    'IgxInputGroupModule',
                    'IgxIconModule',
                    'IgxButtonModule'
                ]
            }),
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        // time picker dropdown sample
        configs.push(new Config({
            component: 'TimepickerDropdownComponent',
            appModuleConfig: new AppModuleConfig({
                imports: [
                    'IgxTimePickerModule',
                    'IgxInputGroupModule',
                    'IgxIconModule',
                    'TimepickerDropdownComponent'
                ],
                ngDeclarations: ['TimepickerDropdownComponent'],
                ngImports: ['IgxTimePickerModule', 'IgxInputGroupModule', 'IgxIconModule']
            }),
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        // time picker styling sample
        configs.push(new Config({
            component: 'TimePickerStylingComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxTimePickerModule', 'TimePickerStylingComponent'],
                ngDeclarations: ['TimePickerStylingComponent'],
                ngImports: ['IgxTimePickerModule']
            }),
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        return configs;
    }
}
