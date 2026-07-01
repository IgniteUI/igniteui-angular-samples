import { Component, ChangeDetectionStrategy } from "@angular/core";
import { DATA } from '../../data/pivot-data';

import { IPivotConfiguration, IgxPivotNumericAggregate } from 'igniteui-angular/grids/core';
import { IgxPivotGridComponent } from 'igniteui-angular/grids/pivot-grid';

@Component({
    selector: 'app-pivot-styling',
    styleUrls: ['./pivot-styling.component.scss'],
    templateUrl: './pivot-styling.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxPivotGridComponent]
})

export class PivotStylingComponent {
  public data = DATA;
  public pivotConfigHierarchy: IPivotConfiguration = {
    columns: [
      {
        memberName: 'Product',
        memberFunction: (data) => data.Product.Name,
        enabled: true
      } 
    ],
    rows: [
      {
        memberName: 'Seller',
        memberFunction: (data) => data.Seller.Name,
        enabled: true
      }
    ],
    values: [
      {
        member: 'NumberOfUnits',
        aggregate: {
          aggregator: IgxPivotNumericAggregate.sum,
          key: 'sum',
          label: 'Sum'
        },
        enabled: true
      }
    ],
    filters: null
  };
}
