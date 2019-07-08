import { Component, ElementRef, OnInit } from "@angular/core";
import { heroArmorData } from "./../../../data/heroData";

@Component({
    selector: "select-sample-5",
    styleUrls: ["select-sample-5.component.scss"],
    templateUrl: "select-sample-5.component.html"
})

export class SelectSample5Component implements OnInit {
    public armorData: Array<{}>;
    public armor;

    constructor(public elem: ElementRef) {
    }
    public ngOnInit() {
        this.armorData = heroArmorData;
    }
}
