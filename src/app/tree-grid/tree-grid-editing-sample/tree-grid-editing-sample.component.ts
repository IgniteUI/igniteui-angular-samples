import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxDialogComponent } from 'igniteui-angular/dialog';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxNumberSummaryOperand, IgxSummaryOperand } from 'igniteui-angular/grids/core';
import { IgxSummaryResult } from 'igniteui-angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxButtonDirective, IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxPaginatorComponent } from 'igniteui-angular/paginator';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxDatePickerComponent } from 'igniteui-angular/date-picker';
import { IgxCheckboxComponent } from 'igniteui-angular/checkbox';
import { generateEmployeeFlatData } from '../data/employees-flat';
import { Employee } from './employee';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { FormsModule } from '@angular/forms';

class CustomNumberSummary {

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = new IgxSummaryOperand().operate(data);
        result.push({
            key: 'Min',
            label: 'Min',
            summaryResult: IgxNumberSummaryOperand.min(data)
        });
        result.push({
            key: 'max',
            label: 'Max',
            summaryResult: IgxNumberSummaryOperand.max(data)
        });
        return result;
    }
}

@Component({
    selector: 'app-tree-grid-editing-sample',
    styleUrls: ['./tree-grid-editing-sample.component.scss'],
    templateUrl: './tree-grid-editing-sample.component.html',
    imports: [IgxButtonDirective, IgxIconComponent, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxPaginatorComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxIconButtonDirective, IgxDialogComponent, IgxInputGroupComponent, IgxLabelDirective, FormsModule, IgxInputDirective, IgxDatePickerComponent, IgxCheckboxComponent]
})
export class TreeGridEditingSampleComponent implements OnInit {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    @ViewChild('dialogAdd', { read: IgxDialogComponent, static: true }) public dialog: IgxDialogComponent;
    public data: any[];
    public numberSummaries = CustomNumberSummary;
    public employee: Employee;
    private nextRow: number;

    constructor() {
    }

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
        this.employee = new Employee();
        this.nextRow = this.data.length + 1;
    }

    public openDialog(parentID) {
        this.employee.ParentID = parentID;
        this.dialog.open();
    }

    public addRow() {
        this.employee.ID = this.nextRow++;

        if (this.employee.ParentID === -1) {
            this.treeGrid.addRow(this.employee);
        } else {
            this.treeGrid.addRow(this.employee, this.employee.ParentID);
        }
        this.cancel();
    }

    public cancel() {
        this.dialog.close();
        this.employee = new Employee();
    }

    public deleteRow(id) {
        this.treeGrid.deleteRow(id);
    }
}
