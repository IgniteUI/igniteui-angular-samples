
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { IBaseChipEventArgs, IgxColumnComponent, IgxDragDirective, IgxDropDirective } from "igniteui-angular";
import { LocalDataService } from "../grid-finjs/localData.service";

@Component({
    providers: [LocalDataService],
    selector: "app-finjs-group-area",
    styleUrls: ["./group-area.component.scss"],
    templateUrl: "./group-area.component.html"
})

export class GroupAreaComponent {
    @Input() groupColumns: string[];
    @Output() groupColumnsChange = new EventEmitter<string[]>();

    @Input() gridColumns: IgxColumnComponent[];

    public onGroupColumnRemoved(event: IBaseChipEventArgs) {
        const column = event.owner.id;
        this.groupColumns = this.groupColumns.filter(item => item !== column);
        const colIndex = this.gridColumns.findIndex(c => c.field === column);
        if (colIndex >= 0) {
            this.gridColumns[colIndex].hidden = false;
        }

        this.groupColumnsChange.emit(this.groupColumns);
    }

    public onGroupAreaEnter(event) {
        console.log(event);
    }

    public onGroupColumnDropped(event) {
        const drag: IgxDropDirective = event.owner;
        if (drag instanceof IgxDropDirective) {
            const column: IgxColumnComponent = event.dragData;
            if (this.groupColumns.indexOf(column.field) < 0 && column.groupable) {
                column.hidden = true;
                this.groupColumns.push(column.field);
                this.groupColumns = [...this.groupColumns];
            }
        }

        this.groupColumnsChange.emit(this.groupColumns);
    }
}
