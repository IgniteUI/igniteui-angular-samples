import { IgxButtonModule } from 'igniteui-angular/directives';
import { IgxButtonGroupModule } from 'igniteui-angular/button-group';
import { IgxCalendarModule } from 'igniteui-angular/calendar';
import { IgxCardModule } from 'igniteui-angular/card';
import { IgxDialogModule } from 'igniteui-angular/dialog';
import { IgxSelectModule } from 'igniteui-angular/select';
import { IgxSnackbarModule } from 'igniteui-angular/snackbar';
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
            additionalDependencies: ['igniteui-angular-i18n'],
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
            additionalFiles: ["/src/app/scheduling/calendar/calendar-styling-sample/layout.scss"],
            appConfig: BaseAppConfig,
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
