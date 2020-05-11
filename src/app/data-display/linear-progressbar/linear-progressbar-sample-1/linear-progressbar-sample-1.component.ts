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
      this.linearBars.map(bar => bar.value += 1);
  }
}
