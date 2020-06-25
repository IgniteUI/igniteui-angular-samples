import { Component, OnInit, ViewChild } from "@angular/core";
import { DATA } from "../../data/nwindData";
import { generateRandomInteger } from "../../data/utils";

import { IgxDialogComponent, IgxGridComponent, Transaction } from "igniteui-angular";

@Component({
    selector: "app-grid-row-edit",
    styleUrls: [`grid-batch-editing-sample.component.css`],
    templateUrl: "grid-batch-editing-sample.component.html"
})
export class GridBatchEditingSampleComponent implements OnInit {
    @ViewChild("gridRowEditTransaction", { read: IgxGridComponent, static: true }) public grid: IgxGridComponent;
    @ViewChild(IgxDialogComponent, { static: true }) public dialog: IgxDialogComponent;
    @ViewChild("dialogGrid", { read: IgxGridComponent, static: true }) public dialogGrid: IgxGridComponent;

    public currentActiveGrid: { id: string, transactions: any[] } = { id: "", transactions: [] };

    public data: any[];
    public transactionsData: Transaction[] = [];
    private addProductId: number;

    constructor() {
        this.data = DATA;
        this.addProductId = this.data.length + 1;
    }

    public ngOnInit(): void {
        this.transactionsData = this.grid.transactions.getAggregatedChanges(true);
        this.grid.transactions.onStateUpdate.subscribe(() => {
            this.transactionsData = this.grid.transactions.getAggregatedChanges(true);
        });
    }

    public addRow() {
        this.grid.addRow({
            CategoryID: generateRandomInteger(1, 10),
            Discontinued: generateRandomInteger(1, 10) % 2 === 0,
            OrderDate: new Date(generateRandomInteger(2000, 2050),
            generateRandomInteger(0, 11), generateRandomInteger(1, 25))
            .toISOString().slice(0, 10),
            ProductID: this.addProductId++,
            ProductName: "Product with index " + generateRandomInteger(0, 20),
            QuantityPerUnit: (generateRandomInteger(1, 10) * 10).toString() + " pcs.",
            ReorderLevel: generateRandomInteger(10, 20),
            SupplierID: generateRandomInteger(1, 20),
            UnitPrice: generateRandomInteger(10, 1000),
            UnitsInStock: generateRandomInteger(1, 100),
            UnitsOnOrder: generateRandomInteger(1, 20)
        });
    }

    public deleteRow(rowID) {
        this.grid.deleteRow(rowID);
    }

    public undo() {
        this.grid.transactions.undo();
    }

    public redo() {
        this.grid.transactions.redo();
    }

    public openCommitDialog() {
        this.dialog.open();
        this.dialogGrid.reflow();
    }

    public commit() {
        this.grid.transactions.commit(this.data);
        this.dialog.close();
    }

    public cancel() {
        this.dialog.close();
    }

    public discard() {
        this.grid.transactions.clear();
        this.dialog.close();
    }

    public stateFormatter(value: string) {
        return JSON.stringify(value);
    }

    public typeFormatter(value: string) {
        return value.toUpperCase();
    }

    public classFromType(type: string): string {
        return `transaction--${type.toLowerCase()}`;
    }

    public get undoEnabled(): boolean {
        return this.grid.transactions.canUndo;
    }

    public get redoEnabled(): boolean {
        return this.grid.transactions.canRedo;
    }

    public get hasTransactions(): boolean {
        return this.grid.transactions.getAggregatedChanges(false).length > 0;
    }
}
