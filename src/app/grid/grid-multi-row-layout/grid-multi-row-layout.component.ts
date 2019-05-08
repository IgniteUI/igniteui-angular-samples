import { Component, ViewEncapsulation } from "@angular/core";
import { DefaultSortingStrategy, SortingDirection } from "igniteui-angular";
import { DATA } from "../../data/customers";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-grid-multi-row-layout-sample",
    styleUrls: ["./grid-multi-row-layout.component.scss"],
    templateUrl: "./grid-multi-row-layout.component.html"
})
export class GridMultiRowLayoutComponent {

    public sourceData = DATA;
    public group = [
        {
            dir: SortingDirection.Desc,
            fieldName: "Country",
            ignoreCase: false,
            strategy: DefaultSortingStrategy.instance()
        }
    ];
    public sort = [
        {
            fieldName: "CompanyName",
            dir: SortingDirection.Desc,
            ignoreCase: true
        }
    ];
}
