import {IgxButtonModule,
IgxIconModule,
IgxInputGroupModule,
IgxTimePickerModule,
IgxToastModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class TimePickerConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // time picker sample 1
        configs.push(new Config({
            component: 'TimePickerSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        // time picker sample 4
        configs.push(new Config({
            component: 'TimePickerSample4Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        // time picker sample 5
        configs.push(new Config({
            component: 'TimePickerSample5Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        // time picker sample 6
        configs.push(new Config({
            component: 'TimePickerSample6Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        // time picker dropdown sample
        configs.push(new Config({
            component: 'TimepickerDropdownComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        // time picker styling sample
        configs.push(new Config({
            component: 'TimePickerStylingComponent',
            additionalFiles: ["/src/app/scheduling/timepicker/timepicker-styling/layout.scss"],
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
