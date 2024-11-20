import { Component } from '@angular/core';

@Component({
    selector: 'app-carousel',
    styleUrls: ['./carousel.component.scss'],
    templateUrl: './carousel.component.html',
    standalone: false
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
