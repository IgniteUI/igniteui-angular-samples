import { Component } from "@angular/core";

@Component({
    selector: "app-category-chart-annotations",
    styleUrls: ["./category-chart-annotations.component.scss"],
    templateUrl: "./category-chart-annotations.component.html"
})
export class CategoryChartAnnotationsComponent {

    public categoryData: any;
    public calloutData: CalloutCategoryData;
    public sampleOptions: SampleOptions = new SampleOptions();

    constructor() {
        this.categoryData = [
            { date: new Date("1/4/2018"), temperatureHigh: 59, temperatureLow: 46, averageTemperature: 52.5 },
            { date: new Date("1/5/2018"), temperatureHigh: 74, temperatureLow: 43, averageTemperature: 52.5 },
            { date: new Date("1/6/2018"), temperatureHigh: 68, temperatureLow: 46, averageTemperature: 57 },
            { date: new Date("1/7/2018"), temperatureHigh: 78, temperatureLow: 57, averageTemperature: 67.5 },
            { date: new Date("1/8/2018"), temperatureHigh: 83, temperatureLow: 64, averageTemperature: 73.5 },
            { date: new Date("1/9/2018"), temperatureHigh: 87, temperatureLow: 67, averageTemperature: 77 },
            { date: new Date("1/10/2018"), temperatureHigh: 86, temperatureLow: 66, averageTemperature: 76 },
            { date: new Date("1/11/2018"), temperatureHigh: 87, temperatureLow: 65, averageTemperature: 76 },
            { date: new Date("1/12/2018"), temperatureHigh: 85, temperatureLow: 59, averageTemperature: 72 },
            { date: new Date("1/13/2018"), temperatureHigh: 76, temperatureLow: 54, averageTemperature: 65 },
            { date: new Date("1/14/2018"), temperatureHigh: 75, temperatureLow: 63, averageTemperature: 69 },
            { date: new Date("1/15/2018"), temperatureHigh: 83, temperatureLow: 63, averageTemperature: 78 },
            { date: new Date("1/16/2018"), temperatureHigh: 79, temperatureLow: 54, averageTemperature: 66.5 },
            { date: new Date("1/17/2018"), temperatureHigh: 82, temperatureLow: 66, averageTemperature: 74 }
        ];
        this.calloutData = new CalloutCategoryData(this.categoryData);
    }

    public formatDateLabel(item: any): string {
        return item.date.toLocaleDateString();
    }
}

class CalloutCategoryData extends Array {

    constructor(categoryData: any[]) {
        super();

        this.parseForCalloutData(categoryData);
    }

    public parseForCalloutData = function(categoryData: any[]) {
        let idx: number = 0;
        for (const item of categoryData) {
            if (item.temperatureHigh - item.averageTemperature > 10) {
                this.push({
                    content: "High average",
                    index: idx,
                    yValue: item.temperatureHigh });
            }
            idx++;
        }
    };
}

class SampleOptions {

    public chartType: string = "Column";
    public crosshairsDisplay: string = "Horizontal";
    public snapCrosshairs: boolean = true;
    public crosshairAnnotations: boolean = true;

    public finalValueAnnotations: boolean = false;

    public calloutsVisible: boolean = false;
}
