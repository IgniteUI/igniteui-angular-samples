import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { DATA } from "../../data/customers";

@Component({
  selector: "app-grid-column-hiding-toolbar-style",
  styleUrls: ["./grid-column-hiding-toolbar-style.component.scss"],
  templateUrl: "./grid-column-hiding-toolbar-style.component.html"
})
export class GridColumnHidingToolbarStyleComponent implements OnInit, AfterViewInit {

    @ViewChild("grid", { read: IgxGridComponent, static: true }) public grid: IgxGridComponent;
    public data: any[];

    constructor() { }

    public ngOnInit() {
        this.data = DATA;
    }

    public ngAfterViewInit() {
        this.grid.toolbar.columnHidingUI.columnsAreaMaxHeight = "200px";
    }
}
