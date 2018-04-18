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
    public data: any[];

    @ViewChild("chart")
    public chart: IgxFinancialChartComponent;

    private currValue: number = 150;
    private currIndex: number = 0;
    private currDate: Date = new Date(2018, 3, 1);

    private _maxPoints: number = 250;

    private _refreshMilliseconds: number = 100;
    private _interval: number = -1;
    private _frames: number = 0;
    private _time: Date;

    constructor(private _zone: NgZone) {
        this.data = this.generateData();
    }

    public onRefreshFrequencyChanged(val: string) {
        let num: number = parseInt(val, 10);
        if (isNaN(num)) {
            num = 10;
        }
        if (num <= 0) {
            num = 10;
        }
        if (num > 50000) {
            num = 50000;
        }
        this._refreshMilliseconds = num;
        this.setupInterval();
    }

    public get maxPoints(): number {
        return this._maxPoints;
    }

    public get refreshMilliseconds(): number {
        return this._refreshMilliseconds;
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
            this.refreshMilliseconds);
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
        const o = this.currValue + ((Math.random() - 0.5) * 1);
        const h = this.currValue + (Math.random() * 2);
        const l = this.currValue - (Math.random() * 2);
        const c = this.currValue + ((Math.random() - 0.5) * 2);
        const v = this.currValue*10000 + ((Math.random() - 0.5) * 50000);
        const newVal = { Date: this.currDate, Open: o, High: h, Low: l, Close: c, Volume: v };
        return newVal;
    }

    private tick(): void {
        this.currValue += Math.random() * 4.0 - 2.0;
        this.currIndex++;
        this.currDate = this.addHours(this.currDate, 1);
        const newVal = this.getValue();
        const oldVal = this.data[0];

        this.data.push(newVal);
        this.chart.notifyInsertItem(this.data, this.data.length - 1, newVal);
        this.data.splice(0, 1);
        this.chart.notifyRemoveItem(this.data, 0, oldVal);

        this._frames++;
        const currTime = new Date();
        const elapsed = (currTime.getTime() - this._time.getTime());
        if (elapsed > 5000) {
            const fps = this._frames / (elapsed / 1000.0);
            this._time = currTime;
            this._frames = 0;
        }
    }
}
