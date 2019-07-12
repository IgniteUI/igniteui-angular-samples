import { Component } from "@angular/core";
import { DATA } from "../../data/nwindData";

@Component({
    selector: "grid-clipboard-operations-sample",
    styleUrls: ["grid-clipboard-operations-sample.component.scss"],
    templateUrl: "./grid-clipboard-operations-sample.component.html"
})
export class GridClipboardSampleComponent {

    public data: any[];
    public options = {
        enabled: true,
        copyHeaders: true,
        copyFormatters: true,
        separator: "\t"
    };

    constructor() {
        this.data = DATA;
    }

    public formatter = (value: any) => `** ${value} **`;

    public initColumn(column) {
        column.formatter = this.formatter;
        column.header = `🐱‍👤 ${column.field} 🐱‍🏍`;
    }
}
