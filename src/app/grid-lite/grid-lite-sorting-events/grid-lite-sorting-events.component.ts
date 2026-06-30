import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';
import {
  IgxGridLiteComponent,
  IgxGridLiteColumnComponent,
  IgxGridLiteCellTemplateDirective
} from 'igniteui-angular/grids/lite';

defineComponents(IgcRatingComponent);

@Component({
  selector: 'app-grid-lite-sorting-events',
  templateUrl: './grid-lite-sorting-events.component.html',
  styleUrls: ['./grid-lite-sorting-events.component.scss'],
    imports: [
      CommonModule,
      IgxGridLiteComponent,
      IgxGridLiteColumnComponent,
      IgxGridLiteCellTemplateDirective
    ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteSortingEventsComponent implements OnInit {
  private dataService = inject(GridLiteDataService);

  public data: ProductInfo[] = [];
  public log: string[] = [];

  ngOnInit() {
    this.data = this.dataService.generateProducts(100);
  }

  private get timeStamp(): string {
    return `[${new Date().toLocaleTimeString()}]`;
  }

  private updateLog(message: string) {
    if (this.log.length > 10) {
      this.log.shift();
    }
    this.log = [...this.log, message];
  }

  handleSorting(event: any) {
    const { detail, type } = event;
    const allowedColumns = ['price', 'total', 'sold'];

    if (!allowedColumns.includes(detail.key)) {
      event.preventDefault();
      this.updateLog(
        `${this.timeStamp} :: Event '${type}' :: Sort operation was prevented for column '${detail.key}'`
      );
    } else {
      this.updateLog(
        `${this.timeStamp} :: Event '${type}' :: Column '${detail.key}' is being sorted with expression: ${JSON.stringify(detail)}`
      );
    }
  }

  handleSorted(event: any) {
    const { detail, type } = event;
    this.updateLog(
      `${this.timeStamp} :: Event '${type}' :: Column '${detail.key}' was sorted with expression: ${JSON.stringify(detail)}`
    );
  }
}
