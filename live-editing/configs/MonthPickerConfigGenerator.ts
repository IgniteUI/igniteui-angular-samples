import {IgxButtonModule,
IgxCalendarModule,
IgxCardModule,
IgxInputGroupModule,
IgxSelectModule} from 'igniteui-angular';
import {AppModuleConfig, Config, IConfigGenerator} from 'igniteui-live-editing'
export class MonthPickerConfigGenerator implements IConfigGenerator {


    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // default month picker sample 1
        configs.push(new Config({
            component: 'MonthpickerSample1Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCalendarModule', 'MonthpickerSample1Component', 'IgxCardModule'],
                ngDeclarations: ['MonthpickerSample1Component'],
                ngImports: ['IgxCalendarModule', 'IgxCardModule']
            }),
            shortenComponentPathBy: "/scheduling/monthpicker/"
        }));

        // localized month picker sample 3
        configs.push(new Config({
            component: 'MonthpickerSample3Component',
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCalendarModule', 'MonthpickerSample3Component',
                    'IgxSelectModule', 'IgxCardModule', 'IgxInputGroupModule'],
                ngDeclarations: ['MonthpickerSample3Component'],
                ngImports: ['IgxCalendarModule', 'IgxSelectModule', 'IgxCardModule', 'IgxInputGroupModule']
            }),
            shortenComponentPathBy: "/scheduling/monthpicker/"
        }));

        // styled month picker sample
        configs.push(new Config({
            component: 'MonthpickerStylingComponent',
            additionalFiles: ["/src/app/scheduling/monthpicker/monthpicker-styling/layout.scss"],
            appModuleConfig: new AppModuleConfig({
                imports: ['IgxCalendarModule', 'MonthpickerStylingComponent'],
                ngDeclarations: ['MonthpickerStylingComponent'],
                ngImports: ['IgxCalendarModule']
            }),
            shortenComponentPathBy: "/scheduling/monthpicker/"
        }));

        return configs;
    }
}
