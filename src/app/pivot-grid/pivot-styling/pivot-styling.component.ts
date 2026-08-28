import { Component, ChangeDetectionStrategy, signal } from "@angular/core";
import { DATA } from '../../data/pivot-data';

import { IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IPivotConfiguration, IgxPivotNumericAggregate } from 'igniteui-angular/grids/core';
import { IgxPivotGridComponent } from 'igniteui-angular/grids/pivot-grid';

@Component({
    selector: 'app-pivot-styling',
    styleUrls: ['./pivot-styling.component.scss'],
    templateUrl: './pivot-styling.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxPivotGridComponent, IgxButtonGroupComponent, IgxButtonDirective]
})

export class PivotStylingComponent {
  public data = DATA;
  public themes = [
    { label: 'Studio', class: 'theme-studio', swatch: 'theme-swatch--studio' },
    { label: 'Ledger', class: 'theme-ledger', swatch: 'theme-swatch--ledger' },
    { label: 'Editorial', class: 'theme-editorial', swatch: 'theme-swatch--editorial' },
    { label: 'Midnight', class: 'theme-midnight', swatch: 'theme-swatch--midnight' }
  ];

  public activeTheme = signal(this.themes[0].class);

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
        memberName: 'City',
        memberFunction: (data) => data.Seller.City,
        enabled: true,
        childLevel: {
          memberName: 'Seller',
          memberFunction: (data) => data.Seller.Name,
          enabled: true
        }
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

  public selectTheme(args: { index: number }) {
    this.activeTheme.set(this.themes[args.index].class);
  }
}
