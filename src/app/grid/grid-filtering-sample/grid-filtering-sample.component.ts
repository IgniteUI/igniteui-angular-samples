import { CurrencyPipe } from "@angular/common";
import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent, IgxStringFilteringOperand, IgxNumberFilteringOperand,
    IgxBooleanFilteringOperand, IgxDateFilteringOperand, IgxFilteringOperand } from "igniteui-angular";
import { DATA } from "./nwindData";

@Component({
    selector: "grid-sample",
    styleUrls: ["./grid-filtering-sample.component.scss"],
    templateUrl: "grid-filtering-sample.component.html"
})

export class FilteringSampleComponent implements OnInit {
    @ViewChild("grid1", { read: IgxGridComponent })
    public grid1: IgxGridComponent;

    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
    }

    public filter(term) {
        // this.grid1.filter("ProductName", term, IgxStringFilteringOperand.instance().condition("contains"));
        this.grid1.filter("ProductName", term, IgxStringFilteringOperand.instance().condition("contains"));
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat("en-US").format(val);
    }

    public formatCurrency(val: string) {
        return parseInt(val, 10).toFixed(2);
    }
}
