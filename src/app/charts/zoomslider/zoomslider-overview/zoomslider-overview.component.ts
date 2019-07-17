// tslint:disable:max-line-length
import { AfterViewInit, Component, ViewChild } from "@angular/core";
import { StockDataService } from "../../financial-chart/services/stock-data.service";

import { IgxCategoryXAxisComponent } from "igniteui-angular-charts/ES5/igx-category-x-axis-component";
// import { ChartCursorEventArgs } from "igniteui-angular-charts/ES5/igx-chart-cursor-event-args";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
// import { IgxFinancialPriceSeriesComponent } from "igniteui-angular-charts/ES5/igx-financial-price-series-component";
// import { IgxOrdinalTimeXAxisComponent } from "igniteui-angular-charts/ES5/igx-ordinal-time-x-axis-component";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";
import { IgxZoomSliderComponent } from "igniteui-angular-charts/ES5/igx-zoom-slider-component";
import { ZoomSliderResolvingAxisValueEventArgs } from "igniteui-angular-charts/ES5/igx-zoom-slider-resolving-axis-value-event-args";
import { IgRect } from "igniteui-angular-core/ES5/IgRect";
import { RectChangedEventArgs } from "igniteui-angular-core/ES5/igx-rect-changed-event-args";

@Component({
    providers: [ StockDataService ],
    selector: "app-zoomslider-overviewn",
    styleUrls: ["./zoomslider-overview.component.scss"],
    templateUrl: "./zoomslider-overview.component.html"
})
export class ZoomSliderOverviewComponent implements AfterViewInit {

    public data: any;

    @ViewChild("mainChart", { static: true })
    public mainChart: IgxDataChartComponent = null;
    @ViewChild("zoomChart", { static: true })
    public zoomChart: IgxDataChartComponent = null;
    @ViewChild("zoomSlider", { static: true })
    public zoomSlider: IgxZoomSliderComponent = null;

    public charts: IgxDataChartComponent[] = [];
    public container: HTMLDivElement;
    public isSynchronizingZoom: boolean = false;
    public dateFormat = new Intl.DateTimeFormat("en");
    public lastRect: IgRect = { left: -1, top: -1, width: -1, height: -1};

    constructor(private dataService: StockDataService) {

        this.data = this.dataService.GetStockTSLA();
    }

    public ngAfterViewInit(): void {

        if (this.mainChart !== undefined) {
            console.log("mainChart");
            this.mainChart.actualWindowRectChanged.subscribe((e: RectChangedEventArgs) =>
                this.onActualWindowRectChanged(this.mainChart, e)
            );
            this.mainChart.gridAreaRectChanged.subscribe((e: RectChangedEventArgs) =>
                this.onGridAreaRectChanged(this.mainChart, e)
            );
            this.charts.push(this.mainChart);
        }

        if (this.zoomChart !== undefined) {
            console.log("zoomChart");
            this.charts.push(this.zoomChart);
        }

        if (this.zoomSlider !== undefined) {
            console.log("zoomSlider");
            this.zoomSlider.windowRectChanged.subscribe((e: RectChangedEventArgs) =>
                this.onZoomSliderWindowChanged(this.zoomSlider, e)
            );
        }
    }
    public onActualWindowRectChanged(chart: IgxDataChartComponent, args: RectChangedEventArgs) {

        console.log("mainChart onActualWindowRectChanged");
        if (!this.isSynchronizingZoom) {
            this.syncZooms(chart);
        }
    }

    public onZoomSliderWindowChanged(slider: IgxZoomSliderComponent, args: RectChangedEventArgs) {
        if (!this.isSynchronizingZoom) {
            this.syncZooms(slider);
        }
    }

    private syncZooms(sender: any) {
        window.setTimeout(() => {
            try {
                this.isSynchronizingZoom = true;

                const zoomWindow = this.zoomSlider.windowRect;
                const datanChart = sender as IgxDataChartComponent;
                let chartWindow: any;
                if (sender === this.zoomSlider) {
                    chartWindow = this.mainChart.actualWindowRect;
                } else {
                    chartWindow = datanChart.actualWindowRect;
                }
                // const chartWindow = sender === this.zoomSlider ? this.mainChart.actualWindowRect : datanChart.actualWindowRect;

                if (sender === this.zoomSlider) {
                    this.charts.map((chart) => {
                        this.updateChartZoom(chart, {
                            top: chartWindow.top,
                            left: zoomWindow.left,
                            width: zoomWindow.width,
                            height: chartWindow.height });
                    });
                } else {
                    this.zoomSlider.windowRect = {
                        top: zoomWindow.top,
                        left: chartWindow.left,
                        width: chartWindow.width,
                        height: zoomWindow.height };
                    this.charts.map((chart) => {
                        this.updateChartZoom(chart, {
                            top: zoomWindow.top,
                            left: chartWindow.left,
                            width: chartWindow.width,
                            height: zoomWindow.height });
                    });
                }
            } finally {
                this.isSynchronizingZoom = false;
            }
        }, 0);
    }

    private onResolvingAxisValue(slider: IgxZoomSliderComponent, args: ZoomSliderResolvingAxisValueEventArgs) {
        const ind = Math.round(args.position * (this.data.length - 1));
        const val = this.data[ind];
        if (val) {
            args.value = this.dateFormat.format(val.time);
        }
    }

    private onGridAreaRectChanged(chart: IgxDataChartComponent, args: RectChangedEventArgs) {
        const newRect = args.newRect;
        if (!this.container) {
            return;
        }

        if (newRect.left !== this.lastRect.left ||
            newRect.top !== this.lastRect.top ||
            newRect.width !== this.lastRect.width ||
            newRect.height !== this.lastRect.height) {

            let rightMargin = this.mainChart.rightMargin;
            if (isNaN(rightMargin)) {
                rightMargin = this.mainChart.autoMarginWidth;
            }
            const width = newRect.left + newRect.width + rightMargin;

            const right = newRect.left + newRect.width;
            const insetLeft = newRect.left;
            const insetRight = width - right;
            this.lastRect = newRect;
            this.zoomSlider.startInset = insetLeft - this.zoomSlider.trackStartInset;
            this.zoomSlider.endInset = insetRight - this.zoomSlider.trackEndInset;

            if (this.zoomSlider.endInset < 0) {
                console.log("updating right margin: " + this.zoomSlider.endInset);
                const inset = this.zoomSlider.endInset;
                this.zoomSlider.endInset = 0;
                this.charts.map(c => c.rightMargin += (inset * -1.0));
            }
            if (this.zoomSlider.startInset < 0) {
                console.log("updating left margin");
                const inset = this.zoomSlider.startInset;
                this.zoomSlider.startInset = 0;
                this.charts.map(c => c.leftMargin += (inset * -1.0));
            }

            this.zoomChart.leftMargin = insetLeft;
            this.zoomChart.rightMargin = insetRight;
            this.zoomChart.bottomMargin = this.zoomSlider.barExtent;
        }
    }

    private updateChartZoom(chart: IgxDataChartComponent, zoom: IgRect) {
        const xAxis = chart.actualAxes.filter(a => a.isCategory)[0] as IgxCategoryXAxisComponent;
        const yAxis = chart.actualAxes.filter(a => a.isNumeric)[0] as IgxNumericYAxisComponent;
        const indexEnd = Math.ceil((xAxis.dataSource.length - 1) * (zoom.left + zoom.width));
        let indexStart = Math.floor((xAxis.dataSource.length - 1) * zoom.left);

        let min = Number.MAX_VALUE;
        let max = Number.MIN_VALUE;

        const data = xAxis.dataSource;
        if (indexStart < 0) {
            indexStart = 0;
        }

        for (let i = indexStart; i <= Math.min(indexEnd, xAxis.dataSource.length - 1); i++) {
            min = Math.min(min, data[i].open, data[i].high, data[i].low, data[i].close);
            max = Math.max(max, data[i].open, data[i].high, data[i].low, data[i].close);
        }

        const zMin = (min - yAxis.actualMinimumValue) / (yAxis.actualMaximumValue - yAxis.actualMinimumValue);
        const zMax = (max - yAxis.actualMinimumValue) / (yAxis.actualMaximumValue - yAxis.actualMinimumValue);

        const newZoom = {
            left: zoom.left,
            width: zoom.width,
            top: (1.0 - zMax),
            height: (zMax - zMin)
        };
        chart.windowRect = newZoom;
    }
}
