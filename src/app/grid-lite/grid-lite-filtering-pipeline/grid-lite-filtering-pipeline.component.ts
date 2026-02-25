import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcCheckboxComponent, IgcCircularProgressComponent } from 'igniteui-webcomponents';
import { GridLiteDataService, User } from '../grid-lite-data.service';
import { IgxGridLiteComponent, IgxGridLiteColumnComponent, IgxGridLiteCellTemplateDirective, IgxGridLiteDataPipelineConfiguration } from 'igniteui-angular/grids/lite';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxCircularProgressBarComponent } from 'igniteui-angular/progressbar';

defineComponents(IgcCheckboxComponent, IgcCircularProgressComponent);

@Component({
  selector: 'app-grid-lite-filtering-pipeline',
  templateUrl: './grid-lite-filtering-pipeline.component.html',
  styleUrls: ['./grid-lite-filtering-pipeline.component.scss'],
  imports: [
    CommonModule,
    IgxGridLiteComponent,
    IgxGridLiteColumnComponent,
    IgxGridLiteCellTemplateDirective,
    IgxCheckboxComponent,
    IgxCircularProgressBarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteFilteringPipelineComponent implements OnInit {
  private dataService = inject(GridLiteDataService);

  public data: User[] = [];
  public dataPipelineConfiguration: IgxGridLiteDataPipelineConfiguration;
  public inOperation = false;
  public queryString = '';

  ngOnInit() {
    this.data = this.dataService.generateUsers(500);

    this.dataPipelineConfiguration = {
      filter: async ({ data, grid }: any) => {
        this.inOperation = true;
        this.buildUri(grid.filterExpressions);
        await new Promise(resolve => setTimeout(resolve, 250));
        this.inOperation = false;
        return data;
      }
    };
  }

  private buildUri(state: any[]) {
    const grouped = this.groupBy(state, 'key');
    const out: string[] = [];

    for (const [key, exprs] of Object.entries(grouped)) {
      out.push(`${key}(${this.mapExpressions(exprs as any[])})`);
    }

    this.queryString = `GET: /data?filter=${out.join('&')}`;
  }

  private groupBy<T extends object>(arr: T[], key: keyof T): Record<string, T[]> {
    const out: Record<string, T[]> = {};
    for (const each of arr) {
      const slot = each[key] as string;
      if (!out[slot]) {
        out[slot] = [];
      }
      out[slot].push(each);
    }
    return out;
  }

  private mapExpressions(arr: any[]): string {
    const arrTemp = arr.map(({ searchTerm, criteria, condition }, idx) => {
    const normalizedSearchTerm = !searchTerm ? condition.name : searchTerm;

    return idx < 1
        ? `${condition.name}("${normalizedSearchTerm}")`
        : `${criteria?.toUpperCase()} ${condition.name}("${normalizedSearchTerm}")`;
    }).join(' ');
    return arrTemp;
  }
}
