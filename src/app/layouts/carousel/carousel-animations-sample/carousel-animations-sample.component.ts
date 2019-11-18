import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxCarouselComponent } from "igniteui-angular";

@Component({
  selector: "app-carousel",
  styleUrls: ["./carousel-animations-sample.component.scss"],
  templateUrl: "./carousel-animations-sample.component.html"
})
export class CarouselAnimationsSampleComponent implements OnInit {
  @ViewChild("carousel", { static: true }) public carousel: IgxCarouselComponent;

  public slides: any[] = [];
  public play = true;
  public total: number;
  public current: number;
  public animations = ["slide", "fade", "none"];

  public ngOnInit() {

    this.carousel.onCarouselPaused.subscribe(() => this.play = false);
    this.carousel.onCarouselPlaying.subscribe(() => this.play = true);

    this.addSlides();
    this.total = this.slides.length;
    this.current = this.carousel.current;
  }

  public toggleNavigation() {
      this.play = !this.play;

      if (this.play) {
        this.carousel.play();
      } else {
          this.carousel.navigation = false;
          this.carousel.stop();
      }
  }

  public visitPage(location) {
      window.location.href = location;
  }

  public addSlides() {
    this.slides.push(
      {
        description: "30+ Material-based Angular components to code speedy web apps faster.",
        heading: "Ignite UI for Angular",
        image: "assets/images/carousel/slide1-angular.png",
        link: "https://www.infragistics.com/products/ignite-ui-angular"
      },
      {
        description: "A complete JavaScript UI library empowering you to build data-rich responsive web apps.",
        heading: "Ignite UI for Javascript",
        image: "assets/images/carousel/slide2-ignite.png",
        link: "https://www.infragistics.com/products/ignite-ui"
      },
      {
        description: "Build full-featured business apps with the most versatile set of ASP.NET AJAX UI controls",
        heading: "Ultimate UI for ASP.NET",
        image: "assets/images/carousel/slide3-aspnet.png",
        link: "https://www.infragistics.com/products/aspnet"
      }
    );
  }
}
