import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
    IBaseChipEventArgs, IChipsAreaReorderEventArgs, IgxColumnComponent, IgxDropDirective, IgxTreeGridComponent
} from 'igniteui-angular';

@Component({
    selector: 'app-igx-tree-grid-group-area',
    styleUrls: ['./tree-grid-group-area.component.scss'],
    templateUrl: './tree-grid-group-area.component.html'
})

export class IgxTreeGridGroupAreaComponent {
    @Input() grid: IgxTreeGridComponent;
    @Input() groupColumnKey: string;

    @Input() groupColumns: string[];
    @Output() groupColumnsChange = new EventEmitter<string[]>();

    public onGroupColumnRemoved(event: IBaseChipEventArgs) {
        const columnName = event.owner.id;
        this.groupColumns = this.groupColumns.filter(item => item !== columnName);

        this.groupColumnsChange.emit(this.groupColumns);
        this.onColumnHiddenChange(columnName, false);
    }

    public onGroupAreaEnter(event) {
        const column: IgxColumnComponent = event.dragData;
        if (this.groupColumns.indexOf(column.field) < 0 && column.groupable) {
            event.drag.icon.innerText = 'group_work';
        }
    }

    public onGroupAreaLeave(event) {
        event.drag.icon.innerText = 'block';
    }

    public onGroupColumnDropped(event) {
        const drag: IgxDropDirective = event.owner;
        if (drag instanceof IgxDropDirective) {
            const column: IgxColumnComponent = event.dragData;
            if (this.groupColumns.indexOf(column.field) < 0 && column.groupable) {
                this.groupColumns.push(column.field);
                this.groupColumns = [...this.groupColumns];

                this.groupColumnsChange.emit(this.groupColumns);
                this.onColumnHiddenChange(column.field, true);
            }
        }
    }

    public orderChanged(event: IChipsAreaReorderEventArgs) {
        const newColumnGroups = [];
        for (const chip of event.chipsArray) {
            const col = this.groupColumns.filter((item) => item === chip.id)[0];
            newColumnGroups.push(col);
        }
        this.groupColumns = newColumnGroups;
    }

    public onMoveEnd() {
        this.groupColumnsChange.emit(this.groupColumns);
    }

    private onColumnHiddenChange(columnName: string, hidden: boolean) {
        const column = this.grid.getColumnByName(columnName);
        if (column) {
            column.hidden = hidden;
        }

        const groupColumn = this.grid.getColumnByName(this.groupColumnKey);
        groupColumn.hidden = this.groupColumns.length === 0;
    }
}
