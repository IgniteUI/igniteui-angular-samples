import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxSnackbarComponent, IgxTreeGridComponent } from 'igniteui-angular';
import { generateEmployeeFlatData } from '../data/employees-flat';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'tree-grid-cellSelection',
    styleUrls: ['./tree-grid-cellSelection.component.scss'],
    templateUrl: 'tree-grid-cellSelection.component.html'
})
export class TreeGridCellSelectionComponent implements OnInit {

    @ViewChild('treegrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    @ViewChild(IgxSnackbarComponent, { static: true }) public snackbar: IgxSnackbarComponent;

    public data: any[];
    public selection = true;
    public selectionMode = 'multiple';
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
        this.snackbar.show();
    }

    public selectCellSelectionMode(args) {
        this.selectionMode = this.selectionModes[args.index].label;
        this.snackbar.show();
    }
}
