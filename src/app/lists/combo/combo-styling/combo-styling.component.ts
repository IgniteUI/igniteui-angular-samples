import { Component, ElementRef, OnInit } from "@angular/core";
import { IComboSelectionChangeEventArgs } from "igniteui-angular";
import { heroWeaponsData } from "./../../../data/heroData";

@Component({
    selector: "app-combo",
    styleUrls: ["./combo-styling.component.scss"],
    templateUrl: "./combo-styling.component.html"
})
export class ComboStyling implements OnInit {
    public weaponsData: any[];

    constructor(public elem: ElementRef) {
    }

    public ngOnInit() {
        this.weaponsData = heroWeaponsData;
    }

    public setWeaponsLimit(event: IComboSelectionChangeEventArgs) {
        if (event.newSelection.length > 2) {
            event.cancel = true;
        }
    }
}
