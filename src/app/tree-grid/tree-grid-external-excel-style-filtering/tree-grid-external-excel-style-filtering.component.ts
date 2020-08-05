import { Component, ViewChild, ChangeDetectionStrategy } from "@angular/core";
import { FOODS_DATA } from "../data/foods";
import { IgxTreeGridComponent } from 'igniteui-angular';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "tree-grid-external-excel-style-filtering",
    templateUrl: "./tree-grid-external-excel-style-filtering.component.html",
    styleUrls: ["./tree-grid-external-excel-style-filtering.component.scss"]
})
export class TreeGridExternalExcelStyleFilteringComponent {

    @ViewChild("tGrid", { read: IgxTreeGridComponent, static: true })
    public tGrid: IgxTreeGridComponent;

    public columns: any[];
    public data: any[];

    constructor() {
        this.data = FOODS_DATA();
    }

    public ngAfterViewInit() {
        this.columns = this.tGrid.columns.filter(c => c.filterable);
    }
}
