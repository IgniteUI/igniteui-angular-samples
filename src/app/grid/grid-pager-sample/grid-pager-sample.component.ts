import { Component, OnInit, ViewChild } from "@angular/core";
import { athletesData } from "../services/data";
import { IPaginatorResourceStrings, IgxPaginatorComponent, IPagingEventArgs, GridPagingMode } from "igniteui-angular";


@Component({
    selector: "app-grid-pager-sample",
    styleUrls: ["./grid-pager-sample.component.scss"],
    templateUrl: "./grid-pager-sample.component.html"
})
export class GridPagerSampleComponent implements OnInit {
    public data: any[];
    public densityOptions: string[];
    public totalRecords = 0;
    public page = 0;
    public perPage = 10;
    public mode: GridPagingMode.Remote;
    public isDropdownHidden = false;
    public isPagerHidden = false;
    public isDropdownDisabled = false;
    public isPagerDisabled = false;
    public selectOptions = [5, 10, 15, 25];
    public allData: any[];

    @ViewChild("paginator", { read: IgxPaginatorComponent, static: false })
    paginator: IgxPaginatorComponent;

    private paginatorResourceStrings: IPaginatorResourceStrings = {
        igx_paginator_label: "Records per page"
    };

    public ngOnInit(): void {
        this.allData = athletesData.sort((a, b) => {
            return a.Id - b.Id}
        );
        this.totalRecords = this.allData.length;
        this.data = this.sliceData(this.page, this.perPage);
        this.densityOptions = ["compact", "cosy", "comfortable"];
    }

    public paging(event: IPagingEventArgs) {
        this.data = this.sliceData(event.newPage, this.perPage);
    }

    public sliceData(page, perPage) {
        const start = page * perPage;
        const end = (page + 1) * perPage;
        const result = this.allData.slice(start, end);
        return result;
    }

    public perPageChange(perPage: number) {
        this.data = this.sliceData(this.page, perPage);
    }

    public ngAfterViewInit(): void {
        requestAnimationFrame(() => {
            this.paginator.resourceStrings = this.paginatorResourceStrings;
        });
    }
}
