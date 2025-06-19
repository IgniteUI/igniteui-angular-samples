import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { IgxExcelExporterOptions, IgxExcelExporterService, IgxHierarchicalGridComponent, IgxNumberSummaryOperand, IgxSummaryResult, IgxButtonDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

class MySummary  {
    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push(
        {
            key: 'min',
            label: 'Min',
            summaryResult: IgxNumberSummaryOperand.min(data)
        },
        {
            key: 'max',
            label: 'Max',
            summaryResult: IgxNumberSummaryOperand.max(data)
        },
        {
          key: 'avg',
          label: 'Avg',
          summaryResult: IgxNumberSummaryOperand.average(data)
        });
        return result;
    }
}

class MyChildSummary {
    public operate(data?: any[]): IgxSummaryResult[] {
        const result = [];
        result.push(
        {
            key: 'count',
            label: 'Count',
            summaryResult: IgxNumberSummaryOperand.count(data)
        });
        return result;
    }
}

@Component({
    selector: 'app-hierarchical-grid-summary-export',
    styleUrls: ['./hgrid-summary-export.component.scss'],
    templateUrl: 'hgrid-summary-export.component.html',
    imports: [IgxButtonDirective, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent]
})

export class HGridSummaryExportComponent {
    private excelExportService = inject(IgxExcelExporterService);

    @ViewChild('hGrid', { static: true })
    private hGrid: IgxHierarchicalGridComponent;

    public data;
    public mySummary = MySummary;
    public myChildSummary = MyChildSummary;

    constructor() {
        this.data = SINGERS;
    }

    public exportButtonHandler() {
        this.excelExportService.export(this.hGrid, new IgxExcelExporterOptions('ExportedFile'));
    }
}
