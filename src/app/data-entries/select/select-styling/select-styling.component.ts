import { Component, ElementRef, OnInit } from "@angular/core";
import { getHeroArmorsData, IHeroArmor } from "../../../data/heroData";

@Component({
    selector: "select-styling",
    styleUrls: ["select-styling.component.scss"],
    templateUrl: "select-styling.component.html"
})

export class SelectStylingComponent implements OnInit {
    public armorData: IHeroArmor[] = [];
    public armor;

    constructor(public elem: ElementRef) {
    }
    public ngOnInit() {
        this.armorData = getHeroArmorsData();
    }
}
