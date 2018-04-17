import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule  } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxFinancialChartModule } from "igniteui-angular-charts/ES5/igx-financial-chart-module";
import { FinancialChartCustomTooltipsComponent } from "./custom-tooltips/financial-chart-custom-tooltips.component";
import { FinancialChartMultipleDataComponent } from "./multiple-data/financial-chart-multiple-data.component";
import { FinancialChartOverviewComponent } from "./overview/financial-chart-overview-sample.component";
import { FinancialDataService } from "./services/financial-data.service";

@NgModule({
    declarations: [
        FinancialChartOverviewComponent, FinancialChartMultipleDataComponent, FinancialChartCustomTooltipsComponent
    ],
    exports: [ FinancialChartOverviewComponent ],
    imports: [ CommonModule, FormsModule, IgxFinancialChartModule ]
})
export class FinancialChartSamplesModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: FinancialChartSamplesModule,
            providers: [ FinancialDataService ]
        };
    }
}
