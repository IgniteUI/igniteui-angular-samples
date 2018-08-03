import { Component, ViewChild } from "@angular/core";
import { IgxComboComponent } from "igniteui-angular";
import { localData } from "./local-data";

@Component({
    selector: "app-combo",
    styleUrls: ["./combo-features.component.scss"],
    templateUrl: "./combo-features.component.html"
})
export class ComboFeatures {
    @ViewChild("combo", { read: IgxComboComponent }) public combo1: IgxComboComponent;
    public lData: any[];

    public filterable = true;
    public customValues = true;
    public disabled = false;

    public ngOnInit() {
        this.lData = localData;
    }

    public handleAddition(event) { }
}
