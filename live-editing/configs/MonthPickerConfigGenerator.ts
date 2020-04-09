/* tslint:disable:object-literal-sort-keys */
// tslint:disable:max-line-length
import {
    IgxButtonModule,
    IgxCalendarModule,
    IgxCardModule,
    IgxInputGroupModule,
    IgxSelectModule
} from "igniteui-angular";
import { MonthpickerSample1Component } from "../../src/app/scheduling/monthpicker/monthpicker-sample-1/monthpicker-sample-1.component";
import { MonthpickerSample3Component } from "../../src/app/scheduling/monthpicker/monthpicker-sample-3/monthpicker-sample-3.component";
import { MonthpickerStylingComponent } from "../../src/app/scheduling/monthpicker/monthpicker-styling/monthpicker-styling.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";
// tslint:enable:max-line-length

export class MonthPickerConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // default month picker sample 1
        configs.push(new Config({
            component: MonthpickerSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCalendarModule, MonthpickerSample1Component, IgxCardModule],
                ngDeclarations: [MonthpickerSample1Component],
                ngImports: [IgxCalendarModule, IgxCardModule]
            }),
            shortenComponentPathBy: "/scheduling/monthpicker/"
        }));

        // localized month picker sample 3
        configs.push(new Config({
            component: MonthpickerSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCalendarModule, MonthpickerSample3Component,
                    IgxSelectModule, IgxCardModule, IgxInputGroupModule],
                ngDeclarations: [MonthpickerSample3Component],
                ngImports: [IgxCalendarModule, IgxSelectModule, IgxCardModule, IgxInputGroupModule]
            }),
            shortenComponentPathBy: "/scheduling/monthpicker/"
        }));

        // styled month picker sample
        configs.push(new Config({
            component: MonthpickerStylingComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCalendarModule, MonthpickerStylingComponent],
                ngDeclarations: [MonthpickerStylingComponent],
                ngImports: [IgxCalendarModule]
            }),
            shortenComponentPathBy: "/scheduling/monthpicker/"
        }));

        return configs;
    }
}
