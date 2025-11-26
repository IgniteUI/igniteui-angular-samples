/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxDialogComponent, IgxHierarchicalGridComponent, IgxRowIslandComponent, Transaction, IgxButtonDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxGridToolbarDirective, IgxGridToolbarComponent, IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxCheckboxComponent, IgxGridComponent } from 'igniteui-angular';
import { SINGERS } from '../../data/singersData';
import { Singer } from '../models';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-hierarchical-grid-batch-editing',
    styleUrls: ['./hierarchical-grid-batch-editing.component.scss'],
    templateUrl: 'hierarchical-grid-batch-editing.component.html',
    imports: [IgxButtonDirective, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxGridToolbarDirective, IgxGridToolbarComponent, IgxDialogComponent, IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxCheckboxComponent, IgxGridComponent]
})

export class HGridBatchEditingSampleComponent implements OnInit {
    @ViewChild('dialogChanges', { read: IgxDialogComponent, static: true })
    public dialogChanges: IgxDialogComponent;

    @ViewChild('childGrid', { static: true })
    private childGrid: IgxRowIslandComponent;

    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    @ViewChild('dialogAddSinger', { read: IgxDialogComponent, static: true })
    private dialogSinger: IgxDialogComponent;

    public get undoEnabledParent(): boolean {
        return this.hierarchicalGrid.transactions.canUndo;
    }

    public get redoEnabledParent(): boolean {
        return this.hierarchicalGrid.transactions.canRedo;
    }

    public get hasTransactions(): boolean {
        return this.hierarchicalGrid.transactions.getAggregatedChanges(false).length > 0 || this.hasChildTransactions;
    }

    public get hasChildTransactions(): boolean {
        return this.childGrid.gridAPI.getChildGrids()
            .find(c => c.transactions.getAggregatedChanges(false).length > 0) !== undefined;
    }

    public data: Singer[];
    public singer: Singer;
    public transactionsDataAll: Transaction[] = [];
    private id = 14;

    constructor() {}

    public ngOnInit(): void {
        this.data = SINGERS;
        this.singer = {
            ID: this.id,
            Artist: 'Mock Jagger',
            Debut: 2005,
            GrammyAwards: 4,
            GrammyNominations: 7,
            HasGrammyAward: false
        };
    }

    public formatter = a => a;

    public undo(grid: any) {
        /* exit edit mode and commit changes */
        const hGrid = grid as IgxHierarchicalGridComponent;
        hGrid.endEdit(true);
        hGrid.transactions.undo();
    }

    public redo(grid: any) {
        /* exit edit mode and commit changes */
        const hGrid = grid as IgxHierarchicalGridComponent;
        hGrid.endEdit(true);
        hGrid.transactions.redo();
    }

    public commit() {
        this.hierarchicalGrid.transactions.commit(this.data);
        this.childGrid.gridAPI.getChildGrids().forEach((grid) => {
            grid.transactions.commit(grid.data);
        });
        this.dialogChanges.close();
    }

    public discard() {
        this.hierarchicalGrid.transactions.clear();
        this.childGrid.gridAPI.getChildGrids().forEach((grid) => {
            grid.transactions.clear();
        });
        this.dialogChanges.close();
    }

    public openCommitDialog() {
        this.transactionsDataAll = [...this.hierarchicalGrid.transactions.getAggregatedChanges(true)];
        this.childGrid.gridAPI.getChildGrids().forEach((grid) => {
            this.transactionsDataAll = this.transactionsDataAll.concat(grid.transactions.getAggregatedChanges(true));
        });
        this.dialogChanges.open();
    }

    public addSinger() {
        this.hierarchicalGrid.addRow(this.singer);
        ++this.id;
        this.cancel();
    }

    public removeRow(rowIndex) {
        const row = this.hierarchicalGrid.getRowByIndex(rowIndex);
        row.delete();
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

    public cancel() {
        this.dialogChanges.close();
        this.dialogSinger.close();
        this.singer = {
            ID: this.id,
            Artist: 'Mock Jagger',
            Debut: 2005,
            GrammyAwards: 4,
            GrammyNominations: 7,
            HasGrammyAward: false
        };
    }
}
