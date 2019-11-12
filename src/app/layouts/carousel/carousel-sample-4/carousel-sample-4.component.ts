import { Component, OnInit, ViewChild, ViewChildren, ViewEncapsulation, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import {IgxButtonModule, IgxCarouselComponent, IgxLinearProgressBarComponent } from "igniteui-angular";

@Component({
  selector: "app-carousel",
  styleUrls: ["./carousel-sample-4.component.scss"],
  templateUrl: "./carousel-sample-4.component.html"
})
export class CarouselSample4Component implements OnInit, AfterViewInit {
  @ViewChild("carousel", { static: true }) public carousel: IgxCarouselComponent;

  public slides: any[] = [];
  public loop = false;
  public total: number;
  public current: number;
  private _prevArrow: HTMLElement;
  private _nextArrow: HTMLElement;

  constructor(private router: Router) { }

  public ngOnInit() {
      this.addNewSlide();
      this.carousel.stop();
      this.total = this.slides.length;
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

  public addNewSlide() {
    this.slides.push(
      {
        src: "assets/images/svg/carousel/Onboarding1.svg"
      },
      {
        src: "assets/images/svg/carousel/Onboarding2.svg"
      },
      {
        src: "assets/images/svg/carousel/Onboarding3.svg"
      }
    );
  }

  public goTo() {
    this.router.navigate(["layouts/details"]);
  }
}
