import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxTreeGridComponent, IgxOverlayOutletDirective } from "igniteui-angular";
import { FOODS_DATA } from "../data/foods";

@Component({
    selector: "tree-grid-external-outlet",
    styleUrls: ["./tree-grid-external-outlet-sample.component.scss"],
    templateUrl: "tree-grid-external-outlet-sample.component.html"
})

export class TreeGridExternalOutletComponent implements OnInit {
    @ViewChild('igxFilteringOverlayOutlet', { read: IgxOverlayOutletDirective, static: true })
    public outletDirective: IgxOverlayOutletDirective;

    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = FOODS_DATA();
    }
}
