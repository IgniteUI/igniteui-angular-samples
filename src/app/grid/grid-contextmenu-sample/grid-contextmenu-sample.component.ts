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
    public selectedCells = [];
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
        this.copiedData = "";
        this.contextmenuX = eventArgs.event.clientX;
        this.contextmenuY = eventArgs.event.clientY;
        this.clickedCell = eventArgs.cell;
        this.contextmenu = true;
    }

    public disableContextMenu() {
        this.contextmenu = false;
        // this.multiCellContextmenu = false;
    }

    public getCells(event) {
        this.copiedData  = " ";
        this.selectedCells = [];
        for (let colI = event.columnStart; colI <= event.columnEnd; colI++) {
            for (let rowI = event.rowStart; rowI <= event.rowEnd; rowI++) {
                this.selectedCells.push(this.grid1.getCellByColumn(rowI, this.grid1.columns[colI].field));
            }
        }
        this.contextmenuX = this.selectedCells[this.selectedCells.length - 1].nativeElement.getClientRects()[0].x;
        this.contextmenuY = this.selectedCells[this.selectedCells.length - 1].nativeElement.getClientRects()[0].y;
        this.multiCellContextmenu = true;

    }

    public check(event) {
        this.copiedData = event.data;
        this.multiCellContextmenu = false;

    }
}
