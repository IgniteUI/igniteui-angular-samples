import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxTreeGridComponent, IgxOverlayOutletDirective } from "igniteui-angular";
import { FOODS_DATA } from "../data/foods";

@Component({
    selector: "tree-grid-external-outlet",
    styleUrls: ["./tree-grid-external-outlet-sample.component.scss"],
    templateUrl: "tree-grid-external-outlet-sample.component.html"
})

export class TreeGridExternalOutletComponent implements OnInit {
    @ViewChild("tGrid1", { read: IgxTreeGridComponent, static: true })
    public tGrid1: IgxTreeGridComponent;

    @ViewChild("tGrid2", { read: IgxTreeGridComponent, static: true })
    public tGrid2: IgxTreeGridComponent;

    @ViewChild('igxFilteringOverlayOutlet', { read: IgxOverlayOutletDirective, static: true })
    public _outletDirective: IgxOverlayOutletDirective;

    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.tGrid1.outlet = this._outletDirective;
        this.tGrid2.outlet = this._outletDirective;

        this.data = FOODS_DATA();
    }
}
