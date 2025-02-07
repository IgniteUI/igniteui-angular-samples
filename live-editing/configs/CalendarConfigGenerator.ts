import {
    IgxButtonModule,
    IgxButtonGroupModule,
    IgxCalendarModule,
    IgxCardModule,
    IgxDialogModule,
    IgxSelectModule,
    IgxSnackbarModule
} from 'igniteui-angular';
import { AppModuleConfig, Config, IConfigGenerator } from 'igniteui-live-editing'
import { BaseAppConfig } from './BaseConfig';
export class CalendarConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'CalendarSample1Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: 'CalendarSample2Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: 'CalendarRtlSampleComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: 'CalendarSample3Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/date-parser.ts"],
            component: 'CalendarSample4Component',
            appConfig: BaseAppConfig
        }));

        configs.push(new Config({
            component: 'CalendarSample5Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: 'CalendarSample6Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: 'CalendarSample7Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: 'CalendarSample8Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: 'CalendarSample9Component',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: 'CalendarStylingSampleComponent',
            appConfig: BaseAppConfig,
            additionalFiles: ["/src/app/scheduling/calendar/calendar-styling-sample/layout.scss"],
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: 'CalendarDaysViewComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: 'CalendarMonthsViewComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: 'CalendarYearsViewComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: 'CalendarMultiViewComponent',
            appConfig: BaseAppConfig,
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        return configs;
    }
}
