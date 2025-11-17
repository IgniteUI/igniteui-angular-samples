import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { IgcGridLite } from 'igniteui-grid-lite';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';

IgcGridLite.register();
defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-grid-lite-column-config-headers',
  templateUrl: './grid-lite-column-config-headers.component.html',
  styleUrls: ['./grid-lite-column-config-headers.component.scss'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteColumnConfigHeadersComponent implements OnInit {
  private dataService = inject(GridLiteDataService);
  
  public data: ProductInfo[] = [];
  public columns: any[] = [];

  ngOnInit() {
    this.data = this.dataService.generateProducts(50);
    
    this.columns = [
      { 
        key: 'name', 
        headerText: 'Product Name' 
      },
      {
        key: 'price',
        headerText: 'Price (€)',
        type: 'number'
      },
      { 
        key: 'sold', 
        type: 'number', 
        headerText: 'Units Sold' 
      },
      { 
        key: 'total', 
        headerText: 'Total Revenue',
        type: 'number'
      },
      {
        key: 'rating',
        type: 'number',
        headerText: 'Customer Rating ⭐',
        cellTemplate: (params: any) => {
          const rating = document.createElement('igc-rating');
          rating.setAttribute('readonly', '');
          rating.setAttribute('step', '0.01');
          rating.setAttribute('value', params.value.toString());
          return rating;
        }
      }
    ];
  }
}
