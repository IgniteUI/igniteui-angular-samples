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

    public data: any[];
    private currValue: number = 15;
    private currIndex: number = 0;
    private startDate: Date = new Date(2015, 1, 1, 16, 30, 0);

    private maxPoints: number = 50;//00;

    private refreshInterval: number = 500;
    //private _refreshInterval: number = 10;
    private frameCounter: number = 0;
    private frameUpdate: Date;

    private feedInterval: number = -1;
    private feedUpdating: boolean = true;

    constructor(private _zone: NgZone) {

       // this.stockDate = new Date(2015, 1, 1);
        this.data = this.GenerateData(this.startDate, 200, "Tesla (TSLA)");
        //this.chart.dataSource = this.GenerateData();
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
        console.log('GenerateData');
        let stockDate = this.AddDays(startDate, 0);
        let stockPrice: number = startPrice;

        for (this.currIndex = 0; this.currIndex < this.maxPoints; this.currIndex++) {
            //this.currValue += Math.random() * 4.0 - 2.0;
            let item = this.GenerateItem(stockDate, stockPrice);
            stockDate = this.AddDays(stockDate, 1);
            stockPrice += Math.random() * 4.0 - 2.0;

            stock.push(item);
        }
        // setting data intent for Series Title
        (stock as any).__dataIntents = {
            close: ["SeriesTitle/" + stockName]
        };
        return stock;
    }

    private OnDataFeedTick(): void {
        if (!this.feedUpdating) return;

        let lastItem = this.data[this.data.length - 1]
        let stockPrice = lastItem.close + Math.random() * 4.0 - 2.0;
        let stockDate = this.AddDays(lastItem.date, 1); ;

        let newItem = this.GenerateItem(stockDate, stockPrice);

        const oldVal = this.data[0];
        this.data.push(newItem);
        this.chart.notifyInsertItem(this.data, this.data.length - 1, newItem);
        this.data.shift();
        this.chart.notifyRemoveItem(this.data, 0, oldVal);

        this.frameCounter++;
        const currTime = new Date();
        const elapsed = (currTime.getTime() - this.frameUpdate.getTime());
        if (elapsed > 5000) {
            const fps = this.frameCounter / (elapsed / 1000.0);
            this.frameUpdate = currTime;
            this.frameCounter = 0;

            this.fpsSpan.nativeElement.textContent = "FPS: " + Math.round(fps).toString();
        }
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
        console.log("feedUpdating << " + this.feedUpdating);
        if (this.feedUpdating)
            this.StopDataFeed();
        else
            this.StartDataFeed();

        this.feedUpdating = !this.feedUpdating;
        console.log("feedUpdating >> " + this.feedUpdating);
    }

    public ngAfterViewInit(): void {
        this.frameUpdate = new Date();
        this.setupInterval();

       // this.chart.dataSource = this.GenerateData();
    }

    public ngOnDestroy(): void {
        // if (this.feedInterval >= 0) {
        //     this._zone.runOutsideAngular(() => {
        //         window.clearInterval(this.feedInterval);
        //     });
        //     this.feedInterval = -1;
        // }
        this.StopDataFeed();
    }

    private setupInterval(): void {
        // if (this.feedInterval >= 0) {
        //     this._zone.runOutsideAngular(() => {
        //         window.clearInterval(this.feedInterval);
        //     });
        //     this.feedInterval = -1;
        // }
        this.StopDataFeed();
        this.StartDataFeed();

        // this._zone.runOutsideAngular(() => {
        //     this.feedInterval = window.setInterval(() => this.tick(),
        //     this.refreshInterval);
        // });
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
