import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcCheckboxComponent, IgcCircularProgressComponent } from 'igniteui-webcomponents';
import { IgcGridLite } from 'igniteui-grid-lite';
import { GridLiteDataService, User } from '../grid-lite-data.service';

IgcGridLite.register();
defineComponents(IgcCheckboxComponent, IgcCircularProgressComponent);

@Component({
  selector: 'app-grid-lite-filtering-pipeline',
  templateUrl: './grid-lite-filtering-pipeline.component.html',
  styleUrls: ['./grid-lite-filtering-pipeline.component.scss'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteFilteringPipelineComponent implements OnInit {
  private dataService = inject(GridLiteDataService);
  
  public data: User[] = [];
  public columns: any[] = [];
  public dataPipelineConfiguration: any;
  public inOperation = false;
  public queryString = '';

  ngOnInit() {
    this.data = this.dataService.generateUsers(50);
    
    this.columns = [
      { 
        key: 'firstName', 
        headerText: 'First name', 
        filter: true 
      },
      { 
        key: 'lastName', 
        headerText: 'Last name', 
        filter: true 
      },
      { 
        key: 'age', 
        headerText: 'Age', 
        filter: true, 
        type: 'number' 
      },
      {
        key: 'active',
        headerText: 'Active',
        type: 'boolean',
        filter: true,
        cellTemplate: (params: any) => {
          const checkbox = document.createElement('igc-checkbox');
          if (params.value) {
            checkbox.setAttribute('checked', '');
          }
          return checkbox;
        }
      }
    ];

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
    return arr.map(({ searchTerm, criteria, condition }, idx) => {
      const c = condition;
      return idx < 1
        ? `${c.name}("${searchTerm}")`
        : `${criteria?.toUpperCase()} ${c.name}("${searchTerm}")`;
    }).join(' ');
  }
}
