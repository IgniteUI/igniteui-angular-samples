import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxCircularProgressBarComponent } from "igniteui-angular";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-circular-progressbar",
  styleUrls: ["./circular-progressbar.component.scss"],
  templateUrl: "./circular-progressbar.component.html"
})
export class CircularProgressbarComponent implements OnInit {

  public interval: any;

  @ViewChild(IgxCircularProgressBarComponent, { static: true }) public circularBar: IgxCircularProgressBarComponent;

  public ngOnInit() {
    this.interval = setInterval(this.updateValue.bind(this), 60);
  }

  public updateValue() {
     this.circularBar.value += 1;
     if (this.circularBar.value === this.circularBar.max) {
       this.interval = clearInterval(this.interval);
     }
  }
}
