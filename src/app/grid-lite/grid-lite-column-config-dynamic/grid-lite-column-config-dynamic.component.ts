import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgxButtonDirective, IgxToggleActionDirective } from 'igniteui-angular/directives';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { IgxDropDownComponent, IgxDropDownItemComponent, IgxDropDownItemNavigationDirective } from 'igniteui-angular/drop-down';
import { defineComponents, IgcRatingComponent } from 'igniteui-webcomponents';
import { GridLiteDataService, ProductInfo } from '../grid-lite-data.service';
import { IgxGridLiteComponent, IgxGridLiteColumnComponent, IgxGridLiteCellTemplateDirective, IgxGridLiteColumnConfiguration } from 'igniteui-angular/grids/lite';
import { IgxSwitchComponent } from 'igniteui-angular/switch';

defineComponents(IgcRatingComponent);

@Component({
    selector: 'app-grid-lite-column-config-dynamic',
    templateUrl: './grid-lite-column-config-dynamic.component.html',
    styleUrls: ['./grid-lite-column-config-dynamic.component.scss'],
    imports: [
        CommonModule,
        IgxGridLiteComponent,
        IgxGridLiteColumnComponent,
        IgxGridLiteCellTemplateDirective,
        IgxButtonDirective,
        IgxToggleActionDirective,
        IgxDropDownItemNavigationDirective,
        IgxDropDownComponent,
        IgxDropDownItemComponent,
        IgxCheckboxComponent,
        IgxSwitchComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    standalone: true
})
export class GridLiteColumnConfigDynamicComponent implements OnInit {
    private dataService = inject(GridLiteDataService);

    public data: ProductInfo[] = [];
    public hasFormatters = true;

    public columns: IgxGridLiteColumnConfiguration<ProductInfo>[] = [
        { field: 'id', header: 'ID', hidden: true, resizable: true, sortable: false, filterable: false, dataType: 'string'},
        { field: 'name', header: 'Product Name', hidden: false, resizable: true, sortable: false, filterable: false, dataType: 'string'},
        { field: 'price', header: 'Price', hidden: false, resizable: true, sortable: false, filterable: false, dataType: 'number' },
        { field: 'sold', header: 'Units sold', hidden: false, resizable: true, sortable: false, filterable: false, dataType: 'number' },
        { field: 'total', header: 'Total sold', hidden: false, resizable: true, sortable: false, filterable: false, dataType: 'number' },
        { field: 'rating', header: 'Customer rating', hidden: false, resizable: true, sortable: false, filterable: false, dataType: 'number' }
    ];

    public formatter = new Intl.NumberFormat('en-150', { style: 'currency', currency: 'EUR' });

    ngOnInit() {
        this.data = this.dataService.generateProducts(50);
    }

    protected formatCurrency = (value: number) =>
        this.formatter.format(value);

    toggleColumnProperty(column: any, property: string, value: boolean) {
        column[property] = value;
        // Trigger Angular change detection
        this.columns = [...this.columns];
    }

    toggleFormatters(event: any) {
        this.hasFormatters = event.detail.checked;
    }
}
