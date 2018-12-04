import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent, getCurrentResourceStrings } from "igniteui-angular";
import { DATA } from "./nwindData";

@Component({
    selector: "localization-sample-1",
    styleUrls: ["./localization-sample-1.component.scss"],
    templateUrl: "localization-sample-1.component.html"
})

export class LocalizationSample1Component implements OnInit {
    @ViewChild("grid1", { read: IgxGridComponent })
    public grid: IgxGridComponent;

    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;

        const currentRS = getCurrentResourceStrings();

    for (const key of Object.keys(currentRS)) {
        if (currentRS[key].indexOf('[Localizable]') === -1) {
            currentRS[key] = '[Localizable]'+ currentRS[key];
        }
    }

    this.grid.resourceStrings = currentRS;
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat("en-US").format(val);
    }

    public formatCurrency(val: string) {
        return parseInt(val, 10).toFixed(2);
    }
}
