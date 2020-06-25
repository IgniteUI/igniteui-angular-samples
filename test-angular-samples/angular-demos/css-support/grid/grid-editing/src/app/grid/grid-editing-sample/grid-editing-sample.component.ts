import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { IgxDialogComponent, IgxGridComponent } from "igniteui-angular";
import { DATA, LOCATIONS } from "./data";
import { Product } from "./product";

@Component({
    selector: "app-grid-editing-sample",
    styleUrls: ["./grid-editing-sample.component.css"],
    templateUrl: "./grid-editing-sample.component.html"
})
export class GridEditingSampleComponent implements OnInit, AfterViewInit {

    @ViewChild("grid1", { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    @ViewChild("dialogAdd", { read: IgxDialogComponent, static: true })
    public dialog: IgxDialogComponent;
    public data;
    public locations;
    public product;
    public customOverlaySettings;

    public ngOnInit() {
        this.data = DATA.map((e) => {
            const index = Math.floor(Math.random() * LOCATIONS.length);
            const count = Math.floor(Math.random() * 3) + 1;
            e.Locations = [...LOCATIONS].splice(index, count);
            return e;
        });
        this.product = new Product();
        this.locations = LOCATIONS;
    }

    public ngAfterViewInit() {
        this.customOverlaySettings = {
            outlet: this.grid1.outletDirective
        };
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

    public parseArray(arr: Array<{ shop: string, lastInventory: string}>): string {
        return  (arr || []).map((e) => e.shop).join(", ");
    }
}
