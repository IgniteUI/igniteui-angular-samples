import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent, IgxOverlayOutletDirective } from "igniteui-angular";
import { DATA } from "../../data/nwindData";

@Component({
    selector: "grid-external-outlet",
    styleUrls: ["./grid-external-outlet-sample.component.scss"],
    templateUrl: "grid-external-outlet-sample.component.html"
})

export class GridExternalOutletComponent implements OnInit {
    @ViewChild('igxFilteringOverlayOutlet', { read: IgxOverlayOutletDirective, static: true })
    public outletDirective: IgxOverlayOutletDirective;

    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
    }
}
