import { Component, OnInit, ViewChild } from "@angular/core";
import { DefaultSortingStrategy, IgxGridComponent, SortingDirection } from "igniteui-angular";
import { DATA } from "../../data/nwindData";

@Component({
    selector: "app-grid-contextmenu-sample",
    styleUrls: ["./grid-contextmenu-sample.component.scss"],
    templateUrl: "./grid-contextmenu-sample.component.html"

})

export class GridContextmenuSampleComponent implements OnInit {
    @ViewChild("grid1", { read: IgxGridComponent })
    public grid1: IgxGridComponent;
    public data: any[];

    public contextmenu = false;
    public contextmenuX = 0;
    public contextmenuY = 0;
    public clickedCell = null;
    public copiedData;
    public multiCellSelection;
    public multiCellContextmenu = false;

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
        this.grid1.sortingExpressions = [
            {
                dir: SortingDirection.Asc, fieldName: "ProductName",
                ignoreCase: true, strategy: DefaultSortingStrategy.instance()
            }
        ];
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat("en-US").format(val);
    }

    public rightClick(eventArgs) {
        eventArgs.event.preventDefault();
        this.contextmenuX = eventArgs.event.clientX;
        this.contextmenuY = eventArgs.event.clientY;
        this.clickedCell = eventArgs.cell;
        this.contextmenu = true;
    }

    public disableContextMenu() {
        this.contextmenu = false;
    }

    public getCells(event) {
        this.multiCellSelection = {};
        this.multiCellSelection = {
            data: this.grid1.getSelectedData(),
            rowEnd: event.rowEnd,
            rowStart: event.rowStart,
            selectionStart: this.clickedCell
        };
        this.multiCellContextmenu = true;
    }

    public check(event) {
        this.copiedData = JSON.stringify(event.data, null, 2);
        if (this.multiCellContextmenu) {
            this.multiCellContextmenu = false;
        }
    }

    public cellSelection(event) {
        event.event.preventDefault();
        this.multiCellContextmenu = false;
        this.contextmenu = false;
        this.contextmenuX = event.cell.nativeElement.getClientRects()[0].x;
        this.contextmenuY = event.cell.nativeElement.getClientRects()[0].y;
        this.clickedCell = event.cell;
    }
}
