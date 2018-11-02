import { Component } from "@angular/core";
import { CrosshairsDisplayMode } from "igniteui-angular-charts/ES5/CrosshairsDisplayMode";
import { ToolTipType } from "igniteui-angular-charts/ES5/ToolTipType";
import { FinancialDataService } from "../services/financial-data.service";

@Component({
    providers: [ FinancialDataService ],
    selector: "app-financial-chart-annotations",
    styleUrls: ["./financial-chart-annotations.component.scss"],
    templateUrl: "./financial-chart-annotations.component.html"
})
export class FinancialChartAnnotationsComponent {

    public financialData: any;
    public sampleOptions: SampleOptions = new SampleOptions();

    public calloutData: CalloutFinancialData;

    constructor(private dataService: FinancialDataService) {
        this.financialData = [ this.dataService.getAmzn(), this.dataService.getGoog() ];
        this.calloutData = new CalloutFinancialData(this.financialData);
    }
}

class CalloutFinancialData extends Array {

    constructor(financialData: any[]) {
        super();

        this.parseForCalloutData(financialData);
    }

    public parseForCalloutData = function(financialData: any[]) {
        for (const stock of financialData) {
            let idx: number = 0;
            for (const item of stock) {
                const diff = item.high - item.close;
                if (diff < 0.01) {
                    this.push({
                        content: stock.title + " closed high on " + item.time.toLocaleDateString(),
                        index: idx,
                        yValue: item.high });
                }
                idx++;
            }
        }
    };
}

class SampleOptions {
    public chartType: string = "Candle";

    public crosshairsDisplay: string = "Horizontal";
    public snapCrosshairs: boolean = true;
    public crosshairAnnotations: boolean = true;

    public finalValueAnnotations: boolean = false;

    public calloutsVisible: boolean = false;
}
