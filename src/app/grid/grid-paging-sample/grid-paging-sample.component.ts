import { Component, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular/grid/grid.component";
import { athletesData } from "../services/data";
import { DataService } from "../services/data.service";

@Component({
    selector: "grid-sample",
    styleUrls: ["./grid-paging-sample.component.scss"],
    templateUrl: "grid-paging-sample.component.html"
})

export class PagingSampleComponent {
    @ViewChild("grid1") public grid1: IgxGridComponent;
    public data: any[];
    constructor() {
    }
    public ngOnInit(): void {
        this.data = athletesData;
    }

    public cellSelection(evt) {
        const cell = evt.cell;
        this.grid1.selectRows([cell.row.rowID], true);
    }
}
