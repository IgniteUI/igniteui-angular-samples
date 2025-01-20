import { ReactiveFormsModule } from '@angular/forms';
import {
    IgxAutocompleteModule,
    IgxButtonModule,
    IgxCalendarModule,
    IgxDatePickerModule,
    IgxTimePickerModule,
    IgxDropDownModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxSnackbarModule,
    IgxToggleModule
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class DatePickerConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // date picker sample 1
        configs.push(new Config({
            component: 'DatepickerSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/datepicker/"
        }));

        // date picker sample 2
        configs.push(new Config({
            component: 'DatepickerSample2Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/datepicker/"
        }));

        // date picker sample 3
        configs.push(new Config({
            component: 'DatepickerSample3Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/datepicker/"
        }));

        // date picker sample 4
        configs.push(new Config({
            component: 'DatepickerSample4Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/datepicker/"
        }));

        // date picker sample 5
        configs.push(new Config({
            additionalFiles: ["/src/app/date-parser.ts"],
            component: 'DatepickerSample5Component',
            appConfig: BaseAppConfig
        }));

        // date picker sample 6
        configs.push(new Config({
            component: 'DatepickerSample6Component',
            appConfig: BaseAppConfig
        }));

        // date picker sample `datepicker-dropdown`
        configs.push(new Config({
            component: 'DatepickerDropdownComponent',
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'DatepickerSample7Component',
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'DatepickerSample8Component',
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'DatepickerStylingSampleComponent',
            additionalFiles: ["/src/app/scheduling/datepicker/datepicker-styling-sample/layout.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDatePickerModule', 'DatepickerStylingSampleComponent', 'IgxIconModule'],
                ngDeclarations: ['DatepickerStylingSampleComponent'],
                ngImports: ['IgxDatePickerModule', 'IgxIconModule']
            })
        }));

        // date & time picker - template driven form
        configs.push(new Config({
            component: 'DateTimePickerTDFSampleComponent',
            appConfig: BaseAppConfig
        }));

        // date & time picker - reactive form
        configs.push(new Config({
            component: 'DateTimePickerRFSampleComponent',
            appConfig: BaseAppConfig
        }));

        return configs;
    }
}
