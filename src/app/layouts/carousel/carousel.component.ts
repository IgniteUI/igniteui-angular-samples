import { Component } from '@angular/core';
import { IgxCarouselComponent, IgxSlideComponent } from 'igniteui-angular';


@Component({
    selector: 'app-carousel',
    styleUrls: ['./carousel.component.scss'],
    templateUrl: './carousel.component.html',
    imports: [IgxCarouselComponent, IgxSlideComponent]
})

export class CarouselComponent {

  public slides = [
      {
        src: 'assets/images/carousel/ignite-ui-angular-indigo-design.png'
      },
      {
        src: 'assets/images/carousel/slider-image-chart.png'
      },
      {
        src: 'assets/images/carousel/ignite-ui-angular-charts.png'
      }
  ];
}
