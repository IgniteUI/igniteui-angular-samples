import { Component, OnInit, ViewChild } from '@angular/core';
import { IGridEditEventArgs, IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxToastComponent } from 'igniteui-angular/toast';
import { VerticalAlignment } from 'igniteui-angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';

@Component({
    selector: 'app-tree-grid-editing-events',
    templateUrl: 'tree-grid-editing-events.component.html',
    styleUrls: ['tree-grid-editing-events.component.scss'],
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxToastComponent]
})
export class TreeGridEditingEventsComponent implements OnInit {
    @ViewChild(IgxToastComponent, { read: IgxToastComponent, static: true })
    public toast: IgxToastComponent;

    public data: IEmployee[] = [];
    public ngOnInit() {
        this.data = generateEmployeeFlatData();
        this.toast.positionSettings.verticalDirection = VerticalAlignment.Middle;
    }

    public handleEdit(event: IGridEditEventArgs) {
        const column = event.column;
        if (column.field === 'Age') {
            if (event.newValue < 18) {
                event.cancel = true;
                this.toast.open('Employees must be at least 18 years old!');
            }
        } else if (column.field === 'HireDate') {
            if (event.newValue > new Date().getTime()) {
                event.cancel = true;
                this.toast.open('The employee hire date must be in the past!');
            }
        }
    }
}
