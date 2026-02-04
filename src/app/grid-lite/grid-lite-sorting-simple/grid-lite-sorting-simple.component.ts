import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { IgcGridLite } from 'igniteui-grid-lite';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';

IgcGridLite.register();
defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-grid-lite-sorting-simple',
  templateUrl: './grid-lite-sorting-simple.component.html',
  styleUrls: ['./grid-lite-sorting-simple.component.scss'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteSortingSimpleComponent implements OnInit {
  private dataService = inject(GridLiteDataService);
  
  public data: ProductInfo[] = [];

  ngOnInit() {
    this.data = this.dataService.generateProducts(100);
  }

  nameComparer = (a: string, b: string) => a.length - b.length;

  formatRating = (params: any) => {
    const rating = document.createElement('igc-rating');
    rating.setAttribute('readonly', '');
    rating.setAttribute('step', '0.01');
    rating.setAttribute('value', params.value.toString());
    return rating;
  };
}
