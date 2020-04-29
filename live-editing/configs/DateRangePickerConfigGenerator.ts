import { FlightBookingComponent } from './../../src/app/scheduling/rangedatepicker/flight-booking/flight-booking';
import {
    DateRangePickerValidationComponent
} from './../../src/app/scheduling/rangedatepicker/daterangepicker-validation/daterangepicker-validation';
import { IgxDateRangeModule as IgxDateRangePickerModule, IgxIconModule, IgxInputGroupModule } from "igniteui-angular";
import { BasicDateRangePickerComponent } from './../../src/app/scheduling/rangedatepicker/daterangepicker-basic/daterangepicker-basic';
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";
import {
    DateRangePickerStartEndComponent
} from "../../src/app/scheduling/rangedatepicker/daterangepicker-start-end copy/daterangepicker-start-end";
export class DateTimeEditorConfigGenerator implements IConfigGenerator {
    public generateConfigs(): Config[] {
        const configs = new Array<Config>();

        configs.push(
            new Config({
                component: BasicDateRangePickerComponent,
                appModuleConfig: new AppModuleConfig({
                    imports: [IgxDateRangePickerModule, BasicDateRangePickerComponent],
                    ngDeclarations: [BasicDateRangePickerComponent],
                    ngImports: [IgxDateRangePickerModule]
                }),
                shortenComponentPathBy: "/scheduling/daterangepicker"
            })
        );

        configs.push(
            new Config({
                component: DateRangePickerStartEndComponent,
                appModuleConfig: new AppModuleConfig({
                    imports: [IgxDateRangePickerModule, IgxIconModule, DateRangePickerStartEndComponent],
                    ngDeclarations: [DateRangePickerStartEndComponent],
                    ngImports: [IgxDateRangePickerModule, IgxIconModule]
                }),
                shortenComponentPathBy: "/scheduling/daterangepicker"
            })
        );

        configs.push(
            new Config({
                component: DateRangePickerValidationComponent,
                appModuleConfig: new AppModuleConfig({
                    imports: [IgxDateRangePickerModule, DateRangePickerValidationComponent],
                    ngDeclarations: [DateRangePickerValidationComponent],
                    ngImports: [IgxDateRangePickerModule]
                }),
                shortenComponentPathBy: "/scheduling/daterangepicker"
            })
        );

        configs.push(
            new Config({
                component: FlightBookingComponent,
                appModuleConfig: new AppModuleConfig({
                    imports: [IgxDateRangePickerModule, IgxInputGroupModule, IgxIconModule, FlightBookingComponent],
                    ngDeclarations: [FlightBookingComponent],
                    ngImports: [IgxDateRangePickerModule, IgxInputGroupModule, IgxIconModule]
                }),
                shortenComponentPathBy: "/scheduling/daterangepicker"
            })
        );

        return configs;
    }
}
