import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent, IgxSelectComponent } from "igniteui-angular";
import { DATA } from "../../data/nwindData";

@Component({
    selector: "grid-external-filtering",
    templateUrl: "./grid-external-filtering.component.html",
    styleUrls: ["./grid-external-filtering.component.scss"]
})
export class GridExternalFilteringComponent {

    @ViewChild("grid1", { static: true })
    public grid1: IgxGridComponent;

    public data: any;

    constructor() {
        this.data = DATA;
    }
}
