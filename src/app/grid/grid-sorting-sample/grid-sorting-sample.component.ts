import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular/grid/grid.component";
import { SortingDirection } from "igniteui-angular/main";
import { GridContextmenuComponent } from "./grid-contextmenu/grid-contextmenu.component";
import { DATA } from "./nwindData";

@Component({
    selector: "grid-sample",
    styleUrls: ["./grid-sorting-sample.component.scss"],
    templateUrl: "grid-sorting-sample.component.html"
})

export class SortingSampleComponent implements OnInit {
    @ViewChild("grid1", { read: IgxGridComponent })
    public grid1: IgxGridComponent;
    public data: any[];

    public contextmenu = false;
    public contextmenuX = 0;
    public contextmenuY = 0;
    public clickedCell = null;

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
        this.grid1.sortingExpressions = [
            { fieldName: "ProductName", dir: SortingDirection.Asc, ignoreCase: true }
        ];
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat("en-US").format(val);
    }

    public rightClick(eventArgs) {

      eventArgs.event.preventDefault();
      this.contextmenuX = eventArgs.event.clientX;
      this.contextmenuY = eventArgs.event.clientY;
      this.contextmenu = true;
      this.clickedCell = eventArgs.cell;
    }

    public disableContextMenu() {
      this.contextmenu = false;
   }
}
