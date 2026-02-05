import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcRatingComponent, IgcSwitchComponent } from 'igniteui-webcomponents';
import { IgcGridLite } from 'igniteui-grid-lite';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';

IgcGridLite.register();
defineComponents(IgcRatingComponent, IgcSwitchComponent);

@Component({
  selector: 'app-grid-lite-sorting-grid-config',
  templateUrl: './grid-lite-sorting-grid-config.component.html',
  styleUrls: ['./grid-lite-sorting-grid-config.component.scss'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteSortingGridConfigComponent implements OnInit {
  private dataService = inject(GridLiteDataService);

  @ViewChild('gridLite', { static: true }) gridLite!: ElementRef;

  public data: ProductInfo[] = [];
  public sortingOptions: any = {
    mode: 'multiple'
  };

  ngOnInit() {
    this.data = this.dataService.generateProducts(100);
  }

  protected ratingTemplate = (params: any) => {
    const rating = document.createElement('igc-rating');
    rating.setAttribute('readonly', '');
    rating.setAttribute('step', '0.01');
    rating.setAttribute('value', params.value.toString());
    return rating;
  };

  protected updateConfig(value: boolean) {
    this.sortingOptions = { ...this.sortingOptions, mode: value ? 'multiple' : 'single' };
    this.gridLite.nativeElement.clearSort();
  }
}
