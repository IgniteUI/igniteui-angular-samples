import { Component, ViewChild } from "@angular/core";
import { IgxCarouselComponent } from "igniteui-angular";

@Component({
  selector: "app-carousel",
  styleUrls: ["./carousel-with-components-sample.component.scss"],
  templateUrl: "./carousel-with-components-sample.component.html"
})

export class CarouselWithComponentsSample {
  @ViewChild("carousel", { static: true }) public carousel: IgxCarouselComponent;
}
