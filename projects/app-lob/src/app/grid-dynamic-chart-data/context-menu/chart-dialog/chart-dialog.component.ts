import { Component, EventEmitter, HostBinding, Input, Output, ViewChild, ViewEncapsulation} from "@angular/core";
@Component({
    selector: "igx-chart-menu",
    templateUrl: "./chart-dialog.component.html",
    styleUrls: ["./chart-dialog.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class IgxChartMenuComponent {

    @Output()
    public onClose = new EventEmitter<any>();
    @Input()
    @HostBinding("style.width.px")
    public get width() {
        return this.fullScreen ? this._width : 0.7 * this._width;
    }
    public set width(value) {
        this._width = value;
    }

    @Input()
    @HostBinding("style.height.px")
    public get height() {
        return this.fullScreen ? this._height : 0.7 * this._height;
    }
    public set height(value) {
        this._height = value;
    }

    public currentChartType;
    public fullScreen = false;
    public isConfigAreaExpanded = false;
    public mainChartTypes = ["Column", "Area", "Bar", "Line", "Scatter", "Pie"];
    public allCharts = ["ColumnGrouped", "AreaGrouped", "LineGrouped", "BarGrouped", "Pie",
        "ColumnStacked", "AreaStacked", "LineStacked", "BarStacked", "Column100Stacked",
        "Area100Stacked", "Line100Stacked", "Bar100Stacked", "ScatterPoint", "ScatterBubble", "ScatterLine"];
    private _width;
    private _height;

    public toggleFullScreen() {
        this.fullScreen = !this.fullScreen;
    }

    public hasAvailableChart(chartType) {
        return this.allCharts.some(c => c.includes(chartType));
    }

}
