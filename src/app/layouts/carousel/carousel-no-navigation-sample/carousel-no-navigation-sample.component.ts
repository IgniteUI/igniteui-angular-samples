import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxCarouselComponent, IgxListComponent, ISlideEventArgs, IListItemClickEventArgs } from "igniteui-angular";

@Component({
  selector: "app-carousel",
  styleUrls: ["./carousel-no-navigation-sample.component.scss"],
  templateUrl: "./carousel-no-navigation-sample.component.html"
})
export class CarouselNoNavigationSampleComponent implements OnInit {
  @ViewChild(IgxCarouselComponent, { static: true }) public carousel: IgxCarouselComponent;
  @ViewChild(IgxListComponent, {static: true})
  public list: IgxListComponent;

  public slides: any[] = [];
  public currentIndex = 0;
  constructor() { }

  public ngOnInit() {
    this.addSlides();

    this.list.onItemClicked.subscribe((args: IListItemClickEventArgs) => {
        this.currentIndex = args.item.index;
        this.carousel.select(this.carousel.get(this.currentIndex));
    });

    this.carousel.onSlideChanged.subscribe((args: ISlideEventArgs) => {
        this.currentIndex = args.slide.index;
    });
  }

  public addSlides() {
    this.slides.push(
      {
        title: "Wonderful Coast",
        subTitle: "May to October",
        image: "assets/images/carousel/WonderfulCoast",
        price: 1299,
        description: "Delicious seafood and wines along the coasts of beautiful Italy"
      },
      {
        title: "Cultural Dip",
        subTitle: "July and August",
        image: "assets/images/carousel/CulturalDip",
        price: 1949,
        description: "Immerse yourself in the history and culture of the far East"
      },
      {
        title: "Golden Beaches",
        subTitle: "October to March",
        image: "assets/images/carousel/GoldenBeaches",
        price: 2799,
        description: "Endless beachfronts, crystal blue water and the finest grains of sand"
      },
      { title: "Island Of History",
        subTitle: "May to October",
        image: "assets/images/carousel/IslandOfHistory",
        price: 1419,
        description: "Discover this hidden gem of the Mediterranean rich of antiquity"
      },
      {
        title: "Amazing Bridge",
        subTitle: "Spring and Autumn",
        image: "assets/images/carousel/AmazingBridge",
        price: 1049,
        description: "Walk along one of the engineering wonders of the twentieth century"
      }
    );
  }
}
