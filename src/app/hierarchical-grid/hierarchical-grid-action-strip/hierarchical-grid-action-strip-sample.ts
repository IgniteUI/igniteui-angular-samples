import { Component, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent, RowType, Transaction } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';


@Component({
    selector: 'app-hierarchical-grid-row-action-strip',
    styleUrls: [`hierarchical-grid-action-strip-sample.scss`],
    templateUrl: 'hierarchical-grid-action-strip-sample.html'
})
export class HierarchicalGridActionStripSampleComponent {
    @ViewChild('gridRowEditTransaction', { read: IgxHierarchicalGridComponent, static: true }) public grid: IgxHierarchicalGridComponent;

    public currentActiveGrid: { id: string; transactions: any[] } = { id: '', transactions: [] };

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

    public isDirty(rowContext: RowType) {
        return rowContext && rowContext.deleted;
    }

    public isDeleted(rowContext: RowType) {
        return rowContext && rowContext.deleted;
    }

    public startEdit(row?): void {
        const firstEditable = row.cells.filter(cell => cell.editable)[0];
        const grid = row.grid;

        if (grid.rowList.filter(r => r === row).length !== 0) {
            grid.gridAPI.crudService.enterEditMode(firstEditable, event);
            firstEditable.activate();
        }
        row.hide();
    }

    public commit(rowContext: RowType) {
        this.grid.transactions.commit(this.grid.data, rowContext.rowID);
        this.discardedTransactionsPerRecord.set(rowContext.rowID, []);
    }

    public redo(rowContext: RowType) {
        const rowID = rowContext.rowID;
        const lastDiscarded = this.discardedTransactionsPerRecord.get(rowID);
        lastDiscarded.forEach((transaction) => {
            const recRef = this.grid.gridAPI.get_rec_by_id(transaction.id);
            this.grid.transactions.add(transaction, recRef);
        });
        this.discardedTransactionsPerRecord.set(rowID, []);
    }

    public hasDiscardedTransactions(rowContext: RowType) {
        if (!rowContext) { return false; }
        const lastDiscarded = this.discardedTransactionsPerRecord.get(rowContext.rowID);
        return lastDiscarded && lastDiscarded.length > 0;
    }

    public undo(rowContext: RowType) {
        const transactionsToDiscard = this.grid.transactions.getAggregatedChanges(true)
            .filter(x => x.id === rowContext.rowID);
        this.discardedTransactionsPerRecord.set(rowContext.rowID, transactionsToDiscard);
        this.grid.transactions.clear(rowContext.rowID);
    }
}