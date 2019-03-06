/* tslint:disable:object-literal-sort-keys */
// tslint:disable:max-line-length
import { IgxButtonModule, IgxCalendarModule, IgxSelectModule, IgxCardModule, IgxInputGroupModule } from "igniteui-angular";

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
                imports: [IgxCalendarModule, MonthpickerSample1Component, IgxButtonModule, IgxCardModule],
                ngDeclarations: [MonthpickerSample1Component],
                ngImports: [IgxCalendarModule, IgxButtonModule, IgxCardModule]
            }),
            shortenComponentPathBy: "/scheduling/monthpicker/"
        }));

        // month picker sample 2 with format options
        configs.push(new Config({
            component: MonthpickerSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCalendarModule, MonthpickerSample2Component, IgxCardModule],
                ngDeclarations: [MonthpickerSample2Component],
                ngImports: [IgxCalendarModule, IgxCardModule]
            }),
            shortenComponentPathBy: "/scheduling/monthpicker/"
        }));

        // localized month picker sample 3
        configs.push(new Config({
            component: MonthpickerSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxCalendarModule, MonthpickerSample3Component, IgxSelectModule, IgxCardModule, IgxInputGroupModule],
                ngDeclarations: [MonthpickerSample3Component],
                ngImports: [IgxCalendarModule, IgxSelectModule, IgxCardModule, IgxInputGroupModule]
            }),
            shortenComponentPathBy: "/scheduling/monthpicker/"
        }));

        return configs;
    }
}
