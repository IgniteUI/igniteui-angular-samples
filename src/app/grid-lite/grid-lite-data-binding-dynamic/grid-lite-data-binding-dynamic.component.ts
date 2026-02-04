import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcButtonComponent } from 'igniteui-webcomponents';
import { IgcGridLite } from 'igniteui-grid-lite';
import { GridLiteDataService, ProductInfo, UserSimple } from '../grid-lite-data.service';

IgcGridLite.register();
defineComponents(IgcButtonComponent);

@Component({
  selector: 'app-grid-lite-data-binding-dynamic',
  templateUrl: './grid-lite-data-binding-dynamic.component.html',
  styleUrls: ['./grid-lite-data-binding-dynamic.component.scss'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteDataBindingDynamicComponent implements OnInit {
  private dataService = inject(GridLiteDataService);
  
  @ViewChild('gridLite', { static: false }) gridLite!: ElementRef;
  
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
