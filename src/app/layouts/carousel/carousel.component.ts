import { Component, ViewChild } from "@angular/core";
import { IgxCarouselComponent } from "igniteui-angular";

@Component({
  selector: "app-carousel",
  styleUrls: ["./carousel.component.scss"],
  templateUrl: "./carousel.component.html"
})

export class CarouselComponent {
  @ViewChild("carousel", { static: true }) public carousel: IgxCarouselComponent;

  public slides = [
      {
        src: "http://localhost:4200/assets/images/carousel/ignite-ui-angular-indigo-design.png"
      },
      {
        src: "http://localhost:4200/assets/images/carousel/slider-image-chart.png"
      },
      {
        src: "http://localhost:4200/assets/images/carousel/ignite-ui-angular-charts.png"
      }
  ];
}
