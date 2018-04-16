import { Component, Injectable, ViewChild } from "@angular/core";
import { Http } from "@angular/http";
import { IgxGridComponent } from "igniteui-angular/grid/grid.component";
import { STRING_FILTERS } from "igniteui-angular/main";
import { BehaviorSubject, Observable } from "rxjs/Rx";
import { DATA } from "./employeesData";

@Component({
    selector: "grid-sample",
    styleUrls: ["./grid-filtering-sample.component.scss"],
    templateUrl: "grid-filtering-sample.component.html"
})

export class FilteringSampleComponent {
    @ViewChild("grid1") public grid1: IgxGridComponent;
    public data: any[];
    constructor() {
        this.data = DATA;
    }
    public ngOnInit(): void {
    }

    public filter(term) {
        this.grid1.filter("Country", term, STRING_FILTERS.contains);
      }
}
