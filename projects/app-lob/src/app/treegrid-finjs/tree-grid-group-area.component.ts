
import { ChangeDetectorRef, Component, EventEmitter, Input, Output } from "@angular/core";
import { IBaseChipEventArgs, IChipsAreaReorderEventArgs, IgxColumnComponent, IgxDropDirective } from "igniteui-angular";
import { LocalDataService } from "../grid-finjs/localData.service";

@Component({
    providers: [LocalDataService],
    selector: "igx-tree-grid-group-area",
    styleUrls: ["./tree-grid-group-area.component.scss"],
    templateUrl: "./tree-grid-group-area.component.html"
})

export class IgxTreeGridGroupAreaComponent {
    @Input() groupColumns: string[];
    @Output() groupColumnsChange = new EventEmitter<string[]>();

    @Output() columnHiddenChange = new EventEmitter<string>();

    public onGroupColumnRemoved(event: IBaseChipEventArgs) {
        const column = event.owner.id;
        this.groupColumns = this.groupColumns.filter(item => item !== column);

        this.groupColumnsChange.emit(this.groupColumns);
        this.columnHiddenChange.emit(column);
    }

    public onGroupAreaEnter(event) {
        console.log(event);
    }

    public onGroupColumnDropped(event) {
        const drag: IgxDropDirective = event.owner;
        if (drag instanceof IgxDropDirective) {
            const column: IgxColumnComponent = event.dragData;
            if (this.groupColumns.indexOf(column.field) < 0 && column.groupable) {
                this.groupColumns.push(column.field);
                this.groupColumns = [...this.groupColumns];

                this.groupColumnsChange.emit(this.groupColumns);
                this.columnHiddenChange.emit(column.field);
            }
        }

    }

    public orderChanged(event: IChipsAreaReorderEventArgs) {
        const newColumnGroups = [];
        for (const chip of event.chipsArray) {
            const col = this.groupColumns.filter((item) => {
                return item === chip.id;
            })[0];
            newColumnGroups.push(col);
        }
        this.groupColumns = newColumnGroups;
    }

    public onMoveEnd(event: any) {
        this.groupColumnsChange.emit(this.groupColumns);
    }
}
