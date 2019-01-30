import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { IgxColumnComponent, IgxTreeGridComponent } from "igniteui-angular";
import { EMPLOYEE_FLAT_DATA_DETAILED } from "../data/employees-flat-detailed";

@Component({
  selector: "app-tree-grid-column-moving-sample",
  styleUrls: ["./tree-grid-column-moving-sample.component.scss"],
  templateUrl: "./tree-grid-column-moving-sample.component.html"
})
export class TreeGridColumnMovingSampleComponent implements AfterViewInit {

    public data: any[];
    @ViewChild("treeGrid") public treeGrid: IgxTreeGridComponent;
    @ViewChild("pinTemplate", { read: TemplateRef })
    private pinTemplate: TemplateRef<any>;

    constructor() {
        this.data = EMPLOYEE_FLAT_DATA_DETAILED;
    }

    public ngAfterViewInit(): void {
        if (this.treeGrid.columns.length > 0) {
            this.treeGrid.columns.forEach((column: IgxColumnComponent) => {
                column.headerTemplate = this.pinTemplate;
            });
        }
    }

    public toggleColumnPinning(column: IgxColumnComponent) {
        column.pinned ? column.unpin() : column.pin();
    }
}
