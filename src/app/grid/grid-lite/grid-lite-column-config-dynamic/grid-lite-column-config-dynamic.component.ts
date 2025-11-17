import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcButtonComponent, IgcCheckboxComponent, IgcDropdownComponent, IgcSwitchComponent } from 'igniteui-webcomponents';
import { IgcGridLite } from 'igc-grid-lite';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';

IgcGridLite.register();
defineComponents(IgcCheckboxComponent, IgcDropdownComponent, IgcSwitchComponent, IgcButtonComponent);

@Component({
  selector: 'app-grid-lite-column-config-dynamic',
  templateUrl: './grid-lite-column-config-dynamic.component.html',
  styleUrls: ['./grid-lite-column-config-dynamic.component.scss'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteColumnConfigDynamicComponent implements OnInit {
  private dataService = inject(GridLiteDataService);
  
  @ViewChild('gridLite', { static: false }) gridLite!: ElementRef;
  
  public data: ProductInfo[] = [];
  public columns: any[] = [];
  public hasFormatters = true;

  private formatter = new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: 'EUR'
  });

  ngOnInit() {
    this.data = this.dataService.generateProducts(50);
    
    this.columns = [
      { 
        key: 'id', 
        hidden: true, 
        headerText: 'ID',
        width: '15rem'
      },
      { 
        key: 'name', 
        headerText: 'Product Name',
        width: '15rem'
      },
      {
        key: 'price',
        headerText: 'Price',
        type: 'number',
        width: '15rem',
        cellTemplate: (params: any) => {
          const span = document.createElement('span');
          span.textContent = this.formatter.format(params.value);
          return span;
        }
      },
      { 
        key: 'sold', 
        type: 'number', 
        headerText: 'Units sold',
        width: '15rem'
      },
      { 
        key: 'total', 
        headerText: 'Total sold',
        width: '15rem',
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
        width: '15rem',
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

  updateColumnProperty(key: string, prop: string, value: any) {
    const grid = this.gridLite?.nativeElement as any;
    if (grid && grid.updateColumns) {
      grid.updateColumns({ key, [prop]: value });
    }
  }

  toggleFormatters(enabled: boolean) {
    this.hasFormatters = enabled;
    const grid = this.gridLite?.nativeElement as any;
    if (grid && grid.updateColumns) {
      const updates = ['price', 'total'].map(key => ({
        key,
        cellTemplate: enabled ? (params: any) => {
          const span = document.createElement('span');
          span.textContent = this.formatter.format(params.value);
          return span;
        } : undefined
      }));
      grid.updateColumns(updates);
    }
  }
}
