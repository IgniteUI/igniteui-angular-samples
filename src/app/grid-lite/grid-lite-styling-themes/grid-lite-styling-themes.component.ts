import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcRatingComponent, IgcSelectComponent, IgcSelectItemComponent } from 'igniteui-webcomponents';
import { IgcGridLite } from 'igniteui-grid-lite';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';

IgcGridLite.register();
defineComponents(IgcRatingComponent, IgcSelectComponent, IgcSelectItemComponent);

@Component({
  selector: 'app-grid-lite-styling-themes',
  templateUrl: './grid-lite-styling-themes.component.html',
  styleUrls: ['./grid-lite-styling-themes.component.scss'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteStylingThemesComponent implements OnInit {
  private dataService = inject(GridLiteDataService);
  
  public data: ProductInfo[] = [];
  public selectedTheme = 'Bootstrap';
  public themes = [
    'Bootstrap',
    'Bootstrap Dark',
    'Fluent',
    'Fluent Dark',
    'Material',
    'Material Dark',
    'Indigo',
    'Indigo Dark'
  ];

  ngOnInit() {
    this.data = this.dataService.generateProducts(50);
  }

  formatRating = (params: any) => {
    const rating = document.createElement('igc-rating');
    rating.setAttribute('readonly', '');
    rating.setAttribute('value', params.value.toString());
    return rating;
  };

  updateTheme(event: any) {
    this.selectedTheme = event.detail.value;
  }
}
