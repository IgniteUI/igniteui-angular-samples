import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FinancialDataService } from "../services/financial-data.service";
import { FinancialChartCustomIndicatorArgs } from 'igniteui-angular-charts/ES5/igx-financial-chart-custom-indicator-args';
import { FinancialEventArgs } from 'igniteui-angular-charts/ES5/igx-financial-event-args';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [ FinancialDataService ],
    selector: "app-financial-chart-custom-indicators",
    styleUrls: ["./financial-chart-custom-indicators.component.scss"],
    templateUrl: "./financial-chart-custom-indicators.component.html"
})
export class FinancialChartCustomIndicatorsComponent {
    public data: any;
    
    public applyCustomIndicators(event: { sender: any, args: FinancialChartCustomIndicatorArgs }) {
        if (event.args.index == 0) {
            let info: FinancialEventArgs = event.args.indicatorInfo;
            let ds = info.dataSource;
            let open = ds.openColumn;
            for (let i = 0; i < ds.indicatorColumn.length; i++) {
            ds.indicatorColumn[i] = open[i];
            }
        } else {
            let info: FinancialEventArgs = event.args.indicatorInfo;
            let ds = info.dataSource;
            let close = ds.closeColumn;
            for (let i = 0; i < ds.indicatorColumn.length; i++) {
                let startIndex = i - 9;
                if (startIndex < 0) {
                    startIndex = 0;
                }
                let count = (i - startIndex) + 1;

                let sum = 0;
                for (let j = startIndex; j <= i; j++) {
                    sum += close[j];
                }
                ds.indicatorColumn[i] = sum / count;
            }
        }   
    }

    constructor(private dataService: FinancialDataService) {
        this.data = this.dataService.getGoog();
    }
}
