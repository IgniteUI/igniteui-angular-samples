import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';
import { IgxGridLiteComponent, IgxGridLiteColumnComponent, IgxGridLiteCellTemplateDirective, IgxGridLiteHeaderTemplateDirective } from 'igniteui-angular/grids/lite';

defineComponents(IgcRatingComponent);

@Component({
    selector: 'app-grid-lite-column-config-headers',
    templateUrl: './grid-lite-column-config-headers.component.html',
    styleUrls: ['./grid-lite-column-config-headers.component.scss'],
    imports: [
        CommonModule,
        IgxGridLiteComponent,
        IgxGridLiteColumnComponent,
        IgxGridLiteCellTemplateDirective,
        IgxGridLiteHeaderTemplateDirective
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class GridLiteColumnConfigHeadersComponent implements OnInit {
    private dataService = inject(GridLiteDataService);

    public data: ProductInfo[] = [];

    ngOnInit() {
        this.data = this.dataService.generateProducts(50);
    }
}
