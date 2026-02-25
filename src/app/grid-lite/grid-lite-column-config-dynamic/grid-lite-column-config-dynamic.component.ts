import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxButtonDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxDropDownComponent, IgxDropDownItemComponent, IgxDropDownItemNavigationDirective } from 'igniteui-angular/drop-down';
import { IgcGridLite } from 'igniteui-grid-lite';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';

IgcGridLite.register();
defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-grid-lite-column-config-dynamic',
  templateUrl: './grid-lite-column-config-dynamic.component.html',
  styleUrls: ['./grid-lite-column-config-dynamic.component.scss'],
  imports: [
    CommonModule,
    IgxButtonDirective,
    IgxToggleActionDirective,
    IgxDropDownItemNavigationDirective,
    IgxDropDownComponent,
    IgxDropDownItemComponent,
    IgxCheckboxComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true
})
export class GridLiteColumnConfigDynamicComponent implements OnInit {
  private dataService = inject(GridLiteDataService);

  public data: ProductInfo[] = [];
  public hasFormatters = true;

  public columns = [
    { field: 'id', header: 'ID', hidden: true, resizable: true, sortable: false, filterable: false },
    { field: 'name', header: 'Product Name', hidden: false, resizable: true, sortable: false, filterable: false },
    { field: 'price', header: 'Price', hidden: false, resizable: true, sortable: false, filterable: false },
    { field: 'sold', header: 'Units sold', hidden: false, resizable: true, sortable: false, filterable: false, dataType: 'number' },
    { field: 'total', header: 'Total sold', hidden: false, resizable: true, sortable: false, filterable: false },
    { field: 'rating', header: 'Customer rating', hidden: false, resizable: true, sortable: false, filterable: false, dataType: 'number' }
  ];

  public formatter = new Intl.NumberFormat('en-150', { style: 'currency', currency: 'EUR' });

  ngOnInit() {
    this.data = this.dataService.generateProducts(50);
  }

  protected formatCurrency = (params: any) => this.formatter.format(params.value);

  protected ratingTemplate = (params: any) => {
    const rating = document.createElement('igc-rating');
    rating.setAttribute('readonly', '');
    rating.setAttribute('step', '0.01');
    rating.setAttribute('value', params.value.toString());
    return rating;
  };

  toggleColumnProperty(column: any, property: string, value: boolean) {
    column[property] = value;
    // Trigger Angular change detection
    this.columns = [...this.columns];
  }

  toggleFormatters(event: any) {
    this.hasFormatters = event.detail.checked;
  }
}
