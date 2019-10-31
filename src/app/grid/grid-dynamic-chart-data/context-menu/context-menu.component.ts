import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IGridDataSelection } from "../chart.service";
export interface IChartArgs {
    chartType: string;
    seriesType: string;
}
@Component({
  selector: "context-menu",
  templateUrl: "./context-menu.component.html",
  styleUrls: ["./context-menu.component.scss"]
})
export class ContextMenuComponent {

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

    public charts = ["column", "bar", "area", "line", "scatter", "pie", "doughnut"];

    @Input()
    public x = 0;

    @Input()
    public y = 0;

    @Input()
    public cell;

    @Input()
    public multiSelection: boolean;

    @Output()
    public onChartSelected = new  EventEmitter<IChartArgs>();

    constructor() { }

    public trackByFn(index, item) {
        return index;
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
        this.onChartSelected.emit({chartType: this.chartType, seriesType});
    }
}
