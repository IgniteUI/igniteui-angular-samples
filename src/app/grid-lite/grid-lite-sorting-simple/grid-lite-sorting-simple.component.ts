import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';
import { IgxGridLiteComponent, IgxGridLiteColumnComponent, IgxGridLiteCellTemplateDirective } from 'igniteui-angular/grids/lite';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-grid-lite-sorting-simple',
  templateUrl: './grid-lite-sorting-simple.component.html',
  styleUrls: ['./grid-lite-sorting-simple.component.scss'],
    imports: [
    CommonModule,
    IgxGridLiteComponent,
    IgxGridLiteColumnComponent,
    IgxGridLiteCellTemplateDirective
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteSortingSimpleComponent implements OnInit {
  private dataService = inject(GridLiteDataService);

  public data: ProductInfo[] = [];

  ngOnInit() {
    this.data = this.dataService.generateProducts(100);
  }

  protected nameComparer = (a: string, b: string) => a.length - b.length;
}
