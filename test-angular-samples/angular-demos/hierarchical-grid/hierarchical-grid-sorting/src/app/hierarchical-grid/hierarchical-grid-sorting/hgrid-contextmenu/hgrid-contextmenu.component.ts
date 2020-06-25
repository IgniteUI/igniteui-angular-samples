import { Component, Input, OnInit} from "@angular/core";
import { IgxIconModule, SortingDirection } from "igniteui-angular";

@Component({
  selector: "hgrid-contextmenu",
  styleUrls: ["./hgrid-contextmenu.component.scss"],
  templateUrl: "./hgrid-contextmenu.component.html"
})
export class HGridContextmenuComponent implements OnInit {

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
