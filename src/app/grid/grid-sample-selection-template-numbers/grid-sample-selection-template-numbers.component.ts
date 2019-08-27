import { Component } from "@angular/core";
import { DATA } from "../../data/customers";

@Component({
    selector: "grid-selection-template-numbers",
    styleUrls: ["./grid-sample-selection-template-numbers.component.scss"],
    templateUrl: "grid-sample-selection-template-numbers.component.html"
})

export class GridSelectionTemplateNumbersComponent {
    public data: any[];

    constructor() {
        this.data = [...DATA];
        // add more rows to data
        for (let i = 0; i < 1000; i += 1) {
            this.data.push(this.generateDataItem(i));
        }
    }

    private generateDataItem(i: number) {
        return {
            ID: ("0000" + this.data.length).slice(-5),
            CompanyName: `Company ${i}`,
            ContactName: `Contact ${i}`,
            ContactTitle: "Owner",
            Address: `Address ${i}`,
            City: `City ${i}`,
            Region: null,
            PostalCode: ("0000" + i).slice(-5),
            Country: "Spain",
            Phone: "-",
            Fax: "-"
        };
    }
}
