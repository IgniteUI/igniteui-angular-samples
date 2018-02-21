import { Component, OnInit, QueryList, ViewChildren, ViewEncapsulation } from "@angular/core";
import { IgxCircularProgressBarComponent, IgxLinearProgressBarComponent } from "igniteui-angular/main";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-circular-progressbar",
  styleUrls: ["./circular-progressbar.component.css"],
  templateUrl: "./circular-progressbar.component.html"
})
export class CircularProgressbarComponent implements OnInit {

  public currentValue: number;
  public interval: any;

  @ViewChildren(IgxCircularProgressBarComponent, { read: IgxCircularProgressBarComponent })
    public circularBar: QueryList<IgxCircularProgressBarComponent>;

  constructor() { }

  public ngOnInit() {
    this.currentValue = 30;
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
  public reset() {
    this.currentValue = 30;
    this.circularBar.first.updateProgressDirectly(this.currentValue);
  }
  public updateValue() {
    this.circularBar.map((bar) => this.currentValue += this.randomIntFromInterval(1, 3));
  }
  private randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
