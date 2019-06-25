import { Component, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
import { FOODS_DATA } from "../data/foods";

@Component({
    selector: "tree-grid-paging-sample",
    styleUrls: ["./tree-grid-paging-style-sample.component.scss"],
    templateUrl: "tree-grid-paging-style-sample.component.html"
})

export class TreeGridPagingStyleSampleComponent {

    @ViewChild("treegrid1", { static: true })
    public grid1: IgxTreeGridComponent;

    public data: any[];

    constructor() {
    }

    public ngOnInit(): void {
        this.data = FOODS_DATA();
    }

    public cellSelection(evt) {
        const cell = evt.cell;
        this.grid1.selectRows([cell.row.rowID], true);
    }
}
