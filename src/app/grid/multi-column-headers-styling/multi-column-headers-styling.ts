import { Component, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { DATA } from "../../data/customers";

@Component({
    selector: "multi-column-headers-styling",
    styleUrls: [ "multi-column-headers-styling.scss" ],
    templateUrl: "multi-column-headers-styling.html"
})
export class GridMultiColumnHeadersStylingComponent {

    @ViewChild(IgxGridComponent, { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;
    public data = DATA;
}
