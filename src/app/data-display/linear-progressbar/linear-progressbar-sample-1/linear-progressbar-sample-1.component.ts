import { Component, OnInit, QueryList, ViewChildren } from "@angular/core";
import { IgxLinearProgressBarComponent } from "igniteui-angular";

@Component({
  selector: "app-linear-progressbar-sample-1",
  styleUrls: ["./linear-progressbar-sample-1.component.scss"],
  templateUrl: "./linear-progressbar-sample-1.component.html"
})
export class LinearProgressbarSample1Component implements OnInit {
  public interval: any;

  @ViewChildren(IgxLinearProgressBarComponent, { read: IgxLinearProgressBarComponent })
  public linearBars: QueryList<IgxLinearProgressBarComponent>;

  public ngOnInit() {
    this.interval = setInterval(this.updateValue.bind(this), 60);
  }

  public updateValue() {
      this.linearBars.map((bar) => bar.value += this.randomIntFromInterval(1, 3));
      const shouldStop = this.linearBars.toArray().every((bar) => bar.value >= bar.max);
      if (shouldStop) {
        this.interval = clearInterval(this.interval);
      }
  }

  private randomIntFromInterval(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
