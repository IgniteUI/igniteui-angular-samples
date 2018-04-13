import { Component, ElementRef, 
    ViewChild, ChangeDetectionStrategy, 
    AfterViewInit, OnDestroy, NgZone, Input } from "@angular/core";
import { DataService } from "../services/data.service";
import { IgxCategoryChartComponent } from 'igniteui-angular-charts/ES5/igx-category-chart-component';

@Component({
    providers: [ DataService ],
    selector: "app-category-chart-high-frequency-sample",
    styleUrls: ["./category-chart-high-frequency-sample.component.scss"],
    templateUrl: "./category-chart-high-frequency-sample.component.html",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryChartHighFrequencyComponent implements AfterViewInit, OnDestroy {

    constructor(private _zone: NgZone) {
        this.data = this.generateData();
    }

    @Input()
    scalingRatio: number = 1;

    onOptimizeScalingChanged(checked: boolean) {
    if (checked) {
        this.scalingRatio = 1.0;
    } else {
        this.scalingRatio = NaN;
    }
    }

    onChangeAmountClicked() {
    this.data = this.generateData();
    }

    onRefreshFrequencyChanged(val: string) {
    let num: number = parseInt(val);
    if (isNaN(num)) {
        num = 10;
    }
    if (num <= 0) {
        num = 10;
    }
    if (num > 50000) {
        num = 50000
    }
    this._refreshMilliseconds = num;
    this.setupInterval();
    }

    onMaxPointsChanged(val: string) {
    let num: number = parseInt(val);
    if (isNaN(num)) {
        num = 5000;
    }
    if (num <= 0) {
        num = 5000;
    }
    if (num > 2000000) {
        num = 2000000
    }
    this.maxPoints = num;
    }

    @ViewChild("chart")
    chart: IgxCategoryChartComponent;

    @ViewChild("fpsSpan")
    fpsSpan: ElementRef;

    private currValue: number = 15;
    private currIndex: number = 0;

    private _maxPoints: number = 5000;
    
    get maxPoints(): number {
    return this._maxPoints;
    }
    @Input()
    set maxPoints(v: number) {
    this._maxPoints = v;
    }

    private _refreshMilliseconds: number = 10;
    private _interval: number = -1;
    private _frames: number = 0;
    private _time: Date;
    
    get refreshMilliseconds(): number {
    return this._refreshMilliseconds;
    }
    @Input()
    set refreshMilliseconds(v: number) {
    this._refreshMilliseconds = v;
    this.setupInterval();
    }

    ngOnDestroy(): void {
    if (this._interval >=0) {
        this._zone.runOutsideAngular(() => {
        window.clearInterval(this._interval);
        });
        this._interval = -1;
    }
    }

    private setupInterval(): void {
    if (this._interval >=0) {
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
    let data: any[] = [];
    for (this.currIndex = 0; this.currIndex < this.maxPoints; this.currIndex++) {
        this.currValue += Math.random() * 4.0 - 2.0;
        data.push({ Label: this.currIndex.toString(), Value: this.currValue });
    }
    return data;
    }

    private tick(): void {
    this.currValue += Math.random() * 4.0 - 2.0;
    this.currIndex++;
    let newVal = { Label: this.currIndex.toString(), Value: this.currValue };

    let oldVal = this.data[0];
    this.data.push(newVal);
    this.chart.notifyInsertItem(this.data, this.data.length - 1, newVal);
    this.data.splice(0, 1);
    this.chart.notifyRemoveItem(this.data, 0, oldVal);

    this._frames++;
    let currTime = new Date();
    let elapsed = (currTime.getTime() - this._time.getTime());
    if (elapsed > 5000) {
        let fps = this._frames / (elapsed / 1000.0);
        this._time = currTime;
        this._frames = 0;
    
        this.fpsSpan.nativeElement.textContent = "fps: " + Math.round(fps).toString();
    }
    }

    ngAfterViewInit(): void {
    this._time = new Date();
    this.setupInterval();
    }  

    data: any[];
    title = 'app';
}
    
