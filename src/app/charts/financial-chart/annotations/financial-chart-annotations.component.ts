import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CrosshairsDisplayMode } from "igniteui-angular-charts/ES5/CrosshairsDisplayMode";
import { ToolTipType } from "igniteui-angular-charts/ES5/ToolTipType";
import { FinancialDataService } from "../services/financial-data.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
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
        this.financialData = [ this.dataService.getTsla(), this.dataService.getTgt() ];
        this.calloutData = new CalloutFinancialData(this.financialData);
    }
}

class CalloutData {
    public content: string;
    public index: number;
    public value: number;

    public constructor(init?: Partial<CalloutData>) {
        Object.assign(this, init);
    }
}

class CalloutFinancialData extends Array {

    constructor(financialData: any[]) {
        super();

        this.parseForCalloutData(financialData);
    }

    public parseForCalloutData = function(financialData: any[]) {
        for (const stock of financialData) {
            const intervalSplit = Math.floor(Math.random() * (300 - 280)) + 280;
            const intervalDiv = Math.floor(Math.random() * (400 - 360)) + 360;
            const priceLowest: CalloutData = new CalloutData({value: Number.MAX_VALUE, content: "MIN PRICE"});
            const priceHighest: CalloutData = new CalloutData({value: Number.MIN_VALUE, content: "MAX PRICE"});
            let idx: number = 0;

            for (const item of stock) {
                const callout = new CalloutData({index: idx });

                if (priceLowest.value > item.close) {
                    priceLowest.value = item.close;
                    priceLowest.index = idx;
                }
                // finding item with highest price
                if (priceHighest.value < item.close) {
                    priceHighest.value = item.close;
                    priceHighest.index = idx;
                }

                // creating SPLIT/DIVIDENT events at specific intervals
                if (idx % intervalSplit === 5) {
                    callout.value = item.close;
                    callout.content = "SPLIT";
                    this.push(callout);
                } else if (idx % intervalDiv === 5) {
                    callout.value = item.close;
                    callout.content = "DIV";
                    this.push(callout);
                }

                idx++;
            }

            this.push(priceLowest);
            this.push(priceHighest);
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
