import { Component, ViewChild } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
import { Observable } from "rxjs";
import { HierFinancialDataService } from "../services/hierFinancialData.service";

@Component({
    providers: [HierFinancialDataService],
    selector: "tree-grid-virtualization-sample",
    styleUrls: ["./tree-grid-virtualization-sample.component.css"],
    templateUrl: "tree-grid-virtualization-sample.component.html"
})

export class TreeGridVirtualizationSampleComponent {
    @ViewChild("grid1", { static: true }) public grid1: IgxTreeGridComponent;

    public data: Observable<any[]>;
    public volume = 10000;

    constructor(private localService: HierFinancialDataService) {
        this.localService.getData(this.volume);
        this.data = this.localService.records;
    }
    public ngOnInit(): void {
    }
    public formatNumber(value: number) {
        return value.toFixed(2);
    }
    public formatCurrency(value: number) {
        return "$" + value.toFixed(2);
    }
}
