import { Component, Input, OnInit} from "@angular/core";
import { IgxIconModule, SortingDirection } from "igniteui-angular";

@Component({
  selector: "grid-contextmenu",
  styleUrls: ["./grid-contextmenu.component.scss"],
  templateUrl: "./grid-contextmenu.component.html"
})
export class GridContextmenuComponent implements OnInit {

    @Input()
    public x = 0;

    @Input()
    public y = 0;

    @Input()
    public cell;

    constructor() { }

    public Sort(eventArgs) {
        this.cell.grid.sort(this.cell.column.field, SortingDirection.Asc, true);
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
