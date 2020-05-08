import { Component, OnInit, QueryList, ViewChildren, ViewEncapsulation } from "@angular/core";
import { IgxLinearProgressBarComponent, IgxTextAlign } from "igniteui-angular";

@Component({
  selector: "app-linear-progressbar-sample-2",
  styleUrls: ["./linear-progressbar-sample-2.component.scss"],
  templateUrl: "./linear-progressbar-sample-2.component.html"
})
export class LinearProgressbarSample2Component implements OnInit {

  public interval: any;
  public positionCenter: IgxTextAlign;
  public positionEnd: IgxTextAlign;

  @ViewChildren(IgxLinearProgressBarComponent, { read: IgxLinearProgressBarComponent })
  public linearBars: QueryList<IgxLinearProgressBarComponent>;

  public ngOnInit() {
    this.positionCenter = IgxTextAlign.CENTER;
    this.positionEnd = IgxTextAlign.END;
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
