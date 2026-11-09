import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcRatingComponent, IgcSelectComponent, IgcSelectItemComponent } from 'igniteui-webcomponents';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';
import { IgxGridLiteComponent, IgxGridLiteColumnComponent } from 'igniteui-angular/grids/lite';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-grid-lite-styling-themes',
  templateUrl: './grid-lite-styling-themes.component.html',
  styleUrls: ['./grid-lite-styling-themes.component.scss'],
  imports: [
    CommonModule,
    IgxGridLiteComponent,
    IgxGridLiteColumnComponent,
    IgxSelectComponent,
    IgxSelectItemComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteStylingThemesComponent implements OnInit {
  private dataService = inject(GridLiteDataService);

  public data: ProductInfo[] = [];
  public selectedTheme = 'Bootstrap';
  public themes = [
    'Bootstrap',
    'Bootstrap Dark',
    'Fluent',
    'Fluent Dark',
    'Material',
    'Material Dark',
    'Indigo',
    'Indigo Dark'
  ];

  ngOnInit() {
    this.data = this.dataService.generateProducts(50);
  }

  updateTheme(event: any) {
    this.selectedTheme = event.value;
  }
}
