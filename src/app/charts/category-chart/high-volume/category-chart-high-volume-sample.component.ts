import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    NgZone,
    OnDestroy,
    ViewChild
} from "@angular/core";

import { AssigningCategoryStyleEventArgs } from "igniteui-angular-charts/ES5/igx-assigning-category-style-event-args";
import { IgxCategoryChartComponent } from "igniteui-angular-charts/ES5/igx-category-chart-component";
import { ChartSeriesEventArgs } from "igniteui-angular-charts/ES5/igx-chart-series-event-args";
import {
    IgxHorizontalAnchoredCategorySeriesComponent
} from "igniteui-angular-charts/ES5/igx-horizontal-anchored-category-series-component";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-category-chart-high-volume-sample",
    styleUrls: ["./category-chart-high-volume-sample.component.scss"],
    templateUrl: "./category-chart-high-volume-sample.component.html"
})
export class CategoryChartHighVolumeComponent implements AfterViewInit, OnDestroy {
    @Input()
    public scalingRatio: number = 1;

    @ViewChild("chart")
    public chart: IgxCategoryChartComponent;

    @ViewChild("loadTimeSpan")
    public loadTimeSpan: ElementRef;

    private currValue: number = 15;
    private currIndex: number = 0;

    private _maxPoints: number = 500000;

    private _refreshMilliseconds: number = 10;
    private _interval: number = -1;
    private _frames: number = 0;
    private _time: Date;
    private _assigningData: boolean = false;
    private _data: any[];

    constructor(private _zone: NgZone) {
        this._data = this.generateData();
    }

    public onGenerateDataClicked() {
        this._data = this.generateData();
    }

    public onAssignDataClicked() {
        this._time = new Date();
        this._assigningData = true;
        this.chart.dataSource = this._data;
    }

    public onMaxPointsChanged(val: string) {
        let num: number = parseInt(val, 10);
        if (isNaN(num)) {
            num = 5000;
        }
        if (num < 5000) {
            num = 5000;
        }
        if (num > 2000000) {
            num = 2000000;
        }
        this.maxPoints = num;
    }

    public get maxPointsText(): string {
        return this.toShortString(this._maxPoints);
    }

    public get maxPoints(): number {
        return this._maxPoints;
    }
    @Input()
    public set maxPoints(v: number) {
        this._maxPoints = v;
    }

    public ngOnDestroy(): void {
        if (this._interval >= 0) {
            this._zone.runOutsideAngular(() => {
            window.clearInterval(this._interval);
            });
            this._interval = -1;
        }
    }

    public ngAfterViewInit(): void {
        this.chart.seriesAdded.subscribe((args: { sender: any, args: ChartSeriesEventArgs }) => {
            const cat = args.args.series as IgxHorizontalAnchoredCategorySeriesComponent;
            cat.isCustomCategoryStyleAllowed = true;
            cat.assigningCategoryStyle.subscribe((event: { sender: any, args: AssigningCategoryStyleEventArgs }) => {
                if (this._assigningData) {
                    this._assigningData = false;

                    this._zone.runOutsideAngular(() => {
                        window.setTimeout(() => {
                            const elapsed = new Date().getTime() - this._time.getTime();
                            this.loadTimeSpan.nativeElement.textContent = "Load Time: " + elapsed.toFixed(2) + "ms";
                        }, 0);
                    });
                }
            });
        });

        this.chart.seriesRemoved.subscribe((event: { sender: any, args: ChartSeriesEventArgs }) => {
            const cat = event.args.series as IgxHorizontalAnchoredCategorySeriesComponent;
            cat.isCustomCategoryStyleAllowed = false;
            cat.assigningCategoryStyle.unsubscribe();
        });

        this.chart.dataSource = this._data;
    }

    private generateData(): any[] {
        const data: any[] = [];
        for (this.currIndex = 0; this.currIndex <= this.maxPoints; this.currIndex++) {
            this.currValue += Math.random() * 4.0 - 2.0;
            const label = this.toShortString(this.currIndex);
            data.push({ Label: label, Value: this.currValue });
        }
        return data;
    }

    private toShortString(largeValue: number): string {
        let roundValue: number;

        if (largeValue >= 1000000) {
            roundValue = Math.round(largeValue / 100000) / 10;
            return roundValue + "m";
        }
        if (largeValue >= 1000) {
            roundValue = Math.round(largeValue / 100) / 10;
            return roundValue + "k";
        }

        roundValue = Math.round(largeValue);
        return roundValue + "";
    }
}
