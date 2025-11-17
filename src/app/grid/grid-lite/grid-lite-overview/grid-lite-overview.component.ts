import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  defineComponents,
  IgcRatingComponent,
  IgcCheckboxComponent,
  IgcSelectComponent,
  IgcAvatarComponent,
} from 'igniteui-webcomponents';
import { IgcGridLite } from 'igc-grid-lite';
import { GridLiteDataService, User } from '../grid-lite-data.service';

IgcGridLite.register();

defineComponents(
  IgcAvatarComponent,
  IgcRatingComponent,
  IgcCheckboxComponent,
  IgcSelectComponent
);

@Component({
  selector: 'app-grid-lite-overview',
  templateUrl: './grid-lite-overview.component.html',
  styleUrls: ['./grid-lite-overview.component.scss'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteOverviewComponent implements OnInit {
  private dataService = inject(GridLiteDataService);
  
  public data: User[] = [];
  public columns: any[] = [];
  private choices = ['Low', 'Standard', 'High'];

  ngOnInit() {
    this.data = this.dataService.generateUsers(1000);
    
    this.columns = [
      {
        key: 'avatar',
        headerText: 'Avatar',
        cellTemplate: (params: any) => {
          const cell = document.createElement('igc-avatar');
          cell.setAttribute('shape', 'circle');
          cell.setAttribute('alt', 'User avatar');
          cell.setAttribute('src', params.value);
          return cell;
        }
      },
      {
        key: 'firstName',
        headerText: 'First name',
        sort: true,
        filter: true,
        resizable: true
      },
      {
        key: 'lastName',
        headerText: 'Last name',
        sort: true,
        filter: true,
        resizable: true
      },
      {
        key: 'email',
        headerText: 'Email Address'
      },
      {
        key: 'priority',
        headerText: 'Priority',
        width: '12rem',
        sort: {
          comparer: (a: string, b: string) => this.choices.indexOf(a) - this.choices.indexOf(b),
          caseSensitive: true
        },
        cellTemplate: (params: any) => {
          const select = document.createElement('igc-select');
          select.setAttribute('outlined', '');
          select.setAttribute('flip', '');
          select.setAttribute('value', params.value);
          
          this.choices.forEach(choice => {
            const item = document.createElement('igc-select-item');
            item.setAttribute('value', choice);
            item.textContent = choice;
            select.appendChild(item);
          });
          
          return select;
        }
      },
      {
        key: 'satisfaction',
        headerText: 'Satisfaction rating',
        type: 'number',
        sort: true,
        filter: true,
        cellTemplate: (params: any) => {
          const rating = document.createElement('igc-rating');
          rating.setAttribute('readonly', '');
          rating.setAttribute('value', params.value.toString());
          return rating;
        }
      },
      {
        key: 'registeredAt',
        headerText: 'Registered @',
        sort: true,
        cellTemplate: (params: any) => {
          const span = document.createElement('span');
          span.textContent = params.value.toLocaleString();
          return span;
        }
      },
      {
        key: 'active',
        type: 'boolean',
        headerText: 'Active',
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
