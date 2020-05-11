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
      this.linearBars.map(bar => bar.value += 1);
  }
}
