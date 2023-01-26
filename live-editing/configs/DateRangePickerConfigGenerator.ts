import {IgxDateRangePickerModule,
IgxIconModule,
IgxInputGroupModule,
IgxSelectModule} from '@infragistics/igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class DateRangePickerConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        PipeWithoutTownFrom: '../../src/app/scheduling/daterangepicker/daterangepicker-flight-booking/daterangepicker-flight-booking'
};
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(
            new Config({
                component: 'BasicDateRangePickerComponent',
                appModuleConfig: new AppModuleConfig({
                    imports: ['IgxDateRangePickerModule', 'IgxInputGroupModule', 'BasicDateRangePickerComponent'],
                    ngDeclarations: ['BasicDateRangePickerComponent'],
                    ngImports: ['IgxDateRangePickerModule', 'IgxInputGroupModule']
                }),
                shortenComponentPathBy: "/scheduling/daterangepicker/"
            })
        );

        configs.push(
            new Config({
                component: 'DateRangePickerModeComponent',
                appModuleConfig: new AppModuleConfig({
                    imports: ['IgxDateRangePickerModule', 'DateRangePickerModeComponent'],
                    ngDeclarations: ['DateRangePickerModeComponent'],
                    ngImports: ['IgxDateRangePickerModule']
                }),
                shortenComponentPathBy: "/scheduling/daterangepicker/"
            })
        );

        configs.push(
            new Config({
                component: 'DateRangePickerRangeButtonsComponent',
                appModuleConfig: new AppModuleConfig({
                    imports: ['IgxDateRangePickerModule', 'DateRangePickerRangeButtonsComponent'],
                    ngDeclarations: ['DateRangePickerRangeButtonsComponent'],
                    ngImports: ['IgxDateRangePickerModule']
                }),
                shortenComponentPathBy: "/scheduling/daterangepicker/"
            })
        );

        configs.push(
            new Config({
                component: 'DateRangePickerStartEndComponent',
                appModuleConfig: new AppModuleConfig({
                    imports: ['IgxDateRangePickerModule', 'DateRangePickerStartEndComponent',
                        'IgxInputGroupModule', 'IgxIconModule' ],
                    ngDeclarations: ['DateRangePickerStartEndComponent'],
                    ngImports: ['IgxDateRangePickerModule', 'IgxInputGroupModule', 'IgxIconModule']
                }),
                shortenComponentPathBy: "/scheduling/daterangepicker/"
            })
        );

        configs.push(
            new Config({
                component: 'DateRangePickerValidationComponent',
                appModuleConfig: new AppModuleConfig({
                    imports: ['IgxDateRangePickerModule', 'DateRangePickerValidationComponent',
                        'IgxInputGroupModule', 'IgxIconModule'],
                    ngDeclarations: ['DateRangePickerValidationComponent'],
                    ngImports: ['IgxDateRangePickerModule', 'IgxInputGroupModule', 'IgxIconModule']
                }),
                shortenComponentPathBy: "/scheduling/daterangepicker/"
            })
        );

        configs.push(
            new Config({
                component: 'StyledDateRangePickerComponent',
                appModuleConfig: new AppModuleConfig({
                    imports: ['IgxDateRangePickerModule', 'StyledDateRangePickerComponent',
                        'IgxInputGroupModule', 'IgxIconModule'],
                    ngDeclarations: ['StyledDateRangePickerComponent'],
                    ngImports: ['IgxDateRangePickerModule', 'IgxInputGroupModule', 'IgxIconModule']
                }),
                shortenComponentPathBy: "/scheduling/daterangepicker/"
            })
        );

        configs.push(
            new Config({
                component: 'FlightBookingComponent',
                appModuleConfig: new AppModuleConfig({
                    imports: ['IgxDateRangePickerModule', 'IgxSelectModule',
                        'IgxInputGroupModule', 'IgxIconModule', 'FlightBookingComponent', 'PipeWithoutTownFrom'],
                    ngDeclarations: ['FlightBookingComponent', 'PipeWithoutTownFrom'],
                    ngImports: ['IgxDateRangePickerModule', 'IgxSelectModule', 'IgxInputGroupModule', 'IgxIconModule']
                }),
                shortenComponentPathBy: "/scheduling/daterangepicker/"
            })
        );

        return configs;
    }
}
