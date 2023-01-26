import {IgxButtonModule,
IgxCalendarModule,
IgxCardModule,
IgxDialogModule,
IgxPrefixModule,
IgxSelectModule,
IgxSnackbarModule} from '@infragistics/igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class CalendarConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(new Config({
            component: 'CalendarSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCalendarModule', 'CalendarSample1Component'],
                ngDeclarations: ['CalendarSample1Component'],
                ngImports: ['IgxCalendarModule']
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: 'CalendarSample2Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCalendarModule', 'IgxPrefixModule', 'IgxSelectModule', 'CalendarSample2Component'],
                ngDeclarations: ['CalendarSample2Component'],
                ngImports: ['IgxCalendarModule', 'IgxPrefixModule', 'IgxSelectModule']
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: 'CalendarRtlSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCalendarModule', 'IgxPrefixModule', 'IgxSelectModule', 'CalendarRtlSampleComponent'],
                ngDeclarations: ['CalendarRtlSampleComponent'],
                ngImports: ['IgxCalendarModule', 'IgxPrefixModule', 'IgxSelectModule']
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: 'CalendarSample3Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCalendarModule', 'IgxDialogModule', 'CalendarSample3Component'],
                ngDeclarations: ['CalendarSample3Component'],
                ngImports: ['IgxCalendarModule', 'IgxDialogModule']
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            additionalFiles: ["/src/app/date-parser.ts"],
            component: 'CalendarSample4Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCalendarModule', 'CalendarSample4Component'],
                ngDeclarations: ['CalendarSample4Component'],
                ngImports: ['IgxCalendarModule']
            })
        }));

        configs.push(new Config({
            component: 'CalendarSample5Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCalendarModule', 'IgxDialogModule', 'CalendarSample5Component'],
                ngDeclarations: ['CalendarSample5Component'],
                ngImports: ['IgxCalendarModule', 'IgxDialogModule']
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: 'CalendarSample6Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCalendarModule', 'CalendarSample6Component'],
                ngDeclarations: ['CalendarSample6Component'],
                ngImports: ['IgxCalendarModule']
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: 'CalendarSample7Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxCalendarModule', 'IgxDialogModule', 'CalendarSample7Component'],
                ngDeclarations: ['CalendarSample7Component'],
                ngImports: ['IgxButtonModule', 'IgxCalendarModule', 'IgxDialogModule']
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: 'CalendarSample8Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCalendarModule', 'IgxSnackbarModule', 'CalendarSample8Component'],
                ngDeclarations: ['CalendarSample8Component'],
                ngImports: ['IgxCalendarModule', 'IgxSnackbarModule']
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: 'CalendarStylingSampleComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCalendarModule', 'CalendarStylingSampleComponent'],
                ngDeclarations: ['CalendarStylingSampleComponent'],
                ngImports: ['IgxCalendarModule']
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: 'CalendarDaysViewComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCalendarModule', 'CalendarDaysViewComponent', 'IgxCardModule'],
                ngDeclarations: ['CalendarDaysViewComponent'],
                ngImports: ['IgxCalendarModule', 'IgxCardModule']
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: 'CalendarMonthsViewComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCalendarModule', 'CalendarMonthsViewComponent', 'IgxCardModule'],
                ngDeclarations: ['CalendarMonthsViewComponent'],
                ngImports: ['IgxCalendarModule', 'IgxCardModule']
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: 'CalendarYearsViewComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCalendarModule', 'CalendarYearsViewComponent', 'IgxCardModule'],
                ngDeclarations: ['CalendarYearsViewComponent'],
                ngImports: ['IgxCalendarModule', 'IgxCardModule']
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        configs.push(new Config({
            component: 'CalendarMultiViewComponent',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxButtonModule', 'IgxCalendarModule', 'IgxDialogModule', 'CalendarMultiViewComponent'],
                ngDeclarations: ['CalendarMultiViewComponent'],
                ngImports: ['IgxButtonModule', 'IgxCalendarModule', 'IgxDialogModule']
            }),
            shortenComponentPathBy: "/scheduling/calendar/"
        }));

        return configs;
    }
}
