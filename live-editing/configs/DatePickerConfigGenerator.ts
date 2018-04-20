/* tslint:disable:object-literal-sort-keys */
import { IgxDatePickerModule } from "igniteui-angular/main";
import { DatepickerSample1Component } from "../../src/app/datepicker/datepicker-sample-1/datepicker-sample-1.component";
import { DatepickerSample2Component } from "../../src/app/datepicker/datepicker-sample-2/datepicker-sample-2.component";
import { DatepickerSample3Component } from "../../src/app/datepicker/datepicker-sample-3/datepicker-sample-3.component";
import { DatepickerSample4Component } from "../../src/app/datepicker/datepicker-sample-4/datepicker-sample-4.component";
import { DatepickerSample5Component } from "../../src/app/datepicker/datepicker-sample-5/datepicker-sample-5.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class DatePickerConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // date picker sample 1
        configs.push(new Config({
            component: DatepickerSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDatePickerModule, DatepickerSample1Component],
                ngDeclarations: [DatepickerSample1Component],
                ngImports: [IgxDatePickerModule]
            }),
            shortenComponentPathBy: "/datepicker/"
        }));

        // date picker sample 2
        configs.push(new Config({
            component: DatepickerSample2Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDatePickerModule, DatepickerSample2Component],
                ngDeclarations: [DatepickerSample2Component],
                ngImports: [IgxDatePickerModule]
            }),
            shortenComponentPathBy: "/datepicker/"
        }));

        // date picker sample 3
        configs.push(new Config({
            component: DatepickerSample3Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDatePickerModule, DatepickerSample3Component],
                ngDeclarations: [DatepickerSample3Component],
                ngImports: [IgxDatePickerModule]
            }),
            shortenComponentPathBy: "/datepicker/"
        }));

        // date picker sample 4
        configs.push(new Config({
            component: DatepickerSample4Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDatePickerModule, DatepickerSample4Component],
                ngDeclarations: [DatepickerSample4Component],
                ngImports: [IgxDatePickerModule]
            }),
            shortenComponentPathBy: "/datepicker/"
        }));

        // date picker sample 5
        configs.push(new Config({
            component: DatepickerSample5Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxDatePickerModule, DatepickerSample5Component],
                ngDeclarations: [DatepickerSample5Component],
                ngImports: [IgxDatePickerModule]
            }),
            shortenComponentPathBy: "/datepicker/"
        }));

        return configs;
    }
}
