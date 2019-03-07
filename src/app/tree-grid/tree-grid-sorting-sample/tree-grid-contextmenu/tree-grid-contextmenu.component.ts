import { Component, Input, OnInit} from "@angular/core";
import { IgxIconModule, SortingDirection } from "igniteui-angular";

@Component({
  selector: "tree-grid-contextmenu",
  styleUrls: ["./tree-grid-contextmenu.component.scss"],
  templateUrl: "./tree-grid-contextmenu.component.html"
})
export class TreeGridContextmenuComponent implements OnInit {

    @Input()
    public x = 0;

    @Input()
    public y = 0;

    @Input()
    public cell;

    constructor() { }

    public Sort(eventArgs) {
        this.cell.grid.sort({fieldName: this.cell.column.field, dir: SortingDirection.Asc, ignoreCase: true});
    }

    public ClearSort(eventArgs) {
        this.cell.grid.clearSort(this.cell.column.field);
    }

    public ClearAll(eventArgs) {
        this.cell.grid.clearSort();
    }

    public ngOnInit() {
    }
}
