import { Component } from "@angular/core";

@Component({
  selector: "app-carousel",
  styleUrls: ["./carousel.component.scss"],
  templateUrl: "./carousel.component.html"
})

export class CarouselComponent {

  public slides = [
      {
        src: "https://www.infragistics.com/angular-demos/assets/images/carousel/ignite-ui-angular-indigo-design.png"
      },
      {
        src: "https://www.infragistics.com/angular-demos/assets/images/carousel/slider-image-chart.png"
      },
      {
        src: "https://www.infragistics.com/angular-demos/assets/images/carousel/ignite-ui-angular-charts.png"
      }
  ];
}
