import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IGridDataSelection } from "../chart.service";
export interface IChartArgs {
    chartData: any;
    chartType: string;
    seriesType: string;
}
@Component({
  selector: "context-menu",
  templateUrl: "./context-menu.component.html",
  styleUrls: ["./context-menu.component.scss"]
})
export class ContextMenuComponent implements OnInit {

    public chartsMenu = false;
    public exportMenu  = false;
    public chartSeriesTypeMenu = false;

    public chartsMenuX;
    public chartsMenuY;

    public chartSeriesTypeMenuX;
    public chartSeriesTypeMenuY;

    public exportMenuX;
    public exportMenuY;

    public chartType: string;
    public series: string;
    public chartSeriesTypes: string[] = [];
    @Input()
    public x = 0;

    @Input()
    public y = 0;

    @Input()
    public cell;

    @Input()
    public selectedData: IGridDataSelection[];

    @Output()
    public onChartSelected = new  EventEmitter<IChartArgs>();

    constructor() { }

    public hasMultiCellSelection() {
        return this.selectedData.length > 1;
    }

    public hasChartDataSelection() {
        return this.selectedData.some(data => data.selectedData && Object.keys(data.selectedData).length > 0);
    }

    public renderChartsMenu(event) {
        this.exportMenu  =  false;
        this.chartsMenu = true;

        this.chartsMenuX = event.target.getBoundingClientRect()["x"] + 180;
        this.chartsMenuY = event.target.getBoundingClientRect()["y"] - 50;
    }

    public renderExportMenu(event) {
        this.chartsMenu  =  false;
        this.chartSeriesTypeMenu = false;
        this.exportMenu = true;

        this.exportMenuX = event.target.getBoundingClientRect()["x"] + 180;
        this.exportMenuY = event.target.getBoundingClientRect()["y"] + 5;
    }

    public renderChartSeriesTypeMenu(event, chartType: string, ...args: string[]) {
        this.chartType = chartType;
        this.chartSeriesTypes = [...args];
        this.chartSeriesTypeMenu = true;
        this.chartSeriesTypeMenuX = event.target.getBoundingClientRect()["x"] + 120;
        this.chartSeriesTypeMenuY = event.target.getBoundingClientRect()["y"] + 5;
    }

    public selectChart(chartType, seriesType = "") {
        this.chartType = chartType;
        // tslint:disable-next-line: max-line-length
        this.onChartSelected.emit({chartData: this.selectedData, chartType: this.chartType, seriesType});
    }

    public ngOnInit() {
    }
}
