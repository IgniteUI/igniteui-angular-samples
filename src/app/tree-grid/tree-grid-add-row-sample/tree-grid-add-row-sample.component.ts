import { Component, OnInit, ViewChild } from "@angular/core";
import {
    IgxActionStripComponent, IgxDialogComponent, IgxNumberSummaryOperand, IgxSummaryOperand, IgxSummaryResult, IgxTreeGridComponent
} from "igniteui-angular";
import { generateEmployeeFlatData } from "../data/employees-flat";
import { Employee } from "./employee";

class CustomNumberSummary {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = new IgxSummaryOperand().operate(data);
        result.push({
            key: "Min",
            label: "Min",
            summaryResult: IgxNumberSummaryOperand.min(data)
        });
        result.push({
            key: "max",
            label: "Max",
            summaryResult: IgxNumberSummaryOperand.max(data)
        });
        return result;
    }
}

@Component({
    selector: "app-tree-grid-add-row-sample",
    styleUrls: ["./tree-grid-add-row-sample.component.scss"],
    templateUrl: "./tree-grid-add-row-sample.component.html"
})
export class TreeGridAddRowSampleComponent implements OnInit {

    public data: any[];
    public numberSummaries = CustomNumberSummary;
    @ViewChild("actionstrip") actionStrip: IgxActionStripComponent;
    @ViewChild("treeGrid", { static: true }) public treeGrid: IgxTreeGridComponent;
    @ViewChild("dialogAdd", { read: IgxDialogComponent, static: true }) public dialog: IgxDialogComponent;
    public employee: Employee;
    private nextRow: number;

    constructor() {
    }

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
        this.employee = new Employee();
        this.nextRow = this.data.length + 1;
    }

    public openDialog(parentID) {
        this.employee.ParentID = parentID;
        this.dialog.open();
    }

    public addRow() {
        this.employee.ID = this.nextRow++;

        if (this.employee.ParentID === -1) {
            this.treeGrid.addRow(this.employee);
        } else {
            this.treeGrid.addRow(this.employee, this.employee.ParentID);
        }
        this.cancel();
    }

    public cancel() {
        this.dialog.close();
        this.employee = new Employee();
    }

    public deleteRow(id) {
        this.treeGrid.deleteRow(id);
    }

    onMouseOver(event, grid, actionStrip) {
        if (event.target.nodeName.toLowerCase() === 'igx-grid-cell') {
            const rowIndex = parseInt(event.target.attributes['data-rowindex'].value, 10);
            const row = grid.getRowByIndex(rowIndex);
            if (row._treeRow.level <= 2) {
                actionStrip.actionButtons.first.addChild = true;
            }
            else {
                actionStrip.actionButtons.first.addChild = false;
            }
            actionStrip.show(row);
        }
    }

    onMouseLeave(actionstrip, event?) {
        if (!event || event.relatedTarget.nodeName.toLowerCase() !== 'igx-drop-down-item') {
            actionstrip.hide();
        }
    }
}
