import { AfterViewInit, Component, EventEmitter, HostBinding,
    Input, Output, ViewChild, ViewEncapsulation} from "@angular/core";
import { ChartHostDirective } from '../../directives/chart-integration/chart-integration.directive';
@Component({
    selector: "igx-chart-menu",
    templateUrl: "./chart-dialog.component.html",
    styleUrls: ["./chart-dialog.component.scss"],
    encapsulation: ViewEncapsulation.None
})
export class IgxChartMenuComponent implements AfterViewInit {

    @ViewChild("chartArea", { read: ChartHostDirective }) public chartArea: ChartHostDirective;

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

    @Input()
    public chartDirective;

    @Input()
    public currentChartType;

    @Input()
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
        this.chartArea.viewContainerRef.clear();
        this.chartDirective.chartFactory(chartType, this.chartArea.viewContainerRef);
    }
}
