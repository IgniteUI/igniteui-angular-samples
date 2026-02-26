import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridLiteDataService, ProductInfo, UserSimple } from '../grid-lite-data.service';
import { IgxGridLiteComponent, IgxGridLiteColumnComponent } from 'igniteui-angular/grids/lite';
import { IgxButtonDirective } from 'igniteui-angular/directives';

@Component({
  selector: 'app-grid-lite-data-binding-dynamic',
  templateUrl: './grid-lite-data-binding-dynamic.component.html',
  styleUrls: ['./grid-lite-data-binding-dynamic.component.scss'],
  imports: [
    CommonModule,
    IgxGridLiteComponent,
    IgxGridLiteColumnComponent,
    IgxButtonDirective
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteDataBindingDynamicComponent implements OnInit {
  private dataService = inject(GridLiteDataService);

  public data: (ProductInfo | UserSimple)[] = [];
  public dataType: 'products' | 'users' = 'products';

  ngOnInit() {
    this.data = this.dataService.generateProducts(50);
  }

  switchData() {
    this.dataType = this.dataType === 'products' ? 'users' : 'products';
    if (this.dataType === 'products') {
      this.data = this.dataService.generateProducts(50);
    } else {
      this.data = this.dataService.generateSimpleUsers(50);
    }
  }
}
