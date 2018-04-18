import {
    Component,
    OnInit,
    ViewChild,
    ViewEncapsulation
} from "@angular/core";

import { IgxGridComponent } from "igniteui-angular/grid/grid.component";
import { STRING_FILTERS } from "igniteui-angular/main";
import { data } from "./data";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-grid",
    styleUrls: ["./grid-crm.component.scss"],
    templateUrl: "./grid-crm.component.html"
})
export class GridCRMComponent implements OnInit {

    @ViewChild("grid1", { read: IgxGridComponent })
    public grid1: IgxGridComponent;

    public localData: any[];

    constructor() { }

    public ngOnInit() {
        this.localData = data;
    }
}
