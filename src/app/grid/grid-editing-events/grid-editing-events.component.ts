import { Component, OnInit, ViewChild } from "@angular/core";
import { NgModel } from "@angular/forms";
import { IGridEditEventArgs, IgxGridComponent, IgxToastComponent, IgxToastPosition } from "igniteui-angular";
import { DATA } from "../../data/nwindData";

@Component({
    selector: "grid-editing-event",
    templateUrl: "grid-editing-events.component.html",
    styleUrls: ["grid-editing-events.component.scss"]
})
export class GridEditingEventsComponent implements OnInit {
    public products: any[];
    public balance: number = 7800;
    public orderBalance: number;

    @ViewChild(IgxGridComponent, { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;

    @ViewChild(IgxToastComponent, { read: IgxToastComponent, static: true })
    public toast: IgxToastComponent;

    @ViewChild("myTemplate", { read: NgModel })
    public myTemplate: NgModel;

    public ngOnInit() {
        this.products = DATA.map(e => {
            if (!e.UnitPrice) {
                e.UnitPrice = 1;
            }
            e.Ordered = Math.floor(Math.random() * e.UnitsInStock);
            return e;
        });
        this.toast.position = IgxToastPosition.Middle;
    }

    public handleCellEdit(event: IGridEditEventArgs) {
        const column = this.grid.columnList.find(e => e.index === event.cellID.columnID);
        if (column.header === "Ordered") {
            const rowData = this.grid.data
            .find(entry => entry[this.grid.primaryKey] === event.cellID.rowID);
            if (!rowData) {
                return;
            }
            if (event.newValue > rowData.UnitsInStock) {
                event.cancel = true;
                this.toast.show();
            }
        }
    }

}
