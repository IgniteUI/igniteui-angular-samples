import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-carousel",
  styleUrls: ["./carousel.component.css"],
  templateUrl: "./carousel.component.html"
})
export class CarouselComponent implements OnInit {

  public slides: any[] = [];
  public interval = 3000;
  public pause = true;
  public loop = true;
  constructor() { }

  public ngOnInit() {
    this.addNewSlide();
  }

  public addNewSlide() {
    this.slides.push(
      { image: "assets/images/carousel/slide1@x2.jpg" },
      { image: "assets/images/carousel/slide2@x2.jpg" },
      { image: "assets/images/carousel/slide3@x2.jpg" },
      { image: "assets/images/carousel/slide4@x2.jpg" }
    );
  }
}
