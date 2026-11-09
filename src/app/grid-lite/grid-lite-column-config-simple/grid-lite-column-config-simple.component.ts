import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';
import { IgxGridLiteComponent, IgxGridLiteColumnComponent, IgxGridLiteCellTemplateDirective } from 'igniteui-angular/grids/lite';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-grid-lite-column-config-simple',
  templateUrl: './grid-lite-column-config-simple.component.html',
  styleUrls: ['./grid-lite-column-config-simple.component.scss'],
  imports: [CommonModule, IgxGridLiteComponent, IgxGridLiteColumnComponent, IgxGridLiteCellTemplateDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteColumnConfigSimpleComponent implements OnInit {
  private dataService = inject(GridLiteDataService);

  public data: ProductInfo[] = [];

  public formatter = new Intl.NumberFormat('en-150', {
    style: 'currency',
    currency: 'EUR'
  });

  ngOnInit() {
    this.data = this.dataService.generateProducts(50);
  }

  protected formatCurrency = (value: number) => {
    return this.formatter.format(value);
  };
}
