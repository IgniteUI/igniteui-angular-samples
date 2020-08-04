import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent, IgxOverlayOutletDirective } from "igniteui-angular";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-external-outlet",
    styleUrls: ["./hierarchical-grid-external-outlet-sample.component.scss"],
    templateUrl: "hierarchical-grid-external-outlet-sample.component.html"
})

export class HierarchicalGridExternalOutletComponent implements OnInit {
    @ViewChild("hGrid1", { read: IgxHierarchicalGridComponent, static: true })
    public hGrid1: IgxHierarchicalGridComponent;

    @ViewChild("hGrid2", { read: IgxHierarchicalGridComponent, static: true })
    public hGrid2: IgxHierarchicalGridComponent;

    @ViewChild('igxFilteringOverlayOutlet', { read: IgxOverlayOutletDirective, static: true })
    public _outletDirective: IgxOverlayOutletDirective;

    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.hGrid1.outlet = this._outletDirective;
        this.hGrid2.outlet = this._outletDirective;

        this.data = SINGERS;
    }
}
