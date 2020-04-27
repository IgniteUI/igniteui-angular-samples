/* tslint:disable:object-literal-sort-keys */
import {
    IgxButtonModule,
    IgxIconModule,
    IgxInputGroupModule,
    IgxTimePickerModule,
    IgxToastModule
} from "igniteui-angular";
import {
    TimepickerDropdownComponent
} from "../../src/app/scheduling/timepicker/timepicker-dropdown/timepicker-dropdown.component";
import {
    TimePickerSample1Component
} from "../../src/app/scheduling/timepicker/timepicker-sample-1/timepicker-sample-1.component";
import {
    TimePickerSample4Component
} from "../../src/app/scheduling/timepicker/timepicker-sample-4/timepicker-sample-4.component";
import {
    TimePickerSample5Component
} from "../../src/app/scheduling/timepicker/timepicker-sample-5/timepicker-sample-5.component";
import {
    TimePickerSample6Component
} from "../../src/app/scheduling/timepicker/timepicker-sample-6/timepicker-sample-6.component";
import {
    TimePickerStylingComponent
} from "../../src/app/scheduling/timepicker/timepicker-styling/timepicker-styling.component";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class TimePickerConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        // time picker sample 1
        configs.push(new Config({
            component: TimePickerSample1Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTimePickerModule, TimePickerSample1Component],
                ngDeclarations: [TimePickerSample1Component],
                ngImports: [IgxTimePickerModule]
            }),
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        // time picker sample 4
        configs.push(new Config({
            component: TimePickerSample4Component,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTimePickerModule, IgxToastModule, TimePickerSample4Component],
                ngDeclarations: [TimePickerSample4Component],
                ngImports: [IgxTimePickerModule, IgxToastModule]
            }),
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        // time picker sample 5
        configs.push(new Config({
            component: TimePickerSample5Component,
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxTimePickerModule,
                    IgxInputGroupModule,
                    IgxIconModule,
                    TimePickerSample5Component
                ],
                ngDeclarations: [TimePickerSample5Component],
                ngImports: [IgxTimePickerModule, IgxInputGroupModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        // time picker sample 6
        configs.push(new Config({
            component: TimePickerSample6Component,
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxTimePickerModule,
                    IgxInputGroupModule,
                    IgxIconModule,
                    IgxButtonModule,
                    TimePickerSample6Component
                ],
                ngDeclarations: [TimePickerSample6Component],
                ngImports: [
                    IgxTimePickerModule,
                    IgxInputGroupModule,
                    IgxIconModule,
                    IgxButtonModule
                ]
            }),
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        // time picker dropdown sample
        configs.push(new Config({
            component: TimepickerDropdownComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [
                    IgxTimePickerModule,
                    IgxInputGroupModule,
                    IgxIconModule,
                    TimepickerDropdownComponent
                ],
                ngDeclarations: [TimepickerDropdownComponent],
                ngImports: [IgxTimePickerModule, IgxInputGroupModule, IgxIconModule]
            }),
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        // time picker styling sample
        configs.push(new Config({
            component: TimePickerStylingComponent,
            appModuleConfig: new AppModuleConfig({
                imports: [IgxTimePickerModule, TimePickerStylingComponent],
                ngDeclarations: [TimePickerStylingComponent],
                ngImports: [IgxTimePickerModule]
            }),
            shortenComponentPathBy: "/scheduling/timepicker/"
        }));

        return configs;
    }
}
