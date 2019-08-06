import { Component, OnInit, ViewChild } from "@angular/core";
import { NgModel } from "@angular/forms";
import { IGridEditEventArgs, IgxGridComponent, IgxToastComponent } from "igniteui-angular";
import { DATA } from "../../data/nwindData";

@Component({
    selector: "grid-editing-event",
    templateUrl: "grid-editing-events.component.html",
    styleUrls: ["grid-editing-events.component.scss"]
})
export class GridEditEventsComponent implements OnInit {
    public products: any[];
    public balance: number = 7800;
    public orderBalance: number;

    @ViewChild(IgxGridComponent, { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;

    @ViewChild(IgxToastComponent, { read: IgxToastComponent, static: true })
    public toast: IgxToastComponent;

    @ViewChild("myTemplate", { read: NgModel, static: false })
    public myTemplate: NgModel;

    public ngOnInit() {
        this.products = DATA.map(e => {
            if (!e.UnitPrice) {
                e.UnitPrice = 1;
            }
            e.Ordered = Math.floor(Math.random() * e.UnitsInStock);
            e.OrderPrice = e.Ordered * e.UnitPrice;
            return e;
        });
    }

    public handleCellEdit(event: IGridEditEventArgs) {
        if (event.cellID.columnID === 3) {
            // event.cancel = this.myTemplate.invalid;
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
