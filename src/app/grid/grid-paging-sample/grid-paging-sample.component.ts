import { Component, Injectable, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular/grid/grid.component";
import { DATA } from "../grid-filtering-sample/employeesData";
import { athletesData } from "../services/data";
import { DataService } from "../services/data.service";

@Component({
    selector: "grid-sample",
    styleUrls: ["./grid-paging-sample.component.scss"],
    templateUrl: "grid-paging-sample.component.html"
})

export class PagingSampleComponent {
    @ViewChild("grid1") public grid1: IgxGridComponent;
    public data: any[];
    constructor() {
    }
    public ngOnInit(): void {
        this.data = athletesData;
    }

    public isTop3(cell): boolean {
        const top = cell.value > 0 && cell.value < 4;
        if (top) {
          cell.row.nativeElement.classList.add("top3");
        } else {
          cell.row.nativeElement.classList.remove("top3");
        }
        return top;
      }

    public getIconType(cell) {
        switch (cell.row.rowData.Position) {
            case "up":
            return "arrow_upward";
            case "current":
            return "arrow_forward";
            case "down":
            return "arrow_downward";
        }
    }

    public getBadgeType(cell) {
        switch (cell.row.rowData.Position) {
            case "up":
            return "success";
            case "current":
            return "warning";
            case "down":
            return "error";
        }
    }
}
