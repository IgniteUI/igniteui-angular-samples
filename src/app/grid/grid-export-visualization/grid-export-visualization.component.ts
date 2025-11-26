import { Component } from '@angular/core';
import { DATA } from '../../data/nwindData';
import { IgxGridComponent, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxButtonDirective, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-grid-export-visualization',
    templateUrl: './grid-export-visualization.component.html',
    styleUrls: ['./grid-export-visualization.component.scss'],
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxGridToolbarComponent, IgxGridToolbarActionsComponent, IgxButtonDirective, IgxGridToolbarExporterComponent, IgxColumnComponent, IgxCellTemplateDirective, CurrencyPipe]
})
export class GridExportVisualizationComponent {
    public localData = [];
    constructor() {
        for (let i = 0; i < 1000; i++) {
            for (let c = 0; c < DATA.length; c++) {
                this.localData.push(DATA[c]);
            }
        }
    }

    public formatDate(val) {
        if (val !== 'Select All') {
            return new Intl.DateTimeFormat('en-US').format(val);
        } else {
            return val;
        }
    }

    longRunning(toolbar: any) {
        toolbar.showProgress = true;
        setTimeout(() => toolbar.showProgress = false, 5000);
    }
}
