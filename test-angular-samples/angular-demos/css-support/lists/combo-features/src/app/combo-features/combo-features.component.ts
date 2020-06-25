import { Component, ViewChild } from "@angular/core";
import { IgxComboComponent } from "igniteui-angular";
import { localData } from "./local-data";

@Component({
    selector: "app-combo",
    styleUrls: ["./combo-features.component.css"],
    templateUrl: "./combo-features.component.html"
})
export class ComboFeatures {

    public GROUP_KEY = "region";
    public lData: any[];
    @ViewChild("combo", { read: IgxComboComponent, static: true }) public combo: IgxComboComponent;

    public filterable = true;
    public customValues = true;
    public disabled = false;

    public ngOnInit() {
        this.lData = localData;
    }

    public handleAddition(event) { }

    public enableGroups(event) {
        this.combo.groupKey = event.checked ? this.GROUP_KEY : "";
    }
}
