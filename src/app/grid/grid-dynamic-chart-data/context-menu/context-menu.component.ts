import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IGridDataSelection } from "../grid-dynamic-chart-data.component";
@Component({
  selector: "context-menu",
  templateUrl: "./context-menu.component.html",
  styleUrls: ["./context-menu.component.scss"]
})
export class ContextMenuComponent implements OnInit {

    public chartsMenu = false;
    public exportMenu  = false;

    public chartsMenuX;
    public chartsMenuY;

    public exportMenuX;
    public exportMenuY;

    @Input()
    public x = 0;

    @Input()
    public y = 0;

    @Input()
    public cell;

    @Input()
    public selectedData: IGridDataSelection[];

    constructor() { }

    public hasMultiCellSelection() {
        return this.selectedData.length > 1;
    }

    log(event){
        console.log(this.selectedData);
        console.log(this.hasChartDataSelection());
    }
    public hasChartDataSelection() {
        return this.selectedData.some(data => data.selectedData && Object.keys(data.selectedData).length > 0);
    }

    public renderChartsMenu(event) {
        this.exportMenu  =  false;
        this.chartsMenu = true;

        this.chartsMenuX = event.target.getBoundingClientRect()["x"] + 180;
        this.chartsMenuY = event.target.getBoundingClientRect()["y"] + 5;
    }

    public renderExportMenu(event) {
        this.chartsMenu  =  false;
        this.exportMenu = true;

        this.exportMenuX = event.target.getBoundingClientRect()["x"] + 180;
        this.exportMenuY = event.target.getBoundingClientRect()["y"] + 5;
    }

    public ngOnInit() {
        // console.log(this.selectedData);
        // console.log(this.hasChartDataSelection());
    }
}
