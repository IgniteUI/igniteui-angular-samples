import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ISelectionEventArgs } from "igniteui-angular";
import { getHeroClassData, IHeroClass } from "../data/heroData";

@Component({
    selector: "app-dropdown-sample-6",
    styleUrls: ["./dropdown-sample-6.component.scss"],
    templateUrl: "./dropdown-sample-6.component.html"
})
export class DropDownSample6Component implements OnInit {
    @ViewChild("button", { static: true }) public button: ElementRef;
    public heroClasses: IHeroClass[] = [];
    public hero = "Choose your hero";

    constructor(public elem: ElementRef) {
    }

    public ngOnInit() {
        this.heroClasses = getHeroClassData();
    }

    public handleDropDownSelection(event: ISelectionEventArgs) {
        this.hero = event.newSelection.value;
    }
}
