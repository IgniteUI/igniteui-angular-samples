import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { athletesData } from "../services/data";

@Component({
    selector: "app-grid-pager-sample",
    styleUrls: ["./grid-pager-sample.component.scss"],
    templateUrl: "./grid-pager-sample.component.html"
})
export class GridPagerSampleComponent implements OnInit {
    @ViewChild("grid1", { static: true })
    public grid1: IgxGridComponent;
    public data: any[];
    public densityOptions: string[];
    public isDropdownHidden = false;
    public isPagerHidden = false;
    public selectOptions = [5, 15, 20, 50];

    public ngOnInit(): void {
        this.data = athletesData;
        this.densityOptions = ["compact", "cosy", "comfortable"];
    }
}
