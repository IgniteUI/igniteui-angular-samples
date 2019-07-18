import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { athletesData } from "../services/data";

@Component({
  selector: "app-grid-toolbar-style",
  styleUrls: ["./grid-toolbar-style.component.scss"],
  templateUrl: "./grid-toolbar-style.component.html"
})
export class GridToolbarStyleComponent implements OnInit, AfterViewInit {

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
