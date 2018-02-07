import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";

import { IgxCircularProgressBar, IgxLinearProgressBar } from "igniteui-angular/main";

@Component({
    selector: "app-progressbar",
    styleUrls: ["./progressbar.component.css"],
    templateUrl: "./progressbar.component.html"
})
export class ProgressbarComponent implements OnInit {

    public currentValue: number;
    public type: string;
    public interval: any;

    @ViewChildren(IgxLinearProgressBar, { read: IgxLinearProgressBar })
    public linearBars: QueryList<IgxLinearProgressBar>;

    @ViewChildren(IgxCircularProgressBar, { read: IgxCircularProgressBar })
    public circularBars: QueryList<IgxCircularProgressBar>;

    constructor() {
        this.currentValue = 0;
    }

    public changeIcon() {
        return this.interval ? "pause" : "play_arrow";
    }

    public updateValue() {
        this.linearBars.map((bar) => bar.value += this.randomIntFromInterval(1, 3));
        this.circularBars.map((bar) => this.currentValue += this.randomIntFromInterval(1, 3));
        const shouldStop = this.linearBars.toArray().every((bar) => bar.value >= bar.max);
        if (shouldStop) {
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

    public ngOnInit() {
    }

    private randomIntFromInterval(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}
