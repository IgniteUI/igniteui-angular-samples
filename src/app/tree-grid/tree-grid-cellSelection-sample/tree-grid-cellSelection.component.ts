import { Component, OnInit, ViewChild } from '@angular/core';
import { GridSelectionMode, IgxSnackbarComponent, IgxTreeGridComponent, IgxButtonGroupComponent, IgxColumnComponent, IgxIconComponent } from 'igniteui-angular';
import { generateEmployeeFlatData } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-cell-selection',
    styleUrls: ['./tree-grid-cellSelection.component.scss'],
    templateUrl: 'tree-grid-cellSelection.component.html',
    imports: [IgxButtonGroupComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxSnackbarComponent, IgxIconComponent]
})
export class TreeGridCellSelectionComponent implements OnInit {

    @ViewChild('treegrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    @ViewChild(IgxSnackbarComponent, { static: true }) public snackbar: IgxSnackbarComponent;

    public data: any[];
    public selection = true;
    public selectionMode: GridSelectionMode = 'multiple';
    public selectionModes = [];

    constructor() { }

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
        this.selectionModes = [
            { label: 'none', selected: this.selectionMode === 'none', togglable: true },
            { label: 'single', selected: this.selectionMode === 'single', togglable: true },
            { label: 'multiple', selected: this.selectionMode === 'multiple', togglable: true }
        ];
        this.snackbar.autoHide = false;
        this.snackbar.open();
    }

    public selectCellSelectionMode(args) {
        this.selectionMode = this.selectionModes[args.index].label;
        this.snackbar.open();
    }
}
