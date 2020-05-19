import { IgxDateRangePickerModule, IgxIconModule, IgxInputGroupModule, IgxSelectModule } from "igniteui-angular";
import { BasicDateRangePickerComponent
} from "../../src/app/scheduling/daterangepicker/daterangepicker-basic/daterangepicker-basic";
import { FlightBookingComponent, PipeWithoutTownFrom
} from "../../src/app/scheduling/daterangepicker/daterangepicker-flight-booking/daterangepicker-flight-booking";
import { DateRangePickerModeComponent
} from "../../src/app/scheduling/daterangepicker/daterangepicker-mode/daterangepicker-mode";
import { DateRangePickerStartEndComponent
} from "../../src/app/scheduling/daterangepicker/daterangepicker-start-end/daterangepicker-start-end";
import { StyledDateRangePickerComponent
} from "../../src/app/scheduling/daterangepicker/daterangepicker-styling/daterangepicker-styling";
import { DateRangePickerValidationComponent
} from "../../src/app/scheduling/daterangepicker/daterangepicker-validation/daterangepicker-validation";
import { AppModuleConfig } from "./core/AppModuleConfig";
import { Config } from "./core/Config";
import { IConfigGenerator } from "./core/IConfigGenerator";

export class DateRangePickerConfigGenerator implements IConfigGenerator {
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
                shortenComponentPathBy: "/scheduling/daterangepicker/"
            })
        );

        configs.push(
            new Config({
                component: DateRangePickerModeComponent,
                appModuleConfig: new AppModuleConfig({
                    imports: [IgxDateRangePickerModule, DateRangePickerModeComponent],
                    ngDeclarations: [DateRangePickerModeComponent],
                    ngImports: [IgxDateRangePickerModule]
                }),
                shortenComponentPathBy: "/scheduling/daterangepicker/"
            })
        );

        configs.push(
            new Config({
                component: DateRangePickerStartEndComponent,
                appModuleConfig: new AppModuleConfig({
                    imports: [IgxDateRangePickerModule, DateRangePickerStartEndComponent,
                        IgxInputGroupModule, IgxIconModule ],
                    ngDeclarations: [DateRangePickerStartEndComponent],
                    ngImports: [IgxDateRangePickerModule, IgxInputGroupModule, IgxIconModule]
                }),
                shortenComponentPathBy: "/scheduling/daterangepicker/"
            })
        );

        configs.push(
            new Config({
                component: DateRangePickerValidationComponent,
                appModuleConfig: new AppModuleConfig({
                    imports: [IgxDateRangePickerModule, DateRangePickerValidationComponent,
                        IgxInputGroupModule, IgxIconModule],
                    ngDeclarations: [DateRangePickerValidationComponent],
                    ngImports: [IgxDateRangePickerModule, IgxInputGroupModule, IgxIconModule]
                }),
                shortenComponentPathBy: "/scheduling/daterangepicker/"
            })
        );

        configs.push(
            new Config({
                component: StyledDateRangePickerComponent,
                appModuleConfig: new AppModuleConfig({
                    imports: [IgxDateRangePickerModule, StyledDateRangePickerComponent,
                        IgxInputGroupModule, IgxIconModule],
                    ngDeclarations: [StyledDateRangePickerComponent],
                    ngImports: [IgxDateRangePickerModule, IgxInputGroupModule, IgxIconModule]
                }),
                shortenComponentPathBy: "/scheduling/daterangepicker/"
            })
        );

        configs.push(
            new Config({
                component: FlightBookingComponent,
                appModuleConfig: new AppModuleConfig({
                    imports: [IgxDateRangePickerModule, IgxSelectModule,
                        IgxInputGroupModule, IgxIconModule, FlightBookingComponent, PipeWithoutTownFrom],
                    ngDeclarations: [FlightBookingComponent, PipeWithoutTownFrom],
                    ngImports: [IgxDateRangePickerModule, IgxSelectModule, IgxInputGroupModule, IgxIconModule]
                }),
                shortenComponentPathBy: "/scheduling/daterangepicker/"
            })
        );

        return configs;
    }
}
