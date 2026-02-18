import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  defineComponents,
  IgcRatingComponent,
  IgcCheckboxComponent,
  IgcSelectComponent,
  IgcAvatarComponent
} from 'igniteui-webcomponents';
import { IgcGridLite } from 'igniteui-grid-lite';
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

  ngOnInit() {
    this.data = this.dataService.generateUsers(1000);
  }

  protected avatarTemplate = (params: any) => {
    const cell = document.createElement('igc-avatar');
    cell.setAttribute('shape', 'circle');
    cell.setAttribute('alt', 'User avatar');
    cell.setAttribute('src', params.value);
    return cell;
  };

  protected satisfactionTemplate = (params: any) => {
    const rating = document.createElement('igc-rating');
    rating.setAttribute('readonly', '');
    rating.setAttribute('value', params.value.toString());
    return rating;
  };

  protected registeredAtTemplate = (params: any) => {
    const span = document.createElement('span');
    span.textContent = params.value.toLocaleString();
    return span;
  };
}
