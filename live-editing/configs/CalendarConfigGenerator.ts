/* tslint:disable:object-literal-sort-keys */
// tslint:disable:max-line-length
import { IgxCalendarModule, IgxCardModule, IgxDialogModule, IgxSnackbarModule } from "igniteui-angular";
import { CalendarSample1Component } from "../../src/app/scheduling/calendar/calendar-sample-1/calendar-sample-1.component";
import { CalendarSample2Component } from "../../src/app/scheduling/calendar/calendar-sample-2/calendar-sample-2.component";
import { CalendarSample3Component } from "../../src/app/scheduling/calendar/calendar-sample-3/calendar-sample-3.component";
import { CalendarSample4Component } from "../../src/app/scheduling/calendar/calendar-sample-4/calendar-sample-4.component";
import { CalendarSample5Component } from "../../src/app/scheduling/calendar/calendar-sample-5/calendar-sample-5.component";
import { CalendarSample6Component } from "../../src/app/scheduling/calendar/calendar-sample-6/calendar-sample-6.component";
import { CalendarSample7Component } from "../../src/app/scheduling/calendar/calendar-sample-7/calendar-sample-7.component";
import { CalendarViewsComponent } from "../../src/app/scheduling/calendar/calendar-views/calendar-views.component";
import { CalendarComponent } from "../../src/app/scheduling/calendar/calendar.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";
// tslint:enable:max-line-length

export class CalendarConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: CalendarComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCardModule, IgxCalendarModule, CalendarComponent],
                ngDeclarations: [CalendarComponent],
                ngImports: [IgxCardModule, IgxCalendarModule]
            })
        }));

        configs.push(new Config({
            component: CalendarSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCalendarModule, CalendarSample1Component],
                ngDeclarations: [CalendarSample1Component],
                ngImports: [IgxCalendarModule]
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: CalendarSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCalendarModule, CalendarSample2Component],
                ngDeclarations: [CalendarSample2Component],
                ngImports: [IgxCalendarModule]
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: CalendarSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCalendarModule, IgxDialogModule, CalendarSample3Component],
                ngDeclarations: [CalendarSample3Component],
                ngImports: [IgxCalendarModule, IgxDialogModule]
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/date-parser.ts"],
            component: CalendarSample4Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCalendarModule, CalendarSample4Component],
                ngDeclarations: [CalendarSample4Component],
                ngImports: [IgxCalendarModule]
            })
        }));

        configs.push(new Config({
            component: CalendarSample5Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCalendarModule, IgxDialogModule, CalendarSample5Component],
                ngDeclarations: [CalendarSample5Component],
                ngImports: [IgxCalendarModule, IgxDialogModule]
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: CalendarSample6Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCalendarModule, CalendarSample6Component],
                ngDeclarations: [CalendarSample6Component],
                ngImports: [IgxCalendarModule]
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: CalendarSample7Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCalendarModule, IgxSnackbarModule, CalendarSample7Component],
                ngDeclarations: [CalendarSample7Component],
                ngImports: [IgxCalendarModule, IgxSnackbarModule]
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: CalendarViewsComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCalendarModule, CalendarViewsComponent, IgxCardModule],
                ngDeclarations: [CalendarViewsComponent],
                ngImports: [IgxCalendarModule, IgxCardModule]
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        return configs;
    }
}
