import { ChangeDetectionStrategy, Component } from "@angular/core";
import { StockDataService } from "../services/stock-data.service";

import { IgxPercentChangeYAxisComponent
} from "igniteui-angular-charts/ES5/igx-percent-change-y-axis-component";
import { IgxPercentChangeYAxisDynamicModule
} from "igniteui-angular-charts/ES5/igx-percent-change-y-axis-dynamic-module";
import { IgxPercentChangeYAxisModule
} from "igniteui-angular-charts/ES5/igx-percent-change-y-axis-module";

import { IgxNumericYAxisComponent
} from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";
import { IgxNumericYAxisDynamicModule
} from "igniteui-angular-charts/ES5/igx-numeric-y-axis-dynamic-module";
import { IgxNumericYAxisModule
} from "igniteui-angular-charts/ES5/igx-numeric-y-axis-module";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ StockDataService ],
    selector: "app-financial-chart-axis-types",
    styleUrls: ["./financial-chart-axis-types.component.scss"],
    templateUrl: "./financial-chart-axis-types.component.html"
})
export class FinancialChartAxisTypesComponent {

    public xAxisMode: string = "Ordinal";
    public yAxisMode: string = "Numeric";
    public data: any;

    constructor(private dataService: StockDataService) {
       this.data = [
             this.dataService.GetStockMSFT(),
             this.dataService.GetStockTGT()
        ];
    }
}
