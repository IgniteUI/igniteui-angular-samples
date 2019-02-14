import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-category-chart-annotations",
    styleUrls: ["./category-chart-annotations.component.scss"],
    templateUrl: "./category-chart-annotations.component.html"
})
export class CategoryChartAnnotationsComponent {

    public categoryData: WeatherMeasure[];
    public sampleOptions: SampleOptions = new SampleOptions();
    public include: string[];

    constructor() {
        const year: number = new Date().getFullYear();
        this.categoryData = [
            new WeatherMeasure({ high: 74, low: 65, date: new Date(year, 0, 1) }),
            new WeatherMeasure({ high: 74, low: 71, date: new Date(year, 1, 1) }),
            new WeatherMeasure({ high: 76, low: 73, date: new Date(year, 2, 1) }),
            new WeatherMeasure({ high: 78, low: 74, date: new Date(year, 3, 1) }),
            new WeatherMeasure({ high: 83, low: 76, date: new Date(year, 4, 1) }),
            new WeatherMeasure({ high: 87, low: 82, date: new Date(year, 5, 1) }),
            new WeatherMeasure({ high: 94, low: 87, date: new Date(year, 6, 1) }),
            new WeatherMeasure({ high: 97, low: 92, date: new Date(year, 7, 1) }),
            new WeatherMeasure({ high: 93, low: 88, date: new Date(year, 8, 1) }),
            new WeatherMeasure({ high: 86, low: 83, date: new Date(year, 9, 1) }),
            new WeatherMeasure({ high: 81, low: 78, date: new Date(year, 10, 1) }),
            new WeatherMeasure({ high: 79, low: 71, date: new Date(year, 11, 1) })
        ];

        this.include = ["date", "high", "low"];

        const calloutParser: CalloutCategoryDataParser = new CalloutCategoryDataParser(this.categoryData);
        calloutParser.parseForCalloutData();
    }

    public formatDateLabel(item: any): string {
        return item.date.toLocaleDateString(undefined, {month: "long"});
    }
}

class WeatherMeasure {
    public date: Date;
    public high: number;
    public low: number;

    //  Callout Properties
    public index: number;
    public value: number;
    public content: string;

    public constructor(init?: Partial<WeatherMeasure>) {
        Object.assign(this, init);
    }
}

class CalloutCategoryDataParser extends Array {

    private categoryData: WeatherMeasure[];

    constructor(categoryData: WeatherMeasure[]) {
        super();

        this.categoryData = categoryData;
    }

    public parseForCalloutData = function() {
        let minItem: WeatherMeasure = null;
        let maxItem: WeatherMeasure = null;
        let minVal: number = Number.MAX_VALUE;
        let maxVal: number = Number.MIN_VALUE;
        let idx: number = 0;

        for (const item of this.categoryData) {
            item.index = idx;

            if (minVal > item.low) {
                minVal = item.low;
                minItem = item;
                minItem.index = idx + 0.5;
            }
            if (maxVal < item.high) {
                maxVal = item.high;
                maxItem = item;
            }

            item.value = item.high;

            switch (item.date.getMonth()) {
                case 11:
                case 0:
                case 1:
                    {
                        item.content = "WINTER";
                    }
                    break;
                case 2:
                case 3:
                case 4:
                    {
                        item.content = "SPRING";
                    }
                    break;
                case 5:
                case 6:
                case 7:
                    {
                        item.content = "SUMMER";
                    }
                    break;
                case 8:
                case 9:
                case 10:
                    {
                        item.content = "FALL";
                    }
                    break;
            }

            // if (item.temperatureHigh - item.averageTemperature > 10) {
            //     this.push({
            //         content: "Very high over average for " + item.date.toLocaleDateString(),
            //         index: idx,
            //         yValue: item.temperatureHigh });
            // }
            idx++;
        }

        minItem.content = "MIN";
        minItem.value = minItem.low;
        maxItem.content = "MAX";
        maxItem.value = maxItem.high;
    };
}

class SampleOptions {

    public chartType: string = "Column";
    public crosshairsDisplay: string = "Horizontal";
    public snapCrosshairs: boolean = false;
    public crosshairAnnotations: boolean = true;

    public finalValuesVisible: boolean = false;

    public calloutsVisible: boolean = false;
}
