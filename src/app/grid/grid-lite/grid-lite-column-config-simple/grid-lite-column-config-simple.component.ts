import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { IgcGridLite } from 'igc-grid-lite';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';

IgcGridLite.register();
defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-grid-lite-column-config-simple',
  templateUrl: './grid-lite-column-config-simple.component.html',
  styleUrls: ['./grid-lite-column-config-simple.component.scss'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteColumnConfigSimpleComponent implements OnInit {
  private dataService = inject(GridLiteDataService);
  
  public data: ProductInfo[] = [];
  public columns: any[] = [];

  private formatter = new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'EUR'
  });

  ngOnInit() {
    this.data = this.dataService.generateProducts(50);
    
    this.columns = [
      { 
        key: 'name', 
        headerText: 'Product Name' 
      },
      {
        key: 'price',
        headerText: 'Price',
        type: 'number',
        cellTemplate: (params: any) => {
          const span = document.createElement('span');
          span.textContent = this.formatter.format(params.value);
          return span;
        }
      },
      { 
        key: 'sold', 
        type: 'number', 
        headerText: 'Units sold' 
      },
      { 
        key: 'total', 
        headerText: 'Total sold',
        cellTemplate: (params: any) => {
          const span = document.createElement('span');
          span.textContent = this.formatter.format(params.value);
          return span;
        }
      },
      {
        key: 'rating',
        type: 'number',
        headerText: 'Customer rating',
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
