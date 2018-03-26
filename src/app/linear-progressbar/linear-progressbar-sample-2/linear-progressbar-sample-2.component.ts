import { Component, OnInit, QueryList, ViewChildren, ViewEncapsulation } from "@angular/core";
import { IgxLinearProgressBarComponent, IgxTextAlign } from "igniteui-angular/main";

@Component({
  selector: "app-linear-progressbar-sample-2",
  styleUrls: ["./linear-progressbar-sample-2.component.scss"],
  templateUrl: "./linear-progressbar-sample-2.component.html"
})
export class LinearProgressbarSample2Component implements OnInit {

  public disable = false;
  public interval: any;
  public positionCenter: IgxTextAlign;
  public positionEnd: IgxTextAlign;

  @ViewChildren(IgxLinearProgressBarComponent, { read: IgxLinearProgressBarComponent })
  public linearBars: QueryList<IgxLinearProgressBarComponent>;

  public ngOnInit() {
    this.positionCenter = IgxTextAlign.CENTER;
    this.positionEnd = IgxTextAlign.END;
  }

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
  public reset() {
    this.linearBars.toArray().forEach((bar) => bar.value = 0);
  }

  public tick() {
      if (this.interval) {
          this.interval = clearInterval(this.interval);
          this.disable = false;
          return;
      }
      this.interval = setInterval(this.updateValue.bind(this), 60);
  }

  private randomIntFromInterval(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
