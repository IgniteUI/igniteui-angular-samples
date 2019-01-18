import { Component, QueryList, ViewChildren, ViewEncapsulation } from "@angular/core";
import { IgxCircularProgressBarComponent, IgxLinearProgressBarComponent } from "igniteui-angular";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-linear-progressbar",
  styleUrls: ["./linear-progressbar.component.scss"],
  templateUrl: "./linear-progressbar.component.html"
})
export class LinearProgressbarComponent {

  public interval: any;

  @ViewChildren(IgxLinearProgressBarComponent, { read: IgxLinearProgressBarComponent })
  public linearBars: QueryList<IgxLinearProgressBarComponent>;

  constructor() { }

  public changeIcon() {
    return this.interval ? "pause" : "play_arrow";
  }

  public updateValue() {
      this.linearBars.map((bar) => bar.value += this.randomIntFromInterval(1, 3));
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

  private randomIntFromInterval(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
