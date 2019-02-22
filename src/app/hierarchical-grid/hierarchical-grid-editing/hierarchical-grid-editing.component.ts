import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxDialogComponent, IgxHierarchicalGridComponent, IgxRowIslandComponent } from "igniteui-angular";
import { SINGERS } from "./data";
import { Singer } from "./singer";

@Component({
    selector: "hierarchical-grid-editing",
    styleUrls: ["./hierarchical-grid-editing.component.scss"],
    templateUrl: "hierarchical-grid-editing.component.html"
})

export class HGridEditingSampleComponent implements OnInit {
    public localdata;
    public singer;

    @ViewChild("hierarchicalGrid")
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    @ViewChild("dialogAdd", { read: IgxDialogComponent })
    private dialog: IgxDialogComponent;

    constructor() {}

    public ngOnInit(): void {
        this.localdata = SINGERS;
        this.singer = new Singer();
    }

    public addRow() {
        this.hierarchicalGrid.addRow(this.singer);
        this.cancel();
    }

    public cancel() {
        this.dialog.close();
        this.singer = new Singer();
    }

    public removeRow(rowIndex) {
        const row = this.hierarchicalGrid.getRowByIndex(rowIndex);
        row.delete();
     }

}
