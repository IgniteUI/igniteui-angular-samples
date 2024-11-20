import { Component, ViewChild } from '@angular/core';
import { GridSelectionMode, IDropDroppedEventArgs, IgxTreeGridComponent, IgxDropDirective, IgxIconComponent, IgxPaginatorComponent, IgxColumnComponent, IgxRowDragGhostDirective } from 'igniteui-angular';
import { FULL_EMPLOYEE_DATA } from '../data/employees';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-multi-row-drag',
    styleUrls: ['tree-grid-multi-row-drag.component.scss'],
    templateUrl: 'tree-grid-multi-row-drag.component.html',
    imports: [IgxDropDirective, IgxIconComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxRowDragGhostDirective]
})
export class TreeGridMultiRowDragComponent {
    @ViewChild(IgxTreeGridComponent, { read: IgxTreeGridComponent, static: true })
    public treeGrid: IgxTreeGridComponent;
    public selectionMode: GridSelectionMode = 'multiple';
    public selected = false;
    public ids;
    public countIcon = 'drag_indicator';
    public dragIcon = 'keyboard_backspace';
    public localData = [];
    constructor() {
        this.localData = FULL_EMPLOYEE_DATA();
    }

    public onRowDragEnd(args) {
        args.animation = true;
    }

    public handleRowSelectionChange(args) {
        this.ids = args.newSelection;
        this.selected = this.ids.length !== 0;
    }

    public onDropAllowed(args: IDropDroppedEventArgs) {
        if (this.selected === false) {
            const draggedRow = args.dragData;
            draggedRow.delete();
        } else {
            this.ids.forEach((rowData) => {
                this.treeGrid.deleteRow(rowData['ID']);
            });
            this.selected = false;
        }
    }

    public onRowDragStart(args) {
        if (this.selected === false) {
            this.countIcon = `filter_1`;
        } else {
            const count = this.ids.length;
            this.countIcon = `filter_${count > 9 ? '9_plus' : `${count}`}`;
        }
    }

    public onLeaveAllowed(args) {
        this.onRowDragStart(args);
        this.dragIcon = 'keyboard_backspace';
    }

    public onEnterAllowed(args) {
        this.dragIcon = 'remove';
    }
}
