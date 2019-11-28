import { Component} from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-details",
  templateUrl: "./carousel-details.component.html",
  styleUrls: ["./carousel-details.component.scss"]
})
export class CarouselDetailsViewComponent {
  public slide: any;
  public index: number;

  constructor(private router: Router) { }

  public goBack() {
    this.router.navigate(["layouts/carousel-base-sample"]);
  }
}
