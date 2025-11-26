import { Component, OnInit, ViewChild } from '@angular/core';
import { IGridKeydownEventArgs, CellType, IgxTreeGridComponent, GridSelectionMode, IgxPaginatorComponent, IgxColumnComponent } from 'igniteui-angular';
import { EMPLOYEE_DATA } from './data';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-keyboard-navigation-sample',
    styleUrls: ['./tree-grid-keyboard-navigation-sample.component.scss'],
    templateUrl: './tree-grid-keyboard-navigation-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent]
})
export class TreeGridKBNavigationComponent implements OnInit {
    @ViewChild('grid1', { read: IgxTreeGridComponent, static: true })
    public grid1: IgxTreeGridComponent;
    public localData: any[];
    public selectionMode: GridSelectionMode = 'multiple';
    constructor() { }

    public ngOnInit() {
        this.localData = EMPLOYEE_DATA;
    }

    public customKeydown(args: IGridKeydownEventArgs) {
        const target: CellType = args.target as CellType;
        const evt: KeyboardEvent = args.event as KeyboardEvent;
        const type = args.targetType;

        if (type === 'dataCell' && target.editMode && evt.key.toLowerCase() === 'tab') {
            // Value validation for number column.
            // This covers both 'tab' and 'shift+tab' key interactions.
            args.event.preventDefault();
            args.cancel = true;
            if (target.column.dataType === 'number' && target.editValue < 18) {
                alert('The value should be bigger than 18');
                return;
            }
            const cell = evt.shiftKey ?
                this.grid1.getPreviousCell(target.row.index, target.column.visibleIndex, (col) => col.editable) :
                this.grid1.getNextCell(target.row.index, target.column.visibleIndex, (col) => col.editable);

            this.grid1.navigateTo(cell.rowIndex, cell.visibleColumnIndex,
                (obj) => { obj.target.activate(); });
        } else if (type === 'dataCell' && evt.key.toLowerCase() === 'enter') {
            // Perform column based kb navigation with 'enter' key press
            args.cancel = true;
            this.grid1.navigateTo(target.row.index + 1, target.column.visibleIndex,
                (obj) => { obj.target.activate(); });
        }
    }
}
