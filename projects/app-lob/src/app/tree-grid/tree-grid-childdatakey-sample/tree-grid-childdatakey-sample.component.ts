import { Component, OnInit, inject } from '@angular/core';
import { GridSelectionMode, IgxCSVTextDirective, IgxCellTemplateDirective, IgxColumnComponent, IgxExcelTextDirective, IgxGridToolbarActionsComponent, IgxGridToolbarComponent, IgxGridToolbarExporterComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarTitleComponent, IColumnExportingEventArgs, IgxCsvExporterService, IgxExcelExporterService } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { EMPLOYEE_DATA } from './data';
import { IgxPreventDocumentScrollDirective } from '../../../../../../src/app/directives/prevent-scroll.directive';
import { IgxSparklineCoreModule } from 'igniteui-angular-charts';

@Component({
    selector: 'app-tree-grid-childdatakey-sample',
    styleUrls: ['./tree-grid-childdatakey-sample.component.scss'],
    templateUrl: './tree-grid-childdatakey-sample.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxGridToolbarActionsComponent, IgxGridToolbarHidingComponent, IgxGridToolbarPinningComponent, IgxGridToolbarExporterComponent, IgxExcelTextDirective, IgxCSVTextDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxSparklineCoreModule]
})
export class TreeGridChilddatakeySampleComponent implements OnInit {
    private excelExporter = inject(IgxExcelExporterService);
    private csvExporter = inject(IgxCsvExporterService);

    public localData: any[];
    public selectionMode: GridSelectionMode = 'multiple';
    constructor() {
        const skipColumnExport = (eventArgs: IColumnExportingEventArgs) => {
            eventArgs.cancel = eventArgs.header === 'Performance';
        };

        this.excelExporter.columnExporting.subscribe(skipColumnExport);
        this.csvExporter.columnExporting.subscribe(skipColumnExport);
    }

    public ngOnInit() {
        const employees = EMPLOYEE_DATA;
        for (const employee of employees) {
            this.getPerformance(employee);
        }
        this.localData = employees;
    }

    public getPerformance(employee: any): any {
        employee['Performance'] = this.getPerformanceData(12);
        const hasEmployees = employee.Employees === undefined;
        if (hasEmployees) {
            return employee;
        } else {
            for (const employer of employee.Employees) {
                this.getPerformance(employer);
            }
        }
    }

    public getPerformanceData(weeks?: number): any[] {
        if (weeks === undefined) {
            weeks = 20;
        }
        const performance: any[] = [];
        for (let w = 0; w < weeks; w++) {
            const value = this.getRandomNumber(0, 100);
            // eslint-disable-next-line @typescript-eslint/naming-convention
            performance.push({Points: value, Week: w});
        }
        return performance;
    }

    public  getRandomNumber(min: number, max: number): number {
        return Math.round(min + Math.random() * (max - min));
    }
}
