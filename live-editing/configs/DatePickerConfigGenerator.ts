import {ReactiveFormsModule} from '@angular/forms';
import {IgxAutocompleteModule,
IgxButtonModule,
IgxCalendarModule,
IgxDatePickerModule,
IgxTimePickerModule,
IgxDropDownModule,
IgxIconModule,
IgxInputGroupModule,
IgxSnackbarModule,
IgxToggleModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class DatePickerConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // date picker sample 1
        configs.push(new Config({
            component: 'DatepickerSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDatePickerModule', 'DatepickerSample1Component'],
                ngDeclarations: ['DatepickerSample1Component'],
                ngImports: ['IgxDatePickerModule']
            }),
            shortenComponentPathBy: "/scheduling/datepicker/"
        }));

        // date picker sample 2
        configs.push(new Config({
            component: 'DatepickerSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDatePickerModule', 'DatepickerSample2Component'],
                ngDeclarations: ['DatepickerSample2Component'],
                ngImports: ['IgxDatePickerModule']
            }),
            shortenComponentPathBy: "/scheduling/datepicker/"
        }));

        // date picker sample 3
        configs.push(new Config({
            component: 'DatepickerSample3Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDatePickerModule', 'DatepickerSample3Component'],
                ngDeclarations: ['DatepickerSample3Component'],
                ngImports: ['IgxDatePickerModule']
            }),
            shortenComponentPathBy: "/scheduling/datepicker/"
        }));

        // date picker sample 4
        configs.push(new Config({
            component: 'DatepickerSample4Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDatePickerModule', 'DatepickerSample4Component'],
                ngDeclarations: ['DatepickerSample4Component'],
                ngImports: ['IgxDatePickerModule']
            }),
            shortenComponentPathBy: "/scheduling/datepicker/"
        }));

        // date picker sample 5
        configs.push(new Config({
            additionalFiles: ["/src/app/date-parser.ts"],
            component: 'DatepickerSample5Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDatePickerModule', 'DatepickerSample5Component'],
                ngDeclarations: ['DatepickerSample5Component'],
                ngImports: ['IgxDatePickerModule']
            })
        }));

        // date picker sample 6
        configs.push(new Config({
            component: 'DatepickerSample6Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDatePickerModule', 'DatepickerSample6Component', 'IgxIconModule', 'IgxInputGroupModule'],
                ngDeclarations: ['DatepickerSample6Component'],
                ngImports: ['IgxDatePickerModule', 'IgxIconModule', 'IgxInputGroupModule']
            })
        }));

        // date picker sample `datepicker-dropdown`
        configs.push(new Config({
            component: 'DatepickerDropdownComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDatePickerModule', 'DatepickerDropdownComponent', 'IgxIconModule', 'IgxInputGroupModule'],
                ngDeclarations: ['DatepickerDropdownComponent'],
                ngImports: ['IgxDatePickerModule', 'IgxIconModule', 'IgxInputGroupModule']
            })
        }));

        configs.push(new Config({
            component: 'DatepickerSample7Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDatePickerModule', 'DatepickerSample7Component', 'IgxIconModule',
                    'IgxInputGroupModule', 'IgxSnackbarModule'],
                ngDeclarations: ['DatepickerSample7Component'],
                ngImports: ['IgxDatePickerModule', 'IgxIconModule', 'IgxInputGroupModule', 'IgxSnackbarModule']
            })
        }));

        configs.push(new Config({
            component: 'DatepickerSample8Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxDatePickerModule', 'DatepickerSample8Component', 'IgxIconModule',
                    'IgxInputGroupModule'],
                ngDeclarations: ['DatepickerSample8Component'],
                ngImports: ['IgxButtonModule', 'IgxDatePickerModule', 'IgxIconModule', 'IgxInputGroupModule']
            })
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
            appModuleConfig: new AppModuleConfig({
                imports: ['DateTimePickerTDFSampleComponent', 'IgxDatePickerModule', 'IgxTimePickerModule'],
                ngDeclarations: ['DateTimePickerTDFSampleComponent'],
                ngImports: ['IgxDatePickerModule', 'IgxTimePickerModule']
            })
        }));

        // date & time picker - reactive form
        configs.push(new Config({
            component: 'DateTimePickerRFSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['DateTimePickerRFSampleComponent', 'IgxDatePickerModule', 'IgxTimePickerModule', 'ReactiveFormsModule'],
                ngDeclarations: ['DateTimePickerRFSampleComponent'],
                ngImports: ['IgxDatePickerModule', 'IgxTimePickerModule', 'ReactiveFormsModule']
            })
        }));

        return configs;
    }
}
