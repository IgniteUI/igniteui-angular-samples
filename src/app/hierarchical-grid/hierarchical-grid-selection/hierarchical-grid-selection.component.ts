import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IgxSnackbarComponent, IRowSelectionEventArgs } from 'igniteui-angular';
import { SINGERS } from '../../data/singersData';

@Component({
    selector: 'app-hierarchical-grid-selection',
    styleUrls: ['./hierarchical-grid-selection.component.scss'],
    templateUrl: 'hierarchical-grid-selection.component.html'
})

export class HGridSelectionSampleComponent implements OnInit, OnDestroy {
    @ViewChild('snackbarRowCount', { static: true }) public snackbarRowCount: IgxSnackbarComponent;
    @ViewChild('snackbar', { static: true }) public snackbar: IgxSnackbarComponent;
    public localdata;
    public selectionMode = 'multiple';
    public selectionModes = [];
    public hideRowSelectors = false;
    public selectedRowsCount;
    public selectedRowIndex;

    constructor() {
        this.localdata = SINGERS;
        this.selectionModes = [
            { label: 'none', selected: this.selectionMode === 'none', togglable: true },
            { label: 'single', selected: this.selectionMode === 'single', togglable: true },
            { label: 'multiple', selected: this.selectionMode === 'multiple', togglable: true }
        ];
    }
    public ngOnInit(): void {
        this.snackbar.autoHide = false;
        this.snackbar.open();
    }

    public ngOnDestroy(): void {
        this.snackbar.close();
    }

    public selectCellSelectionMode(args) {
        this.selectionMode = this.selectionModes[args.index].label;
        this.snackbarRowCount.close();
        this.snackbar.open();
        this.selectedRowsCount = undefined;
        this.selectedRowIndex = undefined;
    }

    public handleRowSelection(event:IRowSelectionEventArgs) {
        this.selectedRowsCount = event.newSelection.length;
        if(event.newSelection.length > 0){
            this.selectedRowIndex = event.newSelection[0].ID;
        }
        else this.selectedRowIndex = undefined;
        this.snackbarRowCount.open();
        this.snackbar.close();
    }

    public formatter = (a) => a;

}
