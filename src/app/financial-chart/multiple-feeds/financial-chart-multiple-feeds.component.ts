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

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-financial-chart-multiple-feeds",
    styleUrls: ["./financial-chart-multiple-feeds.component.scss"],
    templateUrl: "./financial-chart-multiple-feeds.component.html"
})
export class FinancialChartMultipleFeedsComponent implements AfterViewInit, OnDestroy {

    @ViewChild("chart")
    public chart: IgxFinancialChartComponent;

    @ViewChild("fpsSpan")
    public fpsSpan: ElementRef;

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
        let startYear = new Date().getFullYear() - 4;
        this.startDate = new Date(startYear, 1, 1, 16, 30, 0);
        this.dataFeeds = [
            this.GenerateData(this.startDate, 150, "Mircosoft (MSFT)"),
            this.GenerateData(this.startDate, 200, "Apple (AAPL)"),
            this.GenerateData(this.startDate, 400, "Tesla (TSLA)"),
            this.GenerateData(this.startDate, 350, "Netflix (NFLX)"),
            this.GenerateData(this.startDate, 250, "Nvidia (NVDA)")
        ];
    }

    public AddDays(date: Date, days: number): Date {
        return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
    }

    private GenerateItem(date: Date, price: number): any {
        let t = date;
        let o = price;
        let h = o + (Math.random() * 5);
        let l = o - (Math.random() * 5);
        let c = l + (Math.random() * (h - l));
        let v = price + (Math.random() * 10000);

        // round up all OHLC values to 1 decimal point
        o = Math.round(o * 10) / 10;
        h = Math.round(h * 10) / 10;
        l = Math.round(l * 10) / 10;
        c = Math.round(c * 10) / 10;
        c = Math.round(c * 10) / 10;
        v = Math.round(v);
        return { date: t, open: o, high: h, low: l, close: c, volume: v};
    }

    private GenerateData(startDate: Date, startPrice: number, stockName: string): any[] {
        const stock: any[] = [];
        let stockDate = this.AddDays(startDate, 0);
        let stockPrice: number = startPrice;

        for (this.currIndex = 0; this.currIndex < this.maxPoints; this.currIndex++) {

            let item = this.GenerateItem(stockDate, stockPrice);
            stockDate = this.AddDays(stockDate, 1);
            stockPrice += Math.random() * 4.1 - 2.0;

            stock.push(item);
        }
        // setting data intent for Series Title
        (stock as any).__dataIntents = {
            close: ["SeriesTitle/" + stockName]
        };
        return stock;
    }

    private AppendDataItemTo(data: any[]): void {
        let lastItem = data[data.length - 1]
        let stockPrice = lastItem.close + Math.random() * 4.1 - 2.0;
        let stockDate = this.AddDays(lastItem.date, 1);
        let newItem = this.GenerateItem(stockDate, stockPrice);
        const oldVal = data[0];

        data.push(newItem);
        this.chart.notifyInsertItem(data, data.length - 1, newItem);
        data.shift();
        this.chart.notifyRemoveItem(data, 0, oldVal);
    }

    private OnDataFeedTick(): void {
        if (!this.feedUpdating) return;

        // appending new data items to each data item
        for (let i = 0; i < this.dataFeeds.length; i++) {
            this.AppendDataItemTo(this.dataFeeds[i]);
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

    private StopDataFeed(): void{
        if (this.feedInterval >= 0) {
            this._zone.runOutsideAngular(() => {
                window.clearInterval(this.feedInterval);
            });
            this.feedInterval = -1;
        }
    }

    private StartDataFeed(): void{
        this._zone.runOutsideAngular(() => {
            this.feedInterval = window.setInterval(() => this.OnDataFeedTick(),
            this.refreshInterval);
        });
    }

    public onDataFeedToggleClicked() {
        if (this.feedUpdating)
            this.StopDataFeed();
        else
            this.StartDataFeed();

        this.feedUpdating = !this.feedUpdating;
    }

    public ngAfterViewInit(): void {
        this.frameUpdate = new Date();
        this.setupInterval();
    }

    public ngOnDestroy(): void {
        this.StopDataFeed();
    }

    private setupInterval(): void {
        this.StopDataFeed();
        this.StartDataFeed();
    }
}
