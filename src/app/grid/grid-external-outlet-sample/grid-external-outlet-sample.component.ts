import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent, IgxOverlayOutletDirective } from "igniteui-angular";
import { DATA } from "../../data/nwindData";

@Component({
    selector: "grid-external-outlet",
    styleUrls: ["./grid-external-outlet-sample.component.scss"],
    templateUrl: "grid-external-outlet-sample.component.html"
})

export class GridExternalOutletComponent implements OnInit {
    @ViewChild("grid1", { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    @ViewChild("grid2", { read: IgxGridComponent, static: true })
    public grid2: IgxGridComponent;

    @ViewChild('igxFilteringOverlayOutlet', { read: IgxOverlayOutletDirective, static: true })
    public _outletDirective: IgxOverlayOutletDirective;

    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.grid1.outlet = this._outletDirective;
        this.grid2.outlet = this._outletDirective;

        this.data = DATA;
    }
}
