import { Component, EventEmitter, Input, Output } from "@angular/core";
import {
    DefaultSortingStrategy, IBaseChipEventArgs, IChipClickEventArgs, IChipsAreaReorderEventArgs, IGroupingExpression,
    IgxColumnComponent, IgxDropDirective, IgxTreeGridComponent, SortingDirection
} from "igniteui-angular";
import { LocalDataService } from "../grid-finjs/localData.service";

@Component({
    providers: [LocalDataService],
    selector: "igx-tree-grid-group-area",
    styleUrls: ["./tree-grid-group-area.component.scss"],
    templateUrl: "./tree-grid-group-area.component.html"
})

export class IgxTreeGridGroupAreaComponent {
    @Input() grid: IgxTreeGridComponent;
    @Input() groupColumnKey: string;

    @Input() groupColumns: IGroupingExpression[];
    @Output() groupColumnsChange = new EventEmitter<IGroupingExpression[]>();

    onGroupColumnClick(event: IChipClickEventArgs) {
        const columnName = event.owner.id;
        const index = this.groupColumns.findIndex(item => item.fieldName === columnName);
        const groupExpr = this.groupColumns[index];
        if (groupExpr.dir === SortingDirection.Asc) {
            groupExpr.dir = SortingDirection.Desc
        } else {
            groupExpr.dir = SortingDirection.Asc
        }

        this.groupColumns = [...this.groupColumns];
        this.groupColumnsChange.emit(this.groupColumns);
    }

    public onGroupColumnRemoved(event: IBaseChipEventArgs) {
        const columnName = event.owner.id;
        this.groupColumns = this.groupColumns.filter(item => item.fieldName !== columnName);

        this.groupColumnsChange.emit(this.groupColumns);
        this.onColumnHiddenChange(columnName);
    }

    public onGroupAreaEnter(event) {
        event.drag.icon.innerText = 'group_work';
    }

    public onGroupAreaLeave(event) {
        event.drag.icon.innerText = 'block';
    }

    public onGroupColumnDropped(event) {
        const drag: IgxDropDirective = event.owner;
        if (drag instanceof IgxDropDirective) {
            const column: IgxColumnComponent = event.dragData;
            if (this.groupColumns.findIndex(c => c.fieldName === column.field) < 0 && column.groupable) {
                this.groupColumns.push({
                    dir: SortingDirection.Asc,
                    fieldName: column.field,
                    ignoreCase: false,
                    strategy: DefaultSortingStrategy.instance()
                });
                this.groupColumns = [...this.groupColumns];

                this.groupColumnsChange.emit(this.groupColumns);
                this.onColumnHiddenChange(column.field);
            }
        }
    }

    public orderChanged(event: IChipsAreaReorderEventArgs) {
        const newColumnGroups = [];
        for (const chip of event.chipsArray) {
            const col = this.groupColumns.filter((item) => {
                return item.fieldName === chip.id;
            })[0];
            newColumnGroups.push(col);
        }
        this.groupColumns = newColumnGroups;
    }

    public onMoveEnd(event: any) {
        this.groupColumnsChange.emit(this.groupColumns);
    }

    private onColumnHiddenChange(columnName: string) {
        const column = this.grid.getColumnByName(columnName);
        if (column) {
            column.hidden = !column.hidden;
        }

        const groupColumn = this.grid.getColumnByName(this.groupColumnKey);
        groupColumn.hidden = this.groupColumns.length === 0;
    }
}
