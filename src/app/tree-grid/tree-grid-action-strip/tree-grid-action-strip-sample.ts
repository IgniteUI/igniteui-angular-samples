import { Component, ViewChild } from '@angular/core';
import { IgxTreeGridComponent, RowType, Transaction, IgxColumnComponent, IgxActionStripComponent, IgxGridPinningActionsComponent, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent } from 'igniteui-angular';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-tree-grid-row-action-strip',
    styleUrls: [`tree-grid-action-strip-sample.scss`],
    templateUrl: 'tree-grid-action-strip-sample.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxActionStripComponent, IgxGridPinningActionsComponent, NgIf, IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent]
})
export class TreeGridActionStripSampleComponent {
    @ViewChild('treeGrid', { read: IgxTreeGridComponent, static: true }) public grid: IgxTreeGridComponent;

    public data: any[];
    public discardedTransactionsPerRecord: Map<number, Transaction[]> = new Map<number, Transaction[]>();

    constructor() {
        this.data = generateEmployeeDetailedFlatData();
    }

    public isDirty(rowContext: RowType) {
        const isRowEdited = this.grid.transactions.getAggregatedChanges(true).find(x => x.id === rowContext?.key);
        return rowContext && (rowContext.deleted || isRowEdited);
    }

    public isDeleted(rowContext: RowType) {
        return rowContext && rowContext.deleted;
    }

    public inEditMode(rowContext: RowType) {
        return rowContext && rowContext.inEditMode;
    }

    public startEdit(rowContext: RowType): void {
        const firstEditable = rowContext.cells.filter(cell => cell.editable)[0];
        const grid = rowContext.grid;

        if (grid.rowList.filter(r => r === rowContext).length !== 0) {
            grid.gridAPI.crudService.enterEditMode(firstEditable);
            firstEditable.activate(null);
        }
    }

    public commit(rowContext: RowType) {
        this.grid.transactions.commit(this.grid.data, rowContext.key);
        this.discardedTransactionsPerRecord.set(rowContext.key, []);
    }

    public redo(rowContext: RowType) {
        const rowID = rowContext.key;
        const lastDiscarded = this.discardedTransactionsPerRecord.get(rowID);
        lastDiscarded.forEach((transaction) => {
            const recRef = this.grid.gridAPI.get_rec_by_id(transaction.id);
            this.grid.transactions.add(transaction, recRef);
        });
        this.discardedTransactionsPerRecord.set(rowID, []);
    }

    public hasDiscardedTransactions(rowContext: RowType) {
        if (!rowContext) { return false; }
        const lastDiscarded = this.discardedTransactionsPerRecord.get(rowContext.key);
        return lastDiscarded && lastDiscarded.length > 0;
    }

    public undo(rowContext: RowType) {
        const transactionsToDiscard = this.grid.transactions.getAggregatedChanges(true)
        .filter(x => x.id === rowContext.key);
        this.discardedTransactionsPerRecord.set(rowContext.key, transactionsToDiscard);
        this.grid.transactions.clear(rowContext.key);
    }
}
