import { Component, ViewChild} from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { athletesData } from "../services/data";

@Component({
    selector: "custom-grid-paging-style-sample",
    styleUrls: ["custom-grid-paging-style.component.scss"],
    templateUrl: "custom-grid-paging-style.component.html"
})

export class CustomGridPagingStyleSample {
    @ViewChild("grid1") public grid1: IgxGridComponent;
    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = athletesData;
    }
}
