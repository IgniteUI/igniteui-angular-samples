import { Component, OnInit, ViewChild } from "@angular/core";
import { IGridEditEventArgs, IgxToastComponent, IgxToastPosition, IgxTreeGridComponent } from "igniteui-angular";
import { generateEmployeeFlatData, IEmployee } from "../data/employees-flat";

@Component({
    selector: "tree-grid-editing-events",
    templateUrl: "tree-grid-editing-events.component.html",
    styleUrls: ["tree-grid-editing-events.component.css"]
})
export class TreeGridEditingEventsComponent implements OnInit {
    @ViewChild(IgxTreeGridComponent, { read: IgxTreeGridComponent, static: true })
    public grid: IgxTreeGridComponent;

    @ViewChild(IgxToastComponent, { read: IgxToastComponent, static: true })
    public toast: IgxToastComponent;

    public data: IEmployee[] = [];
    public ngOnInit() {
        this.data = generateEmployeeFlatData();
        this.toast.position = IgxToastPosition.Middle;
    }

    public handleEdit(event: IGridEditEventArgs) {
        const row = this.data.find(e => e[this.grid.primaryKey] === event.cellID.rowID);
        if (!row) {
            return;
        }
        const column = this.grid.columnList.find(col => col.index === event.cellID.columnID);
        if (column.field === "Age") {
            if (event.newValue < 18) {
                event.cancel = true;
                this.toast.message = "Employees must be at least 18 years old!";
                this.toast.show();
            }
        } else if (column.field === "HireDate") {
            if (event.newValue > new Date().getTime()) {
                event.cancel = true;
                this.toast.message = "The employee hire date must be in the past!";
                this.toast.show();
            }
        }
    }
}
