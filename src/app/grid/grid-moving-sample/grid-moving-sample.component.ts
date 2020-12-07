import { AfterViewInit, Component, TemplateRef, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxColumnComponent, IgxGridComponent } from "igniteui-angular";
import { DATA } from "../../data/financialData";

@Component({
    selector: "app-grid-moving-sample",
    styleUrls: ["./grid-moving-sample.component.scss"],
    templateUrl: "./grid-moving-sample.component.html"
})

export class GridMovingSampleComponent {
    public data: any[];
    @ViewChild("dataGrid", { static: true }) public grid: IgxGridComponent;

    constructor() {
        this.data = DATA;
    }

    public formatNumber(value: number) {
        return value.toFixed(2);
    }

    public formatCurrency(value: number) {
        return "$" + value.toFixed(2);
    }

    public toggleColumnPinning(column: IgxColumnComponent) {
        column.pinned ? column.unpin() : column.pin();
    }
}
