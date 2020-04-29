import { Component, OnInit, ViewChild } from "@angular/core";
import { DATA } from "../../data/nwindData";
import { generateRandomInteger } from "../../data/utils";

import { IgxGridComponent, IgxGridRowComponent, Transaction } from "igniteui-angular";

@Component({
    selector: "app-grid-row-action-strip",
    styleUrls: [`grid-action-strip-sample.scss`],
    templateUrl: "grid-action-strip-sample.html"
})
export class GridActionStripSampleComponent {
    @ViewChild("gridRowEditTransaction", { read: IgxGridComponent, static: true }) public grid: IgxGridComponent;

    public currentActiveGrid: { id: string, transactions: any[] } = { id: "", transactions: [] };

    public data: any[];
    public discardedTransactionsPerRecord: Map<number, Transaction[]> = new Map<number, Transaction[]>();

    constructor() {
        this.data = DATA;
    }

    public stateFormatter(value: string) {
        return JSON.stringify(value);
    }

    public typeFormatter(value: string) {
        return value.toUpperCase();
    }

    public onMouseOver(event, grid, actionStrip) {
        if (event.target.nodeName.toLowerCase() === "igx-grid-cell") {
            const rowIndex = parseInt(event.target.attributes["data-rowindex"].value, 10);
            const row = grid.getRowByIndex(rowIndex);
            actionStrip.show(row);
        }
    }

    public onMouseLeave(actionstrip, event?) {
        if (!event || event.relatedTarget.nodeName.toLowerCase() !== "igx-drop-down-item") {
            actionstrip.hide();
        }
    }

    public isDirty(rowContext: IgxGridRowComponent) {
        return rowContext && (rowContext.dirty || rowContext.deleted);
    }

    public isDeleted(rowContext: IgxGridRowComponent) {
        return rowContext && rowContext.deleted;
    }

    public commit(rowContext: IgxGridRowComponent) {
        this.grid.transactions.commit(this.grid.data, rowContext.rowID);
        this.discardedTransactionsPerRecord.set(rowContext.rowID, []);
    }

    public redo(rowContext: IgxGridRowComponent) {
        const rowID = rowContext.rowID;
        const lastDiscarded = this.discardedTransactionsPerRecord.get(rowID);
        lastDiscarded.forEach((transaction) => {
            const recRef = this.grid.gridAPI.get_rec_by_id(transaction.id);
            this.grid.transactions.add(transaction, recRef);
        });
        this.discardedTransactionsPerRecord.set(rowID, []);
    }

    public hasDiscardedTransactions(rowContext: IgxGridRowComponent) {
        if (!rowContext) { return false; }
        const lastDiscarded = this.discardedTransactionsPerRecord.get(rowContext.rowID);
        return lastDiscarded && lastDiscarded.length > 0;
    }

    public undo(rowContext: IgxGridRowComponent) {
        const transactionsToDiscard = this.grid.transactions.getAggregatedChanges(true)
        .filter(x => x.id === rowContext.rowID);
        this.discardedTransactionsPerRecord.set(rowContext.rowID, transactionsToDiscard);
        this.grid.transactions.clear(rowContext.rowID);
    }
}
