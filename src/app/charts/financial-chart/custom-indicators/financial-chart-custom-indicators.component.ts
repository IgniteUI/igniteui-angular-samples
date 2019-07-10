import { ChangeDetectionStrategy, Component } from "@angular/core";
import {
    FinancialChartCustomIndicatorArgs
} from "igniteui-angular-charts/ES5/igx-financial-chart-custom-indicator-args";
import { FinancialEventArgs } from "igniteui-angular-charts/ES5/igx-financial-event-args";
import { FinancialDataService } from "../services/financial-data.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [FinancialDataService],
    selector: "app-financial-chart-custom-indicators",
    styleUrls: ["./financial-chart-custom-indicators.component.scss"],
    templateUrl: "./financial-chart-custom-indicators.component.html"
})
export class FinancialChartCustomIndicatorsComponent {
    public data: any;

    constructor(private dataService: FinancialDataService) {
        this.data = this.dataService.getGoog();
    }

    public applyCustomIndicators(event: { sender: any, args: FinancialChartCustomIndicatorArgs }) {
        if (event.args.index === 0) {
            const info: FinancialEventArgs = event.args.indicatorInfo;

            if (info != null) {
                const ds = info.dataSource;
                const open = ds.openColumn;
                for (let i = 0; i < ds.indicatorColumn.length; i++) {
                    ds.indicatorColumn[i] = open[i];
                }
            }
        } else {
            const info: FinancialEventArgs = event.args.indicatorInfo;

            if (info != null) {
                const ds = info.dataSource;
                const close = ds.closeColumn;
                for (let i = 0; i < ds.indicatorColumn.length; i++) {
                    let startIndex = i - 9;
                    if (startIndex < 0) {
                        startIndex = 0;
                    }
                    const count = (i - startIndex) + 1;

                    let sum = 0;
                    for (let j = startIndex; j <= i; j++) {
                        sum += close[j];
                    }
                    ds.indicatorColumn[i] = sum / count;
                }
            }
        }
    }
}
