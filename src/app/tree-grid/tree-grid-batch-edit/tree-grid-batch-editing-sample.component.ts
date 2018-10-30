import { Component, ViewChild } from "@angular/core";
import { IgxGridComponent, IgxGridTransaction, IgxToggleDirective,
    IgxTransactionService, IgxTreeGridComponent } from "igniteui-angular";
import { FLAT_DATA } from "./data";

@Component({
    providers: [{ provide: IgxGridTransaction, useClass: IgxTransactionService }],
    selector: "app-tree-grid-batch-editing-sample.component",
    styleUrls: ["tree-grid-batch-editing-sample.component.scss"],
    templateUrl: "tree-grid-batch-editing-sample.component.html"
})
export class TreeGridBatchEditingSampleComponent {
    @ViewChild("treeGrid", { read: IgxTreeGridComponent }) public treeGrid: IgxTreeGridComponent;
    @ViewChild(IgxToggleDirective) public toggle: IgxToggleDirective;
    @ViewChild("dialogGrid", { read: IgxGridComponent }) public dialogGrid: IgxGridComponent;

    public data: any[];
    public firstNames = ["Conor", "Mike", "Tyson", "Kubrat"];
    public lastNames = ["McGregor", "Tyson", "Fury", "Pulev"];
    private addEmployeeID: number;

    constructor() {
        this.data = FLAT_DATA;
        this.addEmployeeID = this.data.length + 1;
    }

    public addRow(gridID) {
        const nameIndex = this.getRandomInt(0, 3);
        this.treeGrid.addRow({
            EmployeID: this.addEmployeeID++,
            FirstName: this.firstNames[nameIndex],
            HireDate: this.getRandomDate(new Date(2013, 5, 7), new Date(2018, 1, 11)),
            LastName: this.lastNames[nameIndex],
            PID: -1,
            Title: "Champion"
        });
    }

    public deleteRow(event, gridID, rowID) {
        this.treeGrid.deleteRow(rowID);
    }

    public undo(gridID) {
        this.treeGrid.transactions.undo();
    }

    public redo(gridID) {
        this.treeGrid.transactions.redo();
    }

    public openCommitDialog(gridID) {
        this.toggle.open();
        this.dialogGrid.reflow();
    }

    public commit() {
        this.treeGrid.transactions.commit(this.data);
        this.toggle.close();
    }

    public cancel() {
        this.toggle.close();
    }

    public discard() {
        this.treeGrid.transactions.clear();
    }

    public stateFormatter(value: string) {
        return JSON.stringify(value);
    }

    public typeFormatter(value: string) {
        return value.toUpperCase();
    }

    private getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private getRandomDate(from, to) {
        from = from.getTime();
        to = to.getTime();
        return new Date(from + Math.random() * (to - from));
    }

    private classFromType(type: string): string {
        return `transaction--${type.toLowerCase()}`;
    }

    public get undoEnabled(): boolean {
        return this.treeGrid.transactions.canUndo;
    }

    public get redoEnabled(): boolean {
        return this.treeGrid.transactions.canRedo;
    }

    public get hasTransactions(): boolean {
        return (this.treeGrid.transactions.aggregatedState(false) || []).length > 0;
    }
}
