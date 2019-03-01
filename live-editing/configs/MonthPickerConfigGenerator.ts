/* tslint:disable:object-literal-sort-keys */
// tslint:disable:max-line-length
import { IgxButtonModule, IgxCalendarModule, IgxSelectModule } from "igniteui-angular";

import { MonthpickerSample1Component } from "../../src/app/scheduling/monthpicker/monthpicker-sample-1/monthpicker-sample-1.component";
import { MonthpickerSample2Component } from "../../src/app/scheduling/monthpicker/monthpicker-sample-2/monthpicker-sample-2.component";
import { MonthpickerSample3Component } from "../../src/app/scheduling/monthpicker/monthpicker-sample-3/monthpicker-sample-3.component";
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
                imports: [IgxCalendarModule, MonthpickerSample1Component, IgxButtonModule],
                ngDeclarations: [MonthpickerSample1Component],
                ngImports: [IgxCalendarModule, IgxButtonModule]
            }),
            shortenComponentPathBy: "/scheduling/monthpicker/"
        }));

        // month picker sample 2 with format options
        configs.push(new Config({
            component: MonthpickerSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCalendarModule, MonthpickerSample2Component],
                ngDeclarations: [MonthpickerSample2Component],
                ngImports: [IgxCalendarModule]
            }),
            shortenComponentPathBy: "/scheduling/monthpicker/"
        }));

        // localized month picker sample 3
        configs.push(new Config({
            component: MonthpickerSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCalendarModule, MonthpickerSample3Component, IgxSelectModule],
                ngDeclarations: [MonthpickerSample3Component],
                ngImports: [IgxCalendarModule, IgxSelectModule]
            }),
            shortenComponentPathBy: "/scheduling/monthpicker/"
        }));

        return configs;
    }
}
