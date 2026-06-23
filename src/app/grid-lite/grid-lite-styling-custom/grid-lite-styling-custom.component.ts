import { Component, OnInit, inject, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcSwitchComponent } from 'igniteui-webcomponents';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';
import { IgxGridLiteComponent, IgxGridLiteColumnComponent } from 'igniteui-angular/grids/lite';
import { IgxSwitchComponent } from 'igniteui-angular/switch';

defineComponents(IgcSwitchComponent);

@Component({
  selector: 'app-grid-lite-styling-custom',
  templateUrl: './grid-lite-styling-custom.component.html',
  styleUrls: ['./grid-lite-styling-custom.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    CommonModule,
    IgxGridLiteComponent,
    IgxGridLiteColumnComponent,
    IgxSwitchComponent
  ]
})
export class GridLiteStylingCustomComponent implements OnInit {
  private dataService = inject(GridLiteDataService);

  public data: ProductInfo[] = [];
  public theme: 'dark' | 'light' = 'dark';

  ngOnInit() {
    this.data = this.dataService.generateProducts(50);
  }

  switchTheme() {
    this.theme = this.theme === 'dark' ? 'light' : 'dark';
  }
}
