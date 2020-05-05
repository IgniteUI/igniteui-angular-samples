import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-circular-dynamic-sample",
    styleUrls: ["./circular-dynamic-sample.component.scss"],
    templateUrl: "./circular-dynamic-sample.component.html"
})
export class CircularDynamicSampleComponent implements OnInit {

    public currentValue: number;

    public ngOnInit() {
        this.currentValue = 0;
    }

    public addProgress() {
        this.currentValue += 10;
        if (this.currentValue > 100) {
            this.currentValue = 100;
        }
    }

    public removeProgress() {
        this.currentValue -= 10;
        if (this.currentValue < 0) {
            this.currentValue = 0;
        }
    }
}
