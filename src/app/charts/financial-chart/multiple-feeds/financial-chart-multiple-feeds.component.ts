import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    NgZone,
    OnDestroy,
    ViewChild
} from "@angular/core";
import { IgxFinancialChartComponent } from "igniteui-angular-charts/ES5/igx-financial-chart-component";
import { IgxLegendComponent } from "igniteui-angular-charts/ES5/igx-legend-component";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-financial-chart-multiple-feeds",
    styleUrls: ["./financial-chart-multiple-feeds.component.scss"],
    templateUrl: "./financial-chart-multiple-feeds.component.html"
})

export class FinancialChartMultipleFeedsComponent implements AfterViewInit, OnDestroy {

    @ViewChild("chart", {static: true})
    public chart: IgxFinancialChartComponent;
    @ViewChild("legend", {static: true})
    public legend: IgxLegendComponent;
    @ViewChild("legend", {static: true})
    public feedToggleButton: IgxLegendComponent;

    @ViewChild("fpsSpan", {static: true})
    public fpsSpan: ElementRef;
    @ViewChild("feedStatus", {static: true})
    public feedStatus: ElementRef;
    @ViewChild("legendBadgeTemplate", {static: true})
    public legendBadgeTemplate: ElementRef;

    public dataFeeds: any[];
    private currIndex: number = 0;
    private startDate: Date;

    private maxPoints: number = 4 * 365;

    private refreshInterval: number = 20;
    private frameCounter: number = 0;
    private frameUpdate: Date;

    private feedInterval: number = -1;
    private feedUpdating: boolean = true;

    constructor(private _zone: NgZone) {
        const startYear = new Date().getFullYear() - 4;
        this.startDate = new Date(startYear, 1, 1, 16, 30, 0);
        this.dataFeeds = [
            this.GenerateData(this.startDate, 150, "Microsoft (MSFT)"),
            this.GenerateData(this.startDate, 200, "Facebook (FB)"),
            this.GenerateData(this.startDate, 400, "Tesla (TSLA)"),
            this.GenerateData(this.startDate, 350, "Netflix (NFLX)"),
            this.GenerateData(this.startDate, 250, "Nvidia (NVDA)")
        ];
    }

    public AddDays(date: Date, days: number): Date {
        return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    }

    public GenerateItem(date: Date, price: number): any {
        const t = date;
        const o = price;
        const h = o + (Math.random() * 5);
        const l = o - (Math.random() * 5);
        const c = l + (Math.random() * (h - l));

        return { date: t, open: o, high: h, low: l, close: c};
    }

    public GenerateData(startDate: Date, startPrice: number, stockName: string): any[] {
        const stockData: any[] = [];
        let stockTime = this.AddDays(startDate, 0);
        let stockPrice: number = startPrice;

        for (this.currIndex = 0; this.currIndex < this.maxPoints; this.currIndex++) {

            const item = this.GenerateItem(stockTime, stockPrice);
            stockTime = this.AddDays(stockTime, 1);
            stockPrice += Math.random() * 4.1 - 2.0;
            stockData.push(item);
        }
        // setting data intent for Series Title
        (stockData as any).__dataIntents = {
            close: ["SeriesTitle/" + stockName]
        };
        return stockData;
    }

    public AppendDataItemTo(data: any[]): void {
        const lastItem = data[data.length - 1];
        const stockPrice = lastItem.close + Math.random() * 4.1 - 2.0;
        const stockDate = this.AddDays(lastItem.date, 1);
        const newItem = this.GenerateItem(stockDate, stockPrice);
        const oldVal = data[0];

        data.push(newItem);
        this.chart.notifyInsertItem(data, data.length - 1, newItem);
        data.shift();
        this.chart.notifyRemoveItem(data, 0, oldVal);
    }

    public OnDataFeedTick(): void {
        if (!this.feedUpdating) {
            return;
        }
        // appending new data items to each data feed
        for (const data of this.dataFeeds) {
            this.AppendDataItemTo(data);
        }

        // this.frameCounter++;
        // const currTime = new Date();
        // const elapsed = (currTime.getTime() - this.frameUpdate.getTime());
        // if (elapsed > 5000) {
        //     const fps = this.frameCounter / (elapsed / 1000.0);
        //     this.frameUpdate = currTime;
        //     this.frameCounter = 0;
        //     this.fpsSpan.nativeElement.textContent = "FPS: " + Math.round(fps).toString();
        // }
    }

    public StopDataFeed(): void {
        if (this.feedInterval >= 0) {
            this._zone.runOutsideAngular(() => {
                window.clearInterval(this.feedInterval);
            });
            this.feedInterval = -1;
            this.feedStatus.nativeElement.textContent = "Turn On Live Data";
        }
    }

    public StartDataFeed(): void {
        this._zone.runOutsideAngular(() => {
            this.feedStatus.nativeElement.textContent = "Turn Off Live Data";
            this.feedInterval = window.setInterval(() => this.OnDataFeedTick(),
            this.refreshInterval);
        });
    }

    public onFeedToggleClicked(): void {
        if (this.feedUpdating) {
            this.StopDataFeed();
        } else {
            this.StartDataFeed();
        }

        this.feedUpdating = !this.feedUpdating;
    }

    public ngAfterViewInit(): void {
        this.frameUpdate = new Date();
        this.setupInterval();
    }

    public ngOnDestroy(): void {
        this.StopDataFeed();
    }

    public setupInterval(): void {
        this.StopDataFeed();
        this.StartDataFeed();
    }

    public onSeriesAdded(e: any): void {
        const seriesName: string = e.args.series.name.toString();

        // hide legend item for series in the zoom slider
        if (seriesName.startsWith("zoomSliderSeries")) {
            e.args.series.title = "";
            e.args.series.legendItemVisibility = 1;
            e.args.series.legendItemBadgeTemplate = null;
            e.args.series.legendItemTemplate = null;
            e.args.series.legend = null;
        }
    }
}
