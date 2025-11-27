import { IgxDatePickerModule, IgxDateRangePickerModule } from 'igniteui-angular/date-picker';
import { IgxIconModule } from 'igniteui-angular/icon';
import { IgxInputGroupModule } from 'igniteui-angular/input-group';
import { IgxDateTimeEditorModule } from 'igniteui-angular/core';
import { IgxSelectModule } from 'igniteui-angular/select';
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
