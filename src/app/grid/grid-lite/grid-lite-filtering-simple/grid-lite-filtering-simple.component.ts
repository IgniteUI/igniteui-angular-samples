import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcCheckboxComponent } from 'igniteui-webcomponents';
import { IgcGridLite } from 'igc-grid-lite';
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
  public columns: any[] = [];

  ngOnInit() {
    this.data = this.dataService.generateUsers(50);
    
    this.columns = [
      { 
        key: 'firstName', 
        headerText: 'First name', 
        filter: true 
      },
      { 
        key: 'lastName', 
        headerText: 'Last name', 
        filter: true 
      },
      { 
        key: 'age', 
        headerText: 'Age', 
        filter: true, 
        type: 'number' 
      },
      {
        key: 'active',
        headerText: 'Active',
        type: 'boolean',
        filter: true,
        cellTemplate: (params: any) => {
          const checkbox = document.createElement('igc-checkbox');
          if (params.value) {
            checkbox.setAttribute('checked', '');
          }
          return checkbox;
        }
      }
    ];
  }
}
