/* tslint:disable:object-literal-sort-keys */
// tslint:disable:max-line-length
import { IgxButtonModule, IgxCalendarModule, IgxCardModule, IgxDialogModule, IgxPrefixModule, IgxSelectModule, IgxSnackbarModule } from "igniteui-angular";
import { CalendarDaysViewComponent } from "../../src/app/scheduling/calendar/calendar-days-view/calendar-days-view.component";
import { CalendarMonthsViewComponent } from "../../src/app/scheduling/calendar/calendar-months-view/calendar-months-view.component";
import { CalendarSample1Component } from "../../src/app/scheduling/calendar/calendar-sample-1/calendar-sample-1.component";
import { CalendarSample2Component } from "../../src/app/scheduling/calendar/calendar-sample-2/calendar-sample-2.component";
import { CalendarSample3Component } from "../../src/app/scheduling/calendar/calendar-sample-3/calendar-sample-3.component";
import { CalendarSample4Component } from "../../src/app/scheduling/calendar/calendar-sample-4/calendar-sample-4.component";
import { CalendarSample5Component } from "../../src/app/scheduling/calendar/calendar-sample-5/calendar-sample-5.component";
import { CalendarSample6Component } from "../../src/app/scheduling/calendar/calendar-sample-6/calendar-sample-6.component";
import { CalendarSample7Component } from "../../src/app/scheduling/calendar/calendar-sample-7/calendar-sample-7.component";
import { CalendarSample8Component } from "../../src/app/scheduling/calendar/calendar-sample-8/calendar-sample-8.component";
import { CalendarStylingSample } from "../../src/app/scheduling/calendar/calendar-styling-sample/calendar-styling-sample.component";
import { CalendarYearsViewComponent } from "../../src/app/scheduling/calendar/calendar-years-view/calendar-years-view.component";
import { CalendarMultiViewComponent } from "../../src/app/scheduling/calendar/multiview/multiview.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";
// tslint:enable:max-line-length

export class CalendarConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

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
                imports: [IgxCalendarModule, IgxPrefixModule, IgxSelectModule, CalendarSample2Component],
                ngDeclarations: [CalendarSample2Component],
                ngImports: [IgxCalendarModule, IgxPrefixModule, IgxSelectModule]
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
                imports: [IgxButtonModule, IgxCalendarModule, IgxDialogModule, CalendarSample7Component],
                ngDeclarations: [CalendarSample7Component],
                ngImports: [IgxButtonModule, IgxCalendarModule, IgxDialogModule]
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: CalendarSample8Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCalendarModule, IgxSnackbarModule, CalendarSample8Component],
                ngDeclarations: [CalendarSample8Component],
                ngImports: [IgxCalendarModule, IgxSnackbarModule]
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: CalendarStylingSample,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCalendarModule, CalendarStylingSample],
                ngDeclarations: [CalendarStylingSample],
                ngImports: [IgxCalendarModule]
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: CalendarDaysViewComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCalendarModule, CalendarDaysViewComponent, IgxCardModule],
                ngDeclarations: [CalendarDaysViewComponent],
                ngImports: [IgxCalendarModule, IgxCardModule]
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: CalendarMonthsViewComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCalendarModule, CalendarMonthsViewComponent, IgxCardModule],
                ngDeclarations: [CalendarMonthsViewComponent],
                ngImports: [IgxCalendarModule, IgxCardModule]
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: CalendarYearsViewComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCalendarModule, CalendarYearsViewComponent, IgxCardModule],
                ngDeclarations: [CalendarYearsViewComponent],
                ngImports: [IgxCalendarModule, IgxCardModule]
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: CalendarMultiViewComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxButtonModule, IgxCalendarModule, IgxDialogModule, CalendarMultiViewComponent],
                ngDeclarations: [CalendarMultiViewComponent],
                ngImports: [IgxButtonModule, IgxCalendarModule, IgxDialogModule]
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        return configs;
    }
}
