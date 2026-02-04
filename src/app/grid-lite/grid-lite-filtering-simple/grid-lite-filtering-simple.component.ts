import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcCheckboxComponent } from 'igniteui-webcomponents';
import { IgcGridLite } from 'igniteui-grid-lite';
import { GridLiteDataService, User } from '../grid-lite-data.service';

IgcGridLite.register();
defineComponents(IgcCheckboxComponent);

@Component({
  selector: 'app-grid-lite-filtering-simple',
  templateUrl: './grid-lite-filtering-simple.component.html',
  styleUrls: ['./grid-lite-filtering-simple.component.scss'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteFilteringSimpleComponent implements OnInit {
  private dataService = inject(GridLiteDataService);
  
  public data: User[] = [];

  ngOnInit() {
    this.data = this.dataService.generateUsers(50);
  }

  formatCheckbox = (params: any) => {
    const checkbox = document.createElement('igc-checkbox');
    if (params.value) {
      checkbox.setAttribute('checked', '');
    }
    return checkbox;
  };
}
