import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { athletesData } from "../services/data";

@Component({
  selector: "grid-toolbar-sample-2",
  styleUrls: ["./grid-toolbar-sample-2.component.scss"],
  templateUrl: "./grid-toolbar-sample-2.component.html"
})
export class GridToolbarSample2Component implements OnInit, AfterViewInit {

    @ViewChild("grid1", { static: true }) public grid: IgxGridComponent;
    public data: any[];

    public ngOnInit() {
        this.data = athletesData;
    }

    public ngAfterViewInit() {
        this.grid.toolbar.columnPinningUI.columnsAreaMaxHeight = "250px";
        this.grid.toolbar.columnHidingUI.columnsAreaMaxHeight = "200px";
    }

}
