import { Component, OnInit, ViewChild } from '@angular/core';
import { IGridCreatedEventArgs, IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { CellType, IGridKeydownEventArgs, IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarComponent, IgxGridToolbarDirective, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-hierarchical-grid-custom-kb-navigation-sample',
    styleUrls: ['./hierarchical-grid-custom-kb-navigation-sample.component.scss'],
    templateUrl: 'hierarchical-grid-custom-kb-navigation-sample.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxGridToolbarDirective, IgxGridToolbarComponent, IgxGridToolbarTitleComponent]
})

export class HGridCustomKBNavigationComponent implements OnInit {
    @ViewChild('grid1', { read: IgxHierarchicalGridComponent, static: true })
    public grid1: IgxHierarchicalGridComponent;

    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = SINGERS;
    }

    public formatter = (a) => a;

    public childGridCreated(event: IGridCreatedEventArgs) {
        const grid = event.grid;
        event.grid.gridKeydown.subscribe((args) => {
            this.customKeydown(args, grid);
        });
    }

    public customKeydown(args: IGridKeydownEventArgs, grid) {
        const target: CellType = args.target as CellType;
        const evt: KeyboardEvent = args.event as KeyboardEvent;
        const type = args.targetType;

        if (type === 'dataCell' && target.editMode && evt.key.toLowerCase() === 'tab') {
            // Value validation for number column.
            // This covers both 'tab' and 'shift+tab' key interactions.
            args.event.preventDefault();
            args.cancel = true;
            if (target.column.dataType === 'number' && target.editValue < 0) {
                alert('The value should be less than 0');
                return;
            }
            const cell = evt.shiftKey ?
                grid.getPreviousCell(target.row.index, target.column.visibleIndex, (col) => col.editable) :
                grid.getNextCell(target.row.index, target.column.visibleIndex, (col) => col.editable);

            grid.navigateTo(cell.rowIndex, cell.visibleColumnIndex,
                (obj) => { obj.target.activate(); });
        } else if (type === 'dataCell' && evt.key.toLowerCase() === 'enter') {
            // Perform column based kb navigation with 'enter' key press
            args.cancel = true;
            const nexRowIndex = target.row.expanded ? target.row.index + 2 : target.row.index + 1;
            grid.navigateTo(nexRowIndex, target.column.visibleIndex,
                (obj) => { obj.target.activate(); });
        }
    }
}
