import { Component, ViewChild } from "@angular/core";
import { data } from "./data";

import { IgxGridComponent, IgxToggleDirective, ITransaction } from "igniteui-angular";

@Component({
    selector: "app-grid-row-edit",
    styleUrls: [`grid-row-editing-sample.component.css`],
    templateUrl: "grid-row-editing-sample.component.html"
})
export class GridRowEditSampleComponent {
    @ViewChild("gridRowEdit", { read: IgxGridComponent }) public gridRowEdit: IgxGridComponent;
    @ViewChild("gridRowEditTransaction", { read: IgxGridComponent }) public gridRowEditTransaction: IgxGridComponent;
    @ViewChild("grid", { read: IgxGridComponent }) public grid: IgxGridComponent;
    @ViewChild("gridTransaction", { read: IgxGridComponent }) public gridTransaction: IgxGridComponent;
    @ViewChild(IgxToggleDirective) public toggle: IgxToggleDirective;

    public currentActiveGrid: {
        id: string,
        transactions: any[]
    } = {
        id: "",
        transactions: []
    };

    private data: any[];
    private addProductId: number;

    constructor() {
        this.data = data;
        this.addProductId = this.data.length + 1;
    }

    public addRow(gridID) {
        const currentGrid: IgxGridComponent = this.getGridById(gridID);
        currentGrid.addRow({
            CategoryID: this.getRandomInt(1, 10),
            Discontinued: this.getRandomInt(1, 10) % 2 === 0,
            Discontinued2: this.getRandomInt(1, 10) % 2 === 0,
            OrderDate: new Date(this.getRandomInt(2000, 2050), this.getRandomInt(0, 11), this.getRandomInt(1, 25))
            .toISOString().slice(0, 10),
            OrderDate2: new Date(this.getRandomInt(2000, 2050), this.getRandomInt(0, 11), this.getRandomInt(1, 25))
                .toISOString().slice(0, 10),
            ProductID: this.addProductId++,
            ProductName: "Product with index " + this.getRandomInt(0, 20),
            QuantityPerUnit: (this.getRandomInt(1, 10) * 10).toString() + " pcs.",
            ReorderLevel: this.getRandomInt(10, 20),
            ReorderLevel2: this.getRandomInt(10, 20),
            SupplierID: this.getRandomInt(1, 20),
            UnitPrice: this.getRandomInt(10, 1000),
            UnitPrice2: this.getRandomInt(10, 1000),
            UnitsInStock: this.getRandomInt(1, 100),
            UnitsInStock2: this.getRandomInt(1, 100),
            UnitsOnOrder: this.getRandomInt(1, 20),
            UnitsOnOrder2: this.getRandomInt(1, 20)
        });
        this.refresh(currentGrid);
    }

    public deleteRow(event, gridID, rowID) {
        event.stopPropagation();
        switch (gridID) {
            case "gridRowEdit":
            case "grid":
                this.data.splice(rowID - 1, 1);
                break;
            case "gridRowEditTransaction":
                this.gridRowEditTransaction.deleteRow(rowID);
                break;
            case "gridTransaction":
                this.gridTransaction.deleteRow(rowID);
                break;
        }

        this.refreshAll();
    }

    public undo(gridID) {
        const currentGrid: IgxGridComponent = this.getGridById(gridID);
        currentGrid.transactions.undo();
        this.refresh(currentGrid);
    }

    public redo(gridID) {
        const currentGrid: IgxGridComponent = this.getGridById(gridID);
        currentGrid.transactions.redo();
        this.refresh(currentGrid);
    }

    public openCommitDialog(gridID) {
        const currentGrid: IgxGridComponent = this.getGridById(gridID);
        this.currentActiveGrid = {
            id: gridID,
            transactions: (currentGrid.transactions.getTransactionLog() as ITransaction[]).map((e) => {
                return `ID: ${e.id}, newValue: ${JSON.stringify(e.newValue)}, type: ${e.type}`;
            })
        };
        this.toggle.open();
    }
    public commit(gridID) {
        const currentGrid: IgxGridComponent = this.getGridById(gridID);
        currentGrid.transactions.commit(this.data);
        this.toggle.close();
        this.refreshAll();
    }

    public refreshAll(): void {
        this.refresh(this.getGridById("grid"));
        this.refresh(this.getGridById("gridRowEdit"));
        this.refresh(this.getGridById("gridTransaction"));
        this.refresh(this.getGridById("gridRowEditTransaction"));
    }

    private getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private getGridById(gridID): IgxGridComponent {
        switch (gridID) {
            case "grid":
                return this.grid;
            case "gridRowEdit":
                return this.gridRowEdit;
            case "gridTransaction":
                return this.gridTransaction;
            case "gridRowEditTransaction":
                return this.gridRowEditTransaction;
        }

        return null;
    }

    private refresh(grid: IgxGridComponent): void {
        (grid as any)._pipeTrigger++;
        (grid as any).cdr.markForCheck();
    }
}
