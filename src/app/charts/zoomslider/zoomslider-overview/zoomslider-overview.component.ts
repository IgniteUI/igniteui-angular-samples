// tslint:disable:max-line-length
import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";

import { IgxBubbleSeriesComponent } from "igniteui-angular-charts/ES5/igx-bubble-series-component";
import { IgxDataChartComponent } from "igniteui-angular-charts/ES5/igx-data-chart-component";
import { IgxNumericXAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-x-axis-component";
import { IgxNumericYAxisComponent } from "igniteui-angular-charts/ES5/igx-numeric-y-axis-component";
import { IgxSizeScaleComponent } from "igniteui-angular-charts/ES5/igx-size-scale-component";
import { IgxZoomSliderComponent } from "igniteui-angular-charts/ES5/igx-zoom-slider-component";
import { MarkerType } from "igniteui-angular-charts/ES5/MarkerType";
import { IgRect } from "igniteui-angular-core/ES5/IgRect";
import { RectChangedEventArgs } from "igniteui-angular-core/ES5/igx-rect-changed-event-args";

import { SampleScatterStats } from "../../data-chart/SampleScatterStats";

@Component({
    providers: [ SampleScatterStats ],
    selector: "app-zoomslider-overview",
    styleUrls: ["./zoomslider-overview.component.scss"],
    templateUrl: "./zoomslider-overview.component.html"
})
export class ZoomSliderOverviewComponent implements AfterViewInit {

    public charts: IgxDataChartComponent[] = [];

    @ViewChild("mainChart", { static: true })
    public mainChart: IgxDataChartComponent = null;

    @ViewChild("zoomChart", { static: true })
    public zoomChart: IgxDataChartComponent = null;

    @ViewChild("zoomSlider", { static: true })
    public zoomSlider: IgxZoomSliderComponent = null;

    @ViewChild("seriesTooltip", { static: true })
    public seriesTooltip: TemplateRef<any>;

    @ViewChild("container", { static: true })
    public container: HTMLDivElement;

    public isSynchronizingZoom: boolean = false;
    public lastRect: IgRect = { left: -1, top: -1, width: -1, height: -1};

    public regions: any[];
    public countriesAll: any[];
    public countriesByRegion: any;

    constructor(private dataService: SampleScatterStats) {

        this.regions = [];
        this.countriesAll = SampleScatterStats.getCountries();
        this.countriesByRegion = {};
        for (const country of this.countriesAll) {
            const name = country.region;

            if (!this.countriesByRegion[name]) {
                this.countriesByRegion[name] = [];
                this.regions.push(name);
                console.log("region " + name);
            }
            this.countriesByRegion[name].push(country);
        }
    }

    public ngAfterViewInit(): void {

        if (this.mainChart !== undefined || this.container !== undefined) {
            console.log("ngAfterViewInit mainChart");

            this.createSeries(this.mainChart);

            this.mainChart.actualWindowRectChanged.subscribe((e: RectChangedEventArgs) =>
                this.onActualWindowRectChanged(this.mainChart, e)
            );
            this.charts.push(this.mainChart);
        }

        if (this.zoomChart !== undefined) {
            console.log("ngAfterViewInit zoomChart");
            this.createSeries(this.zoomChart);
        }

        if (this.zoomSlider !== undefined) {
            console.log("ngAfterViewInit zoomSlider");
            this.zoomSlider.windowRectChanged.subscribe((e: RectChangedEventArgs) =>
                this.onZoomSliderWindowChanged(this.zoomSlider, e)
            );
            this.zoomSlider.resolvingAxisValue.subscribe((e: RectChangedEventArgs) =>
                this.onZoomSliderResolveAxisValue(this.zoomSlider, e)
            );
        }

        if (this.mainChart !== undefined ||
            this.container !== undefined ||
            this.zoomChart !== undefined ||
            this.zoomSlider !== undefined) {

            this.mainChart.gridAreaRectChanged.subscribe((e: RectChangedEventArgs) =>
                this.onGridAreaRectChanged(this.mainChart, e)
            );
        }
    }

    public onActualWindowRectChanged(chart: IgxDataChartComponent, args: RectChangedEventArgs) {

        if (!this.isSynchronizingZoom) {
            this.syncZooms(chart);
        }
    }

    public onZoomSliderWindowChanged(slider: IgxZoomSliderComponent, args: RectChangedEventArgs) {
        if (!this.isSynchronizingZoom) {
            this.syncZooms(slider);
        }
    }

    public syncZooms(sender: any) {
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
                // console.log("chart " + this.getRect(this.mainChart.actualWindowRect));
                // console.log("zoom   " + this.getRect(zoomWindow));

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

    public onZoomSliderResolveAxisValue(slider: IgxZoomSliderComponent, args: any) {

        console.log("onZoomSliderResolveAxisValue");
        const index = Math.round(args.position * (this.countriesAll.length - 1));
        const item = this.countriesAll[index];
        if (item) {
            args.value = SampleScatterStats.abbreviate(item.population);
        }
    }

    public onGridAreaRectChanged(chart: IgxDataChartComponent, e: any) {
        const newRect = e.args.newRect;
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
                const inset = this.zoomSlider.endInset;
                this.zoomSlider.endInset = 0;
                this.charts.map(c => c.rightMargin += (inset * -1.0));
            }
            if (this.zoomSlider.startInset < 0) {
                const inset = this.zoomSlider.startInset;
                this.zoomSlider.startInset = 0;
                this.charts.map(c => c.leftMargin += (inset * -1.0));
            }

            this.zoomChart.leftMargin = insetLeft;
            this.zoomChart.rightMargin = insetRight;
            this.zoomChart.bottomMargin = this.zoomSlider.barExtent;
        }
    }

    public updateChartZoom(chart: IgxDataChartComponent, zoom: IgRect) {

        const yAxis = chart.actualAxes.filter(a => a.isNumeric)[0] as IgxNumericYAxisComponent;

        let indexEnd = Math.ceil((this.countriesAll.length - 1) * (zoom.left + zoom.width));
        let indexStart = Math.floor((this.countriesAll.length - 1) * zoom.left);

        let min = Number.MAX_VALUE;
        let max = Number.MIN_VALUE;

        if (indexStart < 0) {
            indexStart = 0;
        }

        indexEnd = Math.min(indexEnd, this.countriesAll.length - 1);
        for (let i = indexStart; i <= indexEnd; i++) {
            min = Math.min(min, this.countriesAll[i].gdpTotal);
            max = Math.max(max, this.countriesAll[i].gdpTotal);
        }

        // console.log("data min " + min + " max " + max);
        // console.log("axis min " + yAxis.actualMinimumValue + " max " + yAxis.actualMaximumValue);
        const yMin = (min - yAxis.actualMinimumValue) / (yAxis.actualMaximumValue - yAxis.actualMinimumValue);
        const yMax = (max - yAxis.actualMinimumValue) / (yAxis.actualMaximumValue - yAxis.actualMinimumValue);

        const newZoom = {
            left: zoom.left,
            width: zoom.width,
            top: (1.0 - yMax),
            height: (yMax - yMin)
        };
        // console.log("updateChartZoom " + this.getRect(newZoom));
        chart.windowRect = newZoom;
    }

    public createSeries(chart: IgxDataChartComponent) {
        const sizeScale1 = new IgxSizeScaleComponent();
        sizeScale1.minimumValue = 15;
        sizeScale1.maximumValue = 40;
        const sizeScale2 = new IgxSizeScaleComponent();
        sizeScale2.minimumValue = 5;
        sizeScale2.maximumValue = 15;

        const xAxis = chart.actualAxes.filter(a => a.isNumeric)[0] as IgxNumericXAxisComponent;
        const yAxis = chart.actualAxes.filter(a => a.isNumeric)[1] as IgxNumericYAxisComponent;

        const series1 = new IgxBubbleSeriesComponent();
        series1.title = "High Income Country";
        series1.dataSource = SampleScatterStats.getCountriesWithHighIncome();
        series1.showDefaultTooltip = false;
        series1.xMemberPath = "population";
        series1.yMemberPath = "gdpTotal";
        series1.radiusMemberPath = "gdpPerCapita";
        series1.radiusScale = sizeScale1;
        series1.markerType = MarkerType.Circle;
        series1.xAxis = xAxis;
        series1.yAxis = yAxis;
        series1.tooltipTemplate = this.seriesTooltip;

        const series2 = new IgxBubbleSeriesComponent();
        series2.title = "Low Income Country";
        series2.dataSource = SampleScatterStats.getCountriesWithLowIncome();
        series2.showDefaultTooltip = false;
        series2.xMemberPath = "population";
        series2.yMemberPath = "gdpTotal";
        series2.radiusMemberPath = "gdpPerCapita";
        series2.radiusScale = sizeScale2;
        series2.markerType = MarkerType.Circle;
        series2.xAxis = xAxis;
        series2.yAxis = yAxis;
        series2.tooltipTemplate = this.seriesTooltip;

        chart.series.add(series1);
        chart.series.add(series2);

        // chart.markerOutlines = [ "#7446B9", "#9FB328", "#2E9CA6", "#525251", "#dcbf3f", "#F96232"];
        // chart.brushes = [ "#7446B9", "#9FB328", "#2E9CA6", "#525251", "#dcbf3f", "#F96232"];

    }

    public getRect(rect: any) {
        const str = "T " + rect.top.toFixed(1) + " L " + rect.left.toFixed(1)
        + " W " + rect.width.toFixed(1)
        + " H " + rect.height.toFixed(1);
        return str;
    }
}
