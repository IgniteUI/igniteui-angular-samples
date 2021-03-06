import {IgxAutocompleteModule,
IgxButtonModule,
IgxCalendarModule,
IgxDatePickerModule,
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
            component: 'DatepickerStylingSample',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxDatePickerModule', 'DatepickerStylingSample', 'IgxIconModule'],
                ngDeclarations: ['DatepickerStylingSample'],
                ngImports: ['IgxDatePickerModule', 'IgxIconModule']
            })
        }));

        return configs;
    }
}
