import { AfterViewInit, Component, EventEmitter, HostBinding,
    Output, ViewChild, ViewContainerRef, ViewEncapsulation} from "@angular/core";
@Component({
    selector: "igx-chart-menu",
    templateUrl: "./chart-dialog.component.html",
    styleUrls: ["./chart-dialog.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class IgxChartMenuComponent implements AfterViewInit {

    @ViewChild("chartArea", { read: ViewContainerRef }) public chartArea: ViewContainerRef;

    @Output()
    public onClose = new EventEmitter<any>();

    @HostBinding("style.width.px")
    public get width() {
        return this.fullScreen ? this._width : 0.7 * this._width;
    }
    public set width(value) {
        this._width = value;
    }

    @HostBinding("style.height.px")
    public get height() {
        return this.fullScreen ? this._height : 0.7 * this._height;
    }
    public set height(value) {
        this._height = value;
    }

    public chartDirective;
    public currentChartType;
    public allCharts = [];
    public fullScreen = false;
    public isConfigAreaExpanded = false;
    public mainChartTypes = ["Column", "Area", "Bar", "Line", "Scatter", "Pie"];
    private _width;
    private _height;

    public ngAfterViewInit() {
        this.createChart(this.currentChartType);
    }

    public toggleFullScreen() {
        this.fullScreen = !this.fullScreen;
    }

    public hasAvailableChart(chartType) {
        return this.allCharts.some(c => c.includes(chartType));
    }

    public createChart(chartType) {
        this.chartArea.clear();
        this.chartDirective.chartFactory(chartType, this.chartArea);
    }
}
