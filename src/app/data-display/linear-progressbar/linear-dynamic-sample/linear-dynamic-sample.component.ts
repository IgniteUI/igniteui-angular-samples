import { Component } from "@angular/core";

@Component({
    selector: "app-linear-dynamic-sample",
    styleUrls: ["./linear-dynamic-sample.component.scss"],
    templateUrl: "./linear-dynamic-sample.component.html"
})
export class LinearDynamicSampleComponent {

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
