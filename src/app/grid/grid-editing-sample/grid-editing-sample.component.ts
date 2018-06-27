import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxDialogComponent, IgxGridComponent } from "igniteui-angular";
import { DATA } from "./data";
import { Product } from "./product";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-grid-editing-sample",
    styleUrls: ["./grid-editing-sample.component.scss"],
    templateUrl: "./grid-editing-sample.component.html"
})
export class GridEditingSampleComponent implements OnInit {

    @ViewChild("grid1", { read: IgxGridComponent })
    public grid1: IgxGridComponent;
    @ViewChild("dialogAdd", { read: IgxDialogComponent })
    public dialog: IgxDialogComponent;
    public data;
    public product;
    constructor() { }

    public ngOnInit() {
        this.data = DATA;
        this.product = new Product();
    }

    public removeRow(rowIndex) {
        this.grid1.deleteRow(rowIndex);

    }

    public addRow() {
        this.grid1.addRow(this.product);
        this.cancel();

    }
    public cancel() {
        this.dialog.close();
        this.product = new Product();
    }
}
