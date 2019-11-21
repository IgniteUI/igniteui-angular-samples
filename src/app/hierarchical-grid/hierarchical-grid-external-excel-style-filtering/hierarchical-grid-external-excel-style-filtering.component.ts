import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent } from "igniteui-angular";
import { SINGERS } from "../data";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "hierarchical-grid-external-excel-style-filtering",
    templateUrl: "./hierarchical-grid-external-excel-style-filtering.component.html",
    styleUrls: ["./hierarchical-grid-external-excel-style-filtering.component.scss"]
})
export class HGridExternalExcelStyleFilteringComponent {

    @ViewChild("hierarchicalGrid", { read: IgxHierarchicalGridComponent, static: true })
    public hgrid: IgxHierarchicalGridComponent;

    public columns: any[];
    public localdata: any[];

    constructor() {
        this.localdata = SINGERS;
    }

    public ngAfterViewInit() {
        this.columns = this.hgrid.columns.filter(c => c.filterable);

    }
}
