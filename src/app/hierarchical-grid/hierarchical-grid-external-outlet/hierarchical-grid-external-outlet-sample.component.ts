import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxHierarchicalGridComponent, IgxOverlayOutletDirective } from "igniteui-angular";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-external-outlet",
    styleUrls: ["./hierarchical-grid-external-outlet-sample.component.scss"],
    templateUrl: "hierarchical-grid-external-outlet-sample.component.html"
})

export class HierarchicalGridExternalOutletComponent implements OnInit {
    @ViewChild('igxFilteringOverlayOutlet', { read: IgxOverlayOutletDirective, static: true })
    public outletDirective: IgxOverlayOutletDirective;

    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = SINGERS;

    }
}
