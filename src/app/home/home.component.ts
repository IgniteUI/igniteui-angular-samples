import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-home",
    styleUrls: ["./home.component.scss"],
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    public title = "Kickstart your own project with Ignite UI for Angular";

    constructor() { }

    public ngOnInit() {
    }
}
