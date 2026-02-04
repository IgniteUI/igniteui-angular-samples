import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcRatingComponent, IgcCircularProgressComponent } from 'igniteui-webcomponents';
import { IgcGridLite } from 'igniteui-grid-lite';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';

IgcGridLite.register();
defineComponents(IgcRatingComponent, IgcCircularProgressComponent);

@Component({
  selector: 'app-grid-lite-sorting-pipeline',
  templateUrl: './grid-lite-sorting-pipeline.component.html',
  styleUrls: ['./grid-lite-sorting-pipeline.component.scss'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteSortingPipelineComponent implements OnInit {
  private dataService = inject(GridLiteDataService);
  
  public data: ProductInfo[] = [];
  public dataPipelineConfiguration: any;
  public inOperation = false;
  public queryString = '';

  ngOnInit() {
    this.data = this.dataService.generateProducts(100);

    this.dataPipelineConfiguration = {
      sort: async ({ data, grid }: any) => {
        this.inOperation = true;
        this.queryString = grid.sortingExpressions.length
          ? this.buildUri(grid.sortingExpressions)
          : '';
        await new Promise(resolve => setTimeout(resolve, 250));
        this.inOperation = false;
        return data;
      }
    };
  }

  formatRating = (params: any) => {
    const rating = document.createElement('igc-rating');
    rating.setAttribute('readonly', '');
    rating.setAttribute('step', '0.01');
    rating.setAttribute('value', params.value.toString());
    return rating;
  };

  private buildUri(state: any[]): string {
    const uri: string[] = [];
    for (const expr of state) {
      if (expr.direction === 'none') {
        continue;
      }
      uri.push(
        expr.direction === 'ascending'
          ? `asc(${expr.key})`
          : `desc(${expr.key})`
      );
    }
    return `GET: /data?sort_by=${uri.join(',')}`;
  }
}
