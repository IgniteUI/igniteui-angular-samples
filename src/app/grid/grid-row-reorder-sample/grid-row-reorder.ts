import { Component, QueryList, ViewChild } from '@angular/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxColumnComponent, IgxRowDirective, RowType } from 'igniteui-angular/grids/core';
import { IgxDropDirective } from 'igniteui-angular/directives';
import { DATA } from '../../data/customers';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-grid-row-reorder-sample',
    styleUrls: ['grid-row-reorder.scss'],
    templateUrl: 'grid-row-reorder.html',
    imports: [IgxGridComponent, IgxDropDirective, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class GridRowReorderComponent {
    @ViewChild('grid', { read: IgxGridComponent, static : true })
    public grid: IgxGridComponent;
    public data: any[];

    constructor() {
        this.data = [...DATA];
    }

    public onDropAllowed(args) {
        const event = args.originalEvent;
        const currRowIndex = this.getCurrentRowIndex(this.grid.rowList.toArray(),
            { x: event.clientX, y: event.clientY });
        if (currRowIndex === -1) { return; }
        this.grid.deleteRow(args.dragData.key);
        this.data.splice(currRowIndex, 0, args.dragData.data);
        this.data = [...this.data];
    }

    private getCurrentRowIndex(rowList: IgxRowDirective[], cursorPosition) {
        for (const row of rowList) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top && cursorPosition.y < rowRect.bottom &&
                cursorPosition.x > rowRect.left && cursorPosition.x < rowRect.right) {
                return this.data.indexOf(this.data.find((r) => r.ID === row.key));
            }
        }

        return -1;
    }
}
