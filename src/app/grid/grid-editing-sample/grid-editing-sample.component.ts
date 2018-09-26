import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxDialogComponent, IgxGridComponent } from "igniteui-angular";
import { DATA, LOCATIONS } from "./data";
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
    public locations;
    public product;
    constructor() { }

    public ngOnInit() {
        this.data = DATA.map((e) => {
            const index = Math.floor(Math.random() * LOCATIONS.length);
            const count = Math.floor(Math.random() * (LOCATIONS.length - index)) + 1;
            e.Locations = [...LOCATIONS].splice(index, count);
            return e;
        });
        this.product = new Product();
        this.locations = LOCATIONS;
    }

    public removeRow(rowIndex) {
       const row = this.grid1.getRowByIndex(rowIndex);
       row.delete();
    }

    public addRow() {
        this.grid1.addRow(this.product);
        this.cancel();
    }

    public cancel() {
        this.dialog.close();
        this.product = new Product();
    }

    public parseArray(arr: Array<{ shop: string, lastInventory: string}>): string[] {
        return  (arr || []).map((e) => e.shop);
    }
}
