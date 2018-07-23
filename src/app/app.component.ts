import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { IgxNavigationDrawerComponent } from "igniteui-angular";
import { filter } from "rxjs/operators";
import { appRoutes } from "./app-routing.module";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html"
})
export class AppComponent {

    constructor() {

    }
}
