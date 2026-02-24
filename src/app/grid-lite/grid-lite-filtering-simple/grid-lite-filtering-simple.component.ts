import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcCheckboxComponent } from 'igniteui-webcomponents';
import { GridLiteDataService, User } from '../grid-lite-data.service';
import { IgxGridLiteComponent, IgxGridLiteColumnComponent, IgxGridLiteCellTemplateDirective } from 'igniteui-angular/grids/lite';
import { IgxCheckboxComponent } from 'igniteui-angular';

defineComponents(IgcCheckboxComponent);

@Component({
  selector: 'app-grid-lite-filtering-simple',
  templateUrl: './grid-lite-filtering-simple.component.html',
  styleUrls: ['./grid-lite-filtering-simple.component.scss'],
  imports: [
    CommonModule,
    IgxGridLiteComponent,
    IgxGridLiteColumnComponent,
    IgxGridLiteCellTemplateDirective,
    IgxCheckboxComponent
],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteFilteringSimpleComponent implements OnInit {
  private dataService = inject(GridLiteDataService);

  public data: User[] = [];

  ngOnInit() {
    this.data = this.dataService.generateUsers(50);
  }
}
