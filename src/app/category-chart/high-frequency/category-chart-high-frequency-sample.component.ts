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
import { IgxCategoryChartComponent } from "igniteui-angular-charts/ES5/igx-category-chart-component";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-category-chart-high-frequency-sample",
    styleUrls: ["./category-chart-high-frequency-sample.component.scss"],
    templateUrl: "./category-chart-high-frequency-sample.component.html"
})
export class CategoryChartHighFrequencyComponent implements AfterViewInit, OnDestroy {
    @Input()
    public scalingRatio: number = 1;

    public data: any[];

    @ViewChild("chart")
    public chart: IgxCategoryChartComponent;

    @ViewChild("fpsSpan")
    public fpsSpan: ElementRef;

    private currValue: number = 15;
    private currIndex: number = 0;

    private _maxPoints: number = 5000;

    private _refreshMilliseconds: number = 10;
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
        if (num <= 0) {
            num = 10;
        }
        if (num > 50000) {
            num = 50000;
        }
        this._refreshMilliseconds = num;
        this.setupInterval();
    }

    public onMaxPointsChanged(val: string) {
        let num: number = parseInt(val, 10);
        if (isNaN(num)) {
            num = 5000;
        }
        if (num <= 0) {
            num = 5000;
        }
        if (num > 2000000) {
            num = 2000000;
        }
        this.maxPoints = num;
    }

    public get maxPoints(): number {
        return this._maxPoints;
    }
    @Input()
    public set maxPoints(v: number) {
        this._maxPoints = v;
    }

    public get refreshMilliseconds(): number {
        return this._refreshMilliseconds;
    }
    @Input()
    public set refreshMilliseconds(v: number) {
        this._refreshMilliseconds = v;
        this.setupInterval();
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
            data.push({ Label: this.currIndex.toString(), Value: this.currValue });
        }
        return data;
    }

    private tick(): void {
        this.currValue += Math.random() * 4.0 - 2.0;
        this.currIndex++;
        const newVal = { Label: this.currIndex.toString(), Value: this.currValue };

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

            this.fpsSpan.nativeElement.textContent = "fps: " + Math.round(fps).toString();
        }
    }
}
