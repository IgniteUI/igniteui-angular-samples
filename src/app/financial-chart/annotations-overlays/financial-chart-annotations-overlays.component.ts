import { Component } from '@angular/core';
import { FinancialDataService } from "../services/financial-data.service";
import { CrosshairsVisibility } from "igniteui-angular-charts/ES5/CrosshairsVisibility";
import { TooltipType } from "igniteui-angular-charts/ES5/TooltipType";

@Component({
    selector: 'app-financial-chart-annotations-overlays',
    providers: [ FinancialDataService ],
    templateUrl: './financial-chart-annotations-overlays.component.html',
    styleUrls: ['./financial-chart-annotations-overlays.component.scss']
})
export class FinancialChartAnnotationsOverlaysComponent {

    public CrosshairsVisibility = CrosshairsVisibility;
    public TooltipType = TooltipType;

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

    parseForCalloutData = function(financialData: any[]) {
        for (let stock of financialData) {
            let idx: number = 0;
            for (let item of stock) {
                let diff = item.high - item.close;
                if (diff < 0.01) {
                    this.push({
                        yValue: item.high,
                        index: idx,
                        content: stock.title + " closed high on " + item.time.toLocaleDateString() });
                }
                idx++;
            }
        }
    }
}

class SampleOptions {
    public tooltipType: string = "Default";
  
    public crosshairs: string = "Horizontal";
    public snapCrosshairs: boolean = true;
    public crosshairAnnotations: boolean = true;
  
    public finalValueAnnotations: boolean = false;
  
    public eventAnnotations: boolean = false;
}
