import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild, ElementRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';
import { IgxGridLiteComponent, IgxGridLiteColumnComponent, IgxGridLiteCellTemplateDirective, IgxGridLiteDataPipelineConfiguration } from 'igniteui-angular/grids/lite';
import { IgxCircularProgressBarComponent } from 'igniteui-angular/progressbar';

defineComponents(IgcRatingComponent);

@Component({
    selector: 'app-grid-lite-sorting-pipeline',
    templateUrl: './grid-lite-sorting-pipeline.component.html',
    styleUrls: ['./grid-lite-sorting-pipeline.component.scss'],
    imports: [
        CommonModule,
        IgxGridLiteComponent,
        IgxGridLiteColumnComponent,
        IgxGridLiteCellTemplateDirective,
        IgxCircularProgressBarComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteSortingPipelineComponent implements OnInit {
    private dataService = inject(GridLiteDataService);

    public data: ProductInfo[] = [];
    public dataPipelineConfiguration: IgxGridLiteDataPipelineConfiguration;
    public inOperation = false;
    public queryString = '';

    ngOnInit() {
        this.data = this.dataService.generateProducts(100);

        // Setup the data pipeline for sorting
        this.dataPipelineConfiguration = {
            sort: async ({ data, grid }: any) => {
                // Show the spinner
                this.inOperation = true;

                // Build the query string for demonstration
                this.queryString = grid.sortingExpressions.length
                    ? this.buildUri(grid.sortingExpressions)
                    : '';

                // Simulate async operation
                await new Promise(resolve => setTimeout(resolve, 250));

                // Hide the spinner
                this.inOperation = false;

                // Return data after a tiny defer so templates like <igc-rating> initialize properly
                return new Promise(resolve => setTimeout(() => resolve(data), 0));
            }
        };
    }

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
