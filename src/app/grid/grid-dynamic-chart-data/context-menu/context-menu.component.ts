import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { IGridDataSelection } from "../grid-dynamic-chart-data.component";
@Component({
  selector: "context-menu",
  templateUrl: "./context-menu.component.html",
  styleUrls: ["./context-menu.component.scss"]
})
export class ContextMenuComponent implements OnInit {

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

    public ngOnInit() {
        // console.log(this.selectedData);
        // console.log(this.hasChartDataSelection());
    }
}
