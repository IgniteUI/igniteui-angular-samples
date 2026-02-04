import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcCheckboxComponent } from 'igniteui-webcomponents';
import { IgcGridLite } from 'igniteui-grid-lite';
import { GridLiteDataService, User } from '../grid-lite-data.service';

IgcGridLite.register();
defineComponents(IgcCheckboxComponent);

@Component({
  selector: 'app-grid-lite-filtering-events',
  templateUrl: './grid-lite-filtering-events.component.html',
  styleUrls: ['./grid-lite-filtering-events.component.scss'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteFilteringEventsComponent implements OnInit {
  private dataService = inject(GridLiteDataService);
  
  public data: User[] = [];
  public log: string[] = [];

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

  private get timeStamp(): string {
    return `[${new Date().toLocaleTimeString()}]`;
  }

  private updateLog(message: string) {
    if (this.log.length > 10) {
      this.log.shift();
    }
    this.log = [...this.log, message];
  }

  handleFiltering(event: any) {
    const { expressions, type } = event.detail;
    this.updateLog(
      `${this.timeStamp} :: Event 'filtering' :: Filter operation of type '${type}' for column '${expressions[0].key}'`
    );
  }

  handleFiltered(event: any) {
    this.updateLog(
      `${this.timeStamp} :: Event 'filtered' for column '${event.detail.key}'`
    );
  }
}
