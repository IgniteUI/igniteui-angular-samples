import { Component, OnInit , ViewChild } from "@angular/core";
import { IgxLinearProgressBarComponent } from "igniteui-angular";

@Component({
  selector: "app-linear-progressbar",
  styleUrls: ["./linear-progressbar.component.scss"],
  templateUrl: "./linear-progressbar.component.html"
})
export class LinearProgressbarComponent implements OnInit {

  public interval: any;

  @ViewChild(IgxLinearProgressBarComponent, { read: IgxLinearProgressBarComponent })
  public linearBar: IgxLinearProgressBarComponent;

  public ngOnInit() {
    this.interval = setInterval(this.updateValue.bind(this), 60);
  }

  public updateValue() {
      this.linearBar.value += 1;
  }
}
