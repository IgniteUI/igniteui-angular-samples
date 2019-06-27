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
    selector: "app-financial-chart-high-frequency",
    styleUrls: ["./financial-chart-high-frequency.component.scss"],
    templateUrl: "./financial-chart-high-frequency.component.html"
})
export class FinancialChartHighFrequencyComponent implements AfterViewInit, OnDestroy {

    @Input()
    public scalingRatio: number = 1;

    public data: any[];

    @ViewChild("chart", { static: true })
    public chart: IgxFinancialChartComponent;

    @ViewChild("fpsSpan", { static: true })
    public fpsSpan: ElementRef;

    private currValue: number = 150;
    private currIndex: number = 0;
    private currDate: Date = new Date(2018, 3, 1);

    private _maxPoints: number = 250;

    private _refreshInterval: number = 10;
    private _interval: number = -1;
    private _frames: number = 0;
    private _time: Date;

    constructor(private _zone: NgZone) {
        this.data = this.generateData();
    }

    public onOptimizeScalingChanged(checked: boolean) {
        if (checked) {
            this.scalingRatio = 1.0;
        } else {
            this.scalingRatio = NaN;
        }
    }

    public onChangeAmountClicked() {
        this.data = this.generateData();
    }

    public onRefreshFrequencyChanged(val: string) {
        let num: number = parseInt(val, 10);
        if (isNaN(num)) {
            num = 10;
        }
        if (num < 10) {
            num = 10;
        }
        if (num > 1000) {
            num = 1000;
        }
        this._refreshInterval = num;
        this.setupInterval();
    }

    public onMaxPointsChanged(val: string) {
        let num: number = parseInt(val, 10);

        if (isNaN(num)) {
            num = 250;
        }
        if (num < 250) {
            num = 250;
        }
        if (num > 100000) {
            num = 100000;
        }
        this._maxPoints = num;
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

    public get refreshInterval(): number {
        return this._refreshInterval;
    }
    @Input()
    public set refreshInterval(v: number) {
        this._refreshInterval = v;
        this.setupInterval();
    }
    public get refreshIntervalText(): string {
        return (this._refreshInterval / 1000).toFixed(3) + "s";
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
        this._time = new Date();
        this.setupInterval();
    }

    private setupInterval(): void {
        if (this._interval >= 0) {
            this._zone.runOutsideAngular(() => {
                window.clearInterval(this._interval);
            });
            this._interval = -1;
        }

        this._zone.runOutsideAngular(() => {
            this._interval = window.setInterval(() => this.tick(),
            this.refreshInterval);
        });
    }

    private generateData(): any[] {
        const data: any[] = [];
        for (this.currIndex = 0; this.currIndex < this.maxPoints; this.currIndex++) {
            this.currValue += Math.random() * 4.0 - 2.0;
            data.push(this.getValue());
        }
        return data;
    }

    private addHours(date: Date, hours: number): Date {
        return new Date(date.getTime() + hours * 60 * 60 * 1000);
    }

    private getValue(): any {
        this.currValue = Math.abs(this.currValue);
        this.currDate = this.addHours(this.currDate, 1);
        const o = this.currValue + ((Math.random() - 0.5) * 1);
        const h = this.currValue + (Math.random() * 2);
        const l = this.currValue - (Math.random() * 2);
        const c = this.currValue + ((Math.random() - 0.5) * 2);
        const newVal = { Date: this.currDate, Open: o, High: h, Low: l, Close: c};
        return newVal;
    }

    private tick(): void {
        this.currValue += Math.random() * 4.0 - 2.0;
        this.currIndex++;
        const newVal = this.getValue();
        const oldVal = this.data[0];

        this.data.push(newVal);
        this.chart.notifyInsertItem(this.data, this.data.length - 1, newVal);
        this.data.shift();
        this.chart.notifyRemoveItem(this.data, 0, oldVal);

        this._frames++;
        const currTime = new Date();
        const elapsed = (currTime.getTime() - this._time.getTime());
        if (elapsed > 5000) {
            const fps = this._frames / (elapsed / 1000.0);
            this._time = currTime;
            this._frames = 0;
            this.fpsSpan.nativeElement.textContent = Math.round(fps).toString();
        }
    }

    private toShortString(largeValue: number): string {
        let roundValue: string;

        if (largeValue >= 1000000) {
            roundValue = (largeValue / 1000000).toFixed(1);
            return roundValue + "m";
        }
        if (largeValue >= 1000) {
            roundValue = (largeValue / 1000).toFixed(0);
            return roundValue + "k";
        }

        roundValue = largeValue.toFixed(0);
        return roundValue + "";
    }
}
