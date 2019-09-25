import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxCircularProgressBarComponent } from "igniteui-angular";

@Component({
    selector: "app-circular-styling-sample",
    styleUrls: ["./circular-styling-sample.component.scss"],
    templateUrl: "./circular-styling-sample.component.html"
})
export class CircularStylingSampleComponent implements OnInit {

    public currentValue: number;
    public interval: any;
    public isDeterminated: boolean;
    public isRunning: boolean;

    @ViewChild("progBar", { static: true }) public circularBar: IgxCircularProgressBarComponent;

    constructor() { }

    public toggle() {
        this.tick();
        this.isDeterminated = !this.isDeterminated;
        this.isRunning = !this.isRunning;
    }

    public ngOnInit() {
        this.currentValue = 0;
    }

    public changeIcon() {
        return this.interval ? "pause" : "play_arrow";
    }

    public tick() {
        if (this.interval) {
            this.interval = clearInterval(this.interval);
            return;
        }
        this.interval = setInterval(this.updateValue.bind(this), 60);
    }

    public updateValue() {
        this.circularBar.updateProgressSmoothly(this.currentValue += this.randomIntFromInterval(1, 3), 1);
        if (this.circularBar.value > this.circularBar.max + 3) {
          this.interval = clearInterval(this.interval);
        }
    }

    public progresChanged(progress) { }

    private randomIntFromInterval(min: number, max: number) {
       return Math.floor(Math.random() * (max - min + 1) + min);
    }

}
