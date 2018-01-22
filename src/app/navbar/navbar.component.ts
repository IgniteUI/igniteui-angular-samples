import { Location } from "@angular/common";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";

const CURRENT_VIEW = "Ignite UI JS Blocks";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"],
    encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit {

    public currentView: string;

    constructor(private _location: Location) { }

    public ngOnInit() {
        this.currentView = CURRENT_VIEW;
    }

    public navigateBack() {
        this._location.back();
    }

    public canGoBack() {
        return window.history.length === 0;
    }
}
