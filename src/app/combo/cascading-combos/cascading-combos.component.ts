import { Component, ViewChild } from "@angular/core";
import { IgxComboComponent } from "igniteui-angular";
import { data } from "./local-data";

@Component({
    selector: "app-combo",
    styleUrls: ["./cascading-combos.component.scss"],
    templateUrl: "./cascading-combos.component.html"
})
export class CascadingCombos {

    @ViewChild("combo1", { read: IgxComboComponent })
    private combo1: IgxComboComponent;
    @ViewChild("combo2", { read: IgxComboComponent })
    private combo2: IgxComboComponent;
    @ViewChild("combo3", { read: IgxComboComponent })
    private combo3: IgxComboComponent;

    private countryData: any[] = [];
    private provinceData: any[] = [];
    private townData: any[] = [];
    private country: string;
    private province: string;
    private town: string;
    private VALUE_KEY = "field";
    private GROUP_KEY = "region";

    constructor() {
        this.countryData = Object.keys(data);
    }

    public selectCountry(args) {
        this.combo1.close();
        if (args.newSelection.length === 0) {
            this.combo2.deselectAllItems();
            this.combo2.disabled = true;
            this.combo3.deselectAllItems();
            this.combo3.disabled = true;
        } else {
            this.combo2.disabled = false;
            this.country = args.newSelection[args.newSelection.length - 1];
            this.provinceData = Object.keys(data[this.country]);
        }
    }

    public selectProvince(args) {
        this.combo2.close();
        if (args.newSelection.length === 0) {
            this.combo3.deselectAllItems();
            this.combo3.disabled = true;
        } else {
            this.combo3.disabled = false;
            this.province = args.newSelection[args.newSelection.length - 1];
            this.townData = data[this.country][this.province];
        }
    }

    public selectTown(args) {
        this.combo3.close();
    }
}
