import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
import { FOODS_DATA } from "../data/foods";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "tree-grid-paging-sample",
    styleUrls: ["./tree-grid-paging-sample.component.scss"],
    templateUrl: "tree-grid-paging-sample.component.html"
})

export class TreeGridPagingSampleComponent {

    @ViewChild("treegrid1")
    public grid1: IgxTreeGridComponent;

    public data: any[];

    constructor() {
    }

    public ngOnInit(): void {
        this.data = FOODS_DATA;
    }

    public cellSelection(evt) {
        const cell = evt.cell;
        this.grid1.selectRows([cell.row.rowID], true);
    }
}
