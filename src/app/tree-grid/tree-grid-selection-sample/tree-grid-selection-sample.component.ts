import { Component, OnInit, ViewChild } from '@angular/core';
import { GridSelectionMode, IgxSnackbarComponent, IgxTreeGridComponent, IRowSelectionEventArgs } from 'igniteui-angular';
import { generateEmployeeFlatData } from '../data/employees-flat';

@Component({
    selector: 'app-tree-grid-selection-sample',
    styleUrls: ['./tree-grid-selection-sample.component.scss'],
    templateUrl: './tree-grid-selection-sample.component.html'
})
export class TreeGridSelectionSampleComponent implements OnInit {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    @ViewChild('snackbarRowCount', { static: true }) public snackbarRowCount: IgxSnackbarComponent;
    @ViewChild('snackbar', { static: true }) public snackbar: IgxSnackbarComponent;
    public data: any[];
    public selectionMode: GridSelectionMode = 'multiple';
    public selectionModes = [];
    public hideRowSelectors = false;
    public selectedRows = [1, 2, 3];
    public selectedRowsCount;
    public selectedRowIndex;

    constructor() {
        this.data = generateEmployeeFlatData();

        this.selectionModes = [
            { label: 'none', selectMode: 'none', selected: this.selectionMode === 'none', togglable: true },
            { label: 'single', selectMode: 'single', selected: this.selectionMode === 'single', togglable: true },
            { label: 'multiple', selectMode: 'multiple', selected: this.selectionMode === 'multiple', togglable: true },
            { label: 'cascade', selectMode: 'multipleCascade', selected: this.selectionMode === 'multipleCascade', togglable: true }
        ];
    }

    public ngOnInit(): void {
        this.snackbar.autoHide = false;
        this.snackbar.open();
    }

    public handleRowSelection(event: IRowSelectionEventArgs) {
        this.selectedRowsCount = event.newSelection.length;
        this.selectedRowIndex = event.newSelection[0];
        this.snackbarRowCount.open();
        this.snackbar.close();
    }

    public selectCellSelectionMode(args) {
        this.selectionMode = this.selectionModes[args.index].selectMode;
        this.snackbarRowCount.close();
        this.snackbar.open();
        this.selectedRowsCount = undefined;
        this.selectedRowIndex = undefined;
    }
}
