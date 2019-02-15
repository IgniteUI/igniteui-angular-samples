import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxRowIslandComponent, IgxHierarchicalGridComponent, IgxDialogComponent } from "igniteui-angular";
import { SINGERS } from './data';
import { Singer } from './singer';

@Component({
    selector: "hierarchical-grid-editing",
    styleUrls: ["./hierarchical-grid-editing.component.scss"],
    templateUrl: "hierarchical-grid-editing.component.html"
})

export class HGridEditingSampleComponent implements OnInit {
    public localdata;

    @ViewChild('layout1')
    layout1: IgxRowIslandComponent;

    @ViewChild('hGrid')
    hGrid: IgxHierarchicalGridComponent;

    @ViewChild("dialogAdd", { read: IgxDialogComponent })
    public dialog: IgxDialogComponent;
    public singer;

    constructor() {}

    public ngOnInit(): void {
        this.localdata = SINGERS;
        this.singer = new Singer();
    }

    public addRow() {
        this.hGrid.addRow(this.singer);
        this.cancel();
    }

    public cancel() {
        this.dialog.close();
        this.singer = new Singer();
    }

    public removeRow(rowIndex) {
        const row = this.hGrid.getRowByIndex(rowIndex);
        row.delete();
     }

}
