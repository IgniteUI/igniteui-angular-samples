import { Component, OnInit, ViewChild } from "@angular/core";
import { Direction, IgxCarouselComponent } from "igniteui-angular";

@Component({
  selector: "app-carousel-styling-sample",
  styleUrls: ["./carousel-styling-sample.component.scss"],
  templateUrl: "./carousel-styling-sample.component.html"
})
export class CarouselStylingSampleComponent implements OnInit {
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
