import { Component, ViewChild } from "@angular/core";
import { localData } from "./local-data";

@Component({
    selector: "app-combo",
    styleUrls: ["./combo-features.component.scss"],
    templateUrl: "./combo-features.component.html"
})
export class ComboFeatures {
    public lData: any[];

    public filterable = true;
    public customValues = true;
    public disabled = false;

    public ngOnInit() {
        this.lData = localData;
    }

    public handleAddition(event) { }
}
