import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcSwitchComponent } from 'igniteui-webcomponents';
import { IgcGridLite } from 'igniteui-grid-lite';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';

IgcGridLite.register();
defineComponents(IgcSwitchComponent);

@Component({
  selector: 'app-grid-lite-styling-custom',
  templateUrl: './grid-lite-styling-custom.component.html',
  styleUrls: ['./grid-lite-styling-custom.component.scss'],
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
