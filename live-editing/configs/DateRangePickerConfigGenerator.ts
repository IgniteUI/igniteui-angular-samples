import {
    IgxDateRangePickerModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxDateTimeEditorModule,
    IgxDatePickerModule,
    IgxSelectModule
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class DateRangePickerConfigGenerator implements IConfigGenerator {
    public additionalImports = {
        PipeWithoutTownFrom: '../../src/app/scheduling/daterangepicker/daterangepicker-flight-booking/daterangepicker-flight-booking'
    };
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(
            new Config({
                component: 'BasicDateRangePickerComponent',
                appConfig: BaseAppConfig,
                shortenComponentPathBy: "/scheduling/daterangepicker/"
            })
        );

        configs.push(
            new Config({
                component: 'DateRangePickerModeComponent',
                appConfig: BaseAppConfig,
                shortenComponentPathBy: "/scheduling/daterangepicker/"
            })
        );

        configs.push(
            new Config({
                component: 'DateRangePickerRangeButtonsComponent',
                appConfig: BaseAppConfig,
                shortenComponentPathBy: "/scheduling/daterangepicker/"
            })
        );

        configs.push(
            new Config({
                component: 'DateRangePickerStartEndComponent',
                appConfig: BaseAppConfig,
                shortenComponentPathBy: "/scheduling/daterangepicker/"
            })
        );

        configs.push(
            new Config({
                component: 'DateRangePickerValidationComponent',
                appConfig: BaseAppConfig,
                shortenComponentPathBy: "/scheduling/daterangepicker/"
            })
        );

        configs.push(
            new Config({
                component: 'StyledDateRangePickerComponent',
                appConfig: BaseAppConfig,
                shortenComponentPathBy: "/scheduling/daterangepicker/"
            })
        );

        configs.push(
            new Config({
                component: 'FlightBookingComponent',
                appConfig: BaseAppConfig,
                shortenComponentPathBy: "/scheduling/daterangepicker/"
            })
        );

        return configs;
    }
}
