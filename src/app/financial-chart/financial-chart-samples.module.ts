import { CommonModule } from "@angular/common";
import { ModuleWithProviders, NgModule  } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IgxFinancialChartModule } from "igniteui-angular-charts/ES5/igx-financial-chart-module";
import { FinancialChartOverviewComponent } from "./overview/financial-chart-overview-sample.component";
import { FinancialChartPanesComponent } from "./panes/financial-chart-panes.component";
import { FinancialChartPerformanceComponent } from "./performance/financial-chart-performance.component";
import { FinancialDataService } from "./services/financial-data.service";
import { StockDataService } from "./services/stock-data.service";
import { FinancialChartTitlesComponent } from "./titles/financial-chart-titles.component";

@NgModule({
    declarations: [
        FinancialChartOverviewComponent,
        FinancialChartPerformanceComponent,
        FinancialChartTitlesComponent,
        FinancialChartPanesComponent
    ],
    exports: [
          FinancialChartOverviewComponent,
          FinancialChartPerformanceComponent,
          FinancialChartTitlesComponent,
          FinancialChartPanesComponent
    ],
    imports: [ CommonModule, FormsModule, IgxFinancialChartModule ]
})
export class FinancialChartSamplesModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: FinancialChartSamplesModule,
            providers: [ StockDataService, FinancialDataService ]
        };
    }
}
