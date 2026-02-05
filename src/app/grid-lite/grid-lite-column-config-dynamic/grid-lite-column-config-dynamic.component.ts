import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcButtonComponent, IgcCheckboxComponent, IgcDropdownComponent, IgcSwitchComponent } from 'igniteui-webcomponents';
import { IgcGridLite } from 'igniteui-grid-lite';
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

  public data: ProductInfo[] = [];
  public hasFormatters = true;

  public formatter = new Intl.NumberFormat('en-150', {
    style: 'currency',
    currency: 'EUR'
  });

  ngOnInit() {
    this.data = this.dataService.generateProducts(50);
  }

  protected formatCurrency = (params: any) => {
    return this.formatter.format(params.value);
  };

  protected ratingTemplate = (params: any) => {
    const rating = document.createElement('igc-rating');
    rating.setAttribute('readonly', '');
    rating.setAttribute('step', '0.01');
    rating.setAttribute('value', params.value.toString());
    return rating;
  };
}
