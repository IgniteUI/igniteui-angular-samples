import { Component, OnInit, ViewChild } from '@angular/core';
import { IGridKeydownEventArgs, CellType, IgxGridComponent, GridSelectionMode } from '@infragistics/igniteui-angular';
import { DATA } from '../../data/nwindData';

@Component({
    selector: 'app-grid-custom-kb-navigation-sample',
    styleUrls: ['./grid-custom-kb-navigation-sample.component.scss'],
    templateUrl: 'grid-custom-kb-navigation-sample.component.html'
})

export class GridCustomKBNavigationComponent implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;
    public selectionMode: GridSelectionMode = 'multiple';
    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
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
            if (target.column.dataType === 'number' && target.editValue < 10) {
                alert('The value should be bigger than 10');
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
            this.grid1.navigateTo(target.row.index + 1, target.column.visibleIndex, (obj) => {
                obj.target.activate();
            });
        }
    }
}
