import { Component } from '@angular/core';
import { IgxCarouselComponent, IgxSlideComponent } from 'igniteui-angular';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-carousel',
    styleUrls: ['./carousel.component.scss'],
    templateUrl: './carousel.component.html',
    imports: [IgxCarouselComponent, NgFor, IgxSlideComponent]
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
