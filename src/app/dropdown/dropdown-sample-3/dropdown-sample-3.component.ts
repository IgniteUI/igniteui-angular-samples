import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxDropDownComponent } from "igniteui-angular/main";
@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-dropdown-sample-3",
    styleUrls: ["./dropdown-sample-3.component.scss"],
    templateUrl: "./dropdown-sample-3.component.html"
})
export class DropDownSample3Component implements OnInit {
    @ViewChild(IgxDropDownComponent) public igxDropDown: IgxDropDownComponent;

    public items: any[] = [
        { field: "EU", header: true },
        { field: "Germany" },
        { field: "Bulgaria" },
        { field: "UK", disabled: true }];

    constructor() {
    }

    public ngOnInit() {
    }

    public toggleDropDown() {
        this.igxDropDown.toggle();
    }
}
