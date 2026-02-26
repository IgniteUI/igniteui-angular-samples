import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcCheckboxComponent } from 'igniteui-webcomponents';
import { GridLiteDataService, User } from '../grid-lite-data.service';
import {
  IgxGridLiteComponent,
  IgxGridLiteColumnComponent,
  IgxGridLiteCellTemplateDirective
} from 'igniteui-angular/grids/lite';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';

defineComponents(IgcCheckboxComponent);

@Component({
  selector: 'app-grid-lite-filtering-events',
  templateUrl: './grid-lite-filtering-events.component.html',
  styleUrls: ['./grid-lite-filtering-events.component.scss'],
  imports: [
    CommonModule,
    IgxGridLiteComponent,
    IgxGridLiteColumnComponent,
    IgxGridLiteCellTemplateDirective,
    IgxCheckboxComponent
  ]
})
export class GridLiteFilteringEventsComponent implements OnInit {
  private dataService = inject(GridLiteDataService);

  public data: User[] = [];
  public log: string[] = [];

  ngOnInit(): void {
    this.data = this.dataService.generateUsers(50);
  }

  private get timeStamp(): string {
    return `[${new Date().toLocaleTimeString()}]`;
  }

  private updateLog(message: string): void {
    if (this.log.length >= 10) {
      this.log.shift();
    }
    this.log = [...this.log, message];
  }

  handleFiltering(event: any): void {
    const { expressions, type } = event.detail;

    this.updateLog(
      `${this.timeStamp} :: Event 'filtering' :: Filter operation of type '${type}' for column '${expressions[0].key}'`
    );
  }

  handleFiltered(event: any): void {
    this.updateLog(
      `${this.timeStamp} :: Event 'filtered' for column '${event.detail.key}'`
    );
  }
}
