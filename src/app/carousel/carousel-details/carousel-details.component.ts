import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IgxButtonModule, IgxSlide } from "igniteui-angular/main";
import { slides } from "../mock-slides";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-carousel",
  templateUrl: "./carousel-details.component.html"
})
export class CarouselDetailsViewComponent implements OnInit {
  public slide: any;
  public index: number;
  private sub: any;

  constructor(private rout: ActivatedRoute, private router: Router) {}

  public ngOnInit() {
    this.sub = this.rout.params.subscribe((params) => {
      this.index = +params.index; // (+) converts string 'id' to a number
      this.slide = slides[this.index];
   });
  }

  public goBack() {
    this.router.navigate(["/carousel-sample-4"]);
  }
}
