import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcSwitchComponent } from 'igniteui-webcomponents';
import { IgcGridLite } from 'igniteui-grid-lite';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';

IgcGridLite.register();
defineComponents(IgcSwitchComponent);

@Component({
  selector: 'app-grid-lite-styling-custom',
  templateUrl: './grid-lite-styling-custom.component.html',
  styleUrls: ['./grid-lite-styling-custom.component.scss'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteStylingCustomComponent implements OnInit {
  private dataService = inject(GridLiteDataService);
  
  public data: ProductInfo[] = [];
  public columns: any[] = [];
  public theme: 'dark' | 'light' = 'dark';

  ngOnInit() {
    this.data = this.dataService.generateProducts(50);
    
    this.columns = [
      { 
        key: 'name', 
        headerText: 'Product', 
        filter: true, 
        sort: true 
      },
      {
        key: 'price',
        headerText: 'Price',
        type: 'number',
        filter: true,
        sort: true
      },
      { 
        key: 'sold', 
        type: 'number', 
        headerText: 'Sold',
        filter: true,
        sort: true
      },
      { 
        key: 'total', 
        headerText: 'Total',
        type: 'number',
        filter: true,
        sort: true
      },
      {
        key: 'rating',
        type: 'number',
        headerText: 'Rating',
        filter: true,
        sort: true
      }
    ];
  }

  switchTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
  }
}
