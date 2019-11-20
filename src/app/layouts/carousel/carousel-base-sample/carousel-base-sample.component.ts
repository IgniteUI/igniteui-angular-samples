import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { IgxCarouselComponent } from "igniteui-angular";

@Component({
  selector: "app-carousel",
  styleUrls: ["./carousel-base-sample.component.scss"],
  templateUrl: "./carousel-base-sample.component.html"
})
export class CarouselBaseSampleComponent implements OnInit, AfterViewInit {
  @ViewChild("carousel", { static: true }) public carousel: IgxCarouselComponent;

  public slides = [
      {
        src: "assets/images/svg/carousel/Onboarding1.svg"
      },
      {
        src: "assets/images/svg/carousel/Onboarding2.svg"
      },
      {
        src: "assets/images/svg/carousel/Onboarding3.svg"
      }
  ];

  public loop = false;
  public current: number;
  private _prevArrow: HTMLElement;
  private _nextArrow: HTMLElement;

  constructor(private router: Router) { }

  public ngOnInit() {
      this.current = this.carousel.current;
      this.carousel.onSlideChanged.subscribe((evt) => {
        this.current = evt.carousel.current + 1;
        if (this.current === 1) {
            this._prevArrow.style.opacity = ".5";
            this._prevArrow.style.pointerEvents = "none";
            this._nextArrow.style.opacity = "";
            this._nextArrow.style.pointerEvents = "all";

        } else if (this.current === this.carousel.slides.length) {
            this._nextArrow.style.opacity = ".5";
            this._nextArrow.style.pointerEvents = "none";
            this._prevArrow.style.opacity = "";
            this._prevArrow.style.pointerEvents = "all";

        } else {
            this._prevArrow.style.opacity = "";
            this._nextArrow.style.opacity = "";
            this._prevArrow.style.pointerEvents = "all";
            this._nextArrow.style.pointerEvents = "all";

        }
      });
  }

  public ngAfterViewInit() {
    this._nextArrow = (document.getElementsByClassName("igx-carousel__arrow--next")[0] as HTMLElement);
    this._prevArrow = (document.getElementsByClassName("igx-carousel__arrow--prev")[0] as HTMLElement);
  }

  public goTo() {
    this.router.navigate(["layouts/details"]);
  }
}
