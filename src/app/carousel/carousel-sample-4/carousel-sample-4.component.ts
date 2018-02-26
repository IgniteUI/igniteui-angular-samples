import { Component, OnInit, ViewChild, ViewChildren, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { Direction, IgxButtonModule, IgxCarouselComponent, IgxLinearProgressBarComponent } from "igniteui-angular/main";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-carousel",
  styleUrls: ["./carousel-sample-4.component.css"],
  templateUrl: "./carousel-sample-4.component.html"
})
export class CarouselSample4Component implements OnInit {
  @ViewChild("carousel") public carousel: IgxCarouselComponent;
  @ViewChild("linearbar") public linearbar: IgxLinearProgressBarComponent;

  public slides: any[] = [];
  public loop = true;
  public total: number;
  public current: number;

  constructor(private router: Router) { }

  public ngOnInit() {
    this.addNewSlide();
    this.carousel.stop();
    this.total = this.slides.length;
    this.current = this.carousel.current;
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

  public onSlideChanged(carousel: IgxCarouselComponent) {
    this.current = carousel.current + 1;
    this.linearbar.value = carousel.current + 1;
  }

  public goTo(index: number) {
    this.router.navigate(["/details", index]);
  }
}
