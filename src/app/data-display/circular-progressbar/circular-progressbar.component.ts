import { Component, OnInit, QueryList, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxCircularProgressBarComponent, IgxLinearProgressBarComponent } from "igniteui-angular";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-circular-progressbar",
  styleUrls: ["./circular-progressbar.component.scss"],
  templateUrl: "./circular-progressbar.component.html"
})
export class CircularProgressbarComponent implements OnInit {

  public currentValue: number;
  public interval: any;

  public circularBar: IgxCircularProgressBarComponent;

  constructor() { }

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
  public progresChanged(progress) {
  }
  private randomIntFromInterval(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
