import { Component, OnInit } from "@angular/core";
import { athletesData } from "../services/data";

@Component({
    selector: "app-grid-pager-sample",
    styleUrls: ["./grid-pager-sample.component.scss"],
    templateUrl: "./grid-pager-sample.component.html"
})
export class GridPagerSampleComponent implements OnInit {
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
