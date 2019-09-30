import { Component, QueryList, ViewChildren } from "@angular/core";
import { IgxLinearProgressBarComponent } from "igniteui-angular";

@Component({
    selector: "app-linear-progressbar-styling",
    styleUrls: ["./linear-progressbar-styling-sample.component.scss"],
    templateUrl: "./linear-progressbar-styling-sample.component.html"
})
export class LinearProgressbarStylingComponent {

    public interval: any;
    public disable = false;

    @ViewChildren(IgxLinearProgressBarComponent, { read: IgxLinearProgressBarComponent })
    public linearBars: QueryList<IgxLinearProgressBarComponent>;

    constructor() { }

    public changeIcon() {
        return this.interval ? "pause" : "play_arrow";
    }

    public updateValue() {
        this.disable = true;
        this.linearBars.map((bar) => bar.value += this.randomIntFromInterval(1, 3));
        const shouldStop = this.linearBars.toArray().every((bar) => bar.value >= bar.max);
        if (shouldStop) {
            this.disable = false;
            this.interval = clearInterval(this.interval);
        }
    }

    public tick() {
        if (this.interval) {
            this.interval = clearInterval(this.interval);
            return;
        }
        this.interval = setInterval(this.updateValue.bind(this), 60);
    }

    public reset() {
        this.linearBars.toArray().forEach((bar) => bar.value = 0);
    }

    private randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}
