import { Component, OnInit, ViewChild } from '@angular/core';
import { GridSelectionMode, IRowSelectionEventArgs, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxSnackbarComponent } from 'igniteui-angular/snackbar';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { generateEmployeeFlatData } from '../data/employees-flat';
import { FormsModule } from '@angular/forms';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-selection-sample',
    styleUrls: ['./tree-grid-selection-sample.component.scss'],
    templateUrl: './tree-grid-selection-sample.component.html',
    imports: [IgxSwitchComponent, FormsModule, IgxButtonGroupComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxSnackbarComponent, IgxIconComponent]
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
