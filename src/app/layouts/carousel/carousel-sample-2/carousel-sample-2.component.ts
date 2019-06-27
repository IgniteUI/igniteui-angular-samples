import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { Direction, IgxCarouselComponent } from "igniteui-angular";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-carousel",
  styleUrls: ["./carousel-sample-2.component.scss"],
  templateUrl: "./carousel-sample-2.component.html"
})
export class CarouselSample2Component implements OnInit {
  @ViewChild("carousel", { static: true }) public carousel: IgxCarouselComponent;

  public slides: any[] = [];

  constructor() { }

  public ngOnInit() {
    this.addNewSlide();
  }

  public addNewSlide() {
    this.slides.push(
      {
        description: "30+ Material-based Angular components to code speedy web apps faster.",
        heading: "Ignite UI for Angular",
        image: "assets/images/carousel/slide1-angular.png"
      },
      {
        description: "A complete JavaScript UI library empowering you to build data-rich responsive web apps.",
        heading: "Ignite UI for Javascript",
        image: "assets/images/carousel/slide2-ignite.png"
      },
      {
        description: "Build full-featured business apps with the most versatile set of ASP.NET AJAX UI controls",
        heading: "Ultimate UI for ASP.NET",
        image: "assets/images/carousel/slide3-aspnet.png"
      }
    );
  }
}
