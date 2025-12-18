import { Component } from '@angular/core';
import { ORDERS_DATA } from '../data/orders';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent } from 'igniteui-angular/grids/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-tree-grid-export-visualization',
    templateUrl: './tree-grid-export-visualization.component.html',
    styleUrls: ['./tree-grid-export-visualization.component.scss'],
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxButtonDirective, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, CurrencyPipe]
})
export class TreeGridExportVisualizationComponent {
    public localData = [];
    private data = ORDERS_DATA;

    constructor() {
        const offsetStep = Math.max(...this.data.map(item => item.ID)) + 1;

        for (let i = 0; i < 9000; i += 3) {
            const offset = (i / 3) * offsetStep;

            for (let c = 0; c < this.data.length; c++) {
                const item = this.data[c];
                this.localData.push({
                    ...item,
                    ID: item.ID + offset,
                    ParentID: item.ParentID === -1 ? -1 : item.ParentID + offset,
                    OrderDate: new Date(item.OrderDate)
                });
            }
        }
    }

    longRunning(toolbar: any) {
        toolbar.showProgress = true;
        setTimeout(() => toolbar.showProgress = false, 5000);
    }
}
