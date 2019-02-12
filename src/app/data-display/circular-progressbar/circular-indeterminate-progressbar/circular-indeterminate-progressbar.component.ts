import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-circular-indeterminate-progressbar",
    styleUrls: ["./circular-indeterminate-progressbar.component.scss"],
    templateUrl: "./circular-indeterminate-progressbar.component.html"
})
export class CircularIndeterminateProgressbarComponent implements OnInit {

    public isDeterminated: boolean;
    public isRunning: boolean;

    constructor() { }

    public ngOnInit() {
    }

    public changeIcon() {
        return this.isRunning ? "pause" : "play_arrow";
    }

    public toggle() {
        this.isDeterminated = !this.isDeterminated;
        this.isRunning = !this.isRunning;
    }
}
