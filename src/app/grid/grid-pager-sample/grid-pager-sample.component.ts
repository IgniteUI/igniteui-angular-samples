import { Component, OnInit, ViewChild } from "@angular/core";
import { athletesData } from "../services/data";
import { IPaginatorResourceStrings, IgxPaginatorComponent } from "igniteui-angular";

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
    public isDropdownDisabled = false;
    public isPagerDisabled = false;
    public selectOptions = [5, 15, 20, 50];
    @ViewChild("paginator", { read: IgxPaginatorComponent, static: false })
    paginator: IgxPaginatorComponent;

    private paginatorResourceStrings: IPaginatorResourceStrings = {
        igx_paginator_label: "Records per page"
    };

    public ngOnInit(): void {
        this.data = athletesData;
        this.densityOptions = ["compact", "cosy", "comfortable"];
    }

    public ngAfterViewInit(): void {
        requestAnimationFrame(() => {
            this.paginator.resourceStrings = this.paginatorResourceStrings;
        });
    };
}
