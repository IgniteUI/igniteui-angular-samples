import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ISelectionEventArgs } from "igniteui-angular";
import { heroClassesData } from "./../../../data/heroData";

@Component({
    selector: "app-dropdown-sample-6",
    styleUrls: ["./dropdown-sample-6.component.scss"],
    templateUrl: "./dropdown-sample-6.component.html"
})
export class DropDownSample6Component implements OnInit {
    @ViewChild("button", { static: true }) public button: ElementRef;

    public heroClasses: Array<{}>;
    public hero = "Choose your hero";

    constructor(public elem: ElementRef) {
    }

    public ngOnInit() {
        this.heroClasses = heroClassesData;
    }

    public handleDropDownSelection(event: ISelectionEventArgs) {
        this.button.nativeElement.textContent = event.newSelection.element.nativeElement.innerText;
    }
}
