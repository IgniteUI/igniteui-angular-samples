import { Component } from "@angular/core";
import { data } from "../../grid-crm/grid-crm/data";

@Component({
    selector: "hierarchical-grid-master-detail",
    styleUrls: ["./hierarchical-grid-master-detail.component.scss"],
    templateUrl: "hierarchical-grid-master-detail.component.html"
})

export class HierarchicalGridMasterDetailSampleComponent {

    public data = [];

    constructor() {
        this.data = data;
    }

    public formatValue(val: any): string {
        return val.toLocaleString("en-us", { maximumFractionDigits: 2 });
    }

    public getPieData(dataItem) {
        return [
            { Label: "Won", Value: dataItem.deals_won},
            { Label: "Lost", Value: dataItem.deals_lost},
            { Label: "Pending", Value: dataItem.deals_pending}];
    }

    public getSparklineData(dataItem) {
        const sales: any[] = [];
        for (let w = 0; w < 31; w++) {
            const value = this.getRandomNumber(0, 100);
            sales.push({Sold: value, Week: w});
        }
        dataItem.sparkData = sales;
        return dataItem.sparkData;
    }

    public getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }



}
