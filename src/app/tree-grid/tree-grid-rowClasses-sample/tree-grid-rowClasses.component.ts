import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent, RowType, IgxColumnComponent } from 'igniteui-angular';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-row-classes-sample',
    styleUrls: ['tree-grid-rowClasses.component.scss'],
    templateUrl: 'tree-grid-rowClasses.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent]
})
export class TreeGridRowClassesComponent implements OnInit {

    @ViewChild('treeGrid', { static: true }) public treeGrid1: IgxTreeGridComponent;
    public data: IEmployee[];
    public columns: any[];

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();

        this.columns = [
            { field: 'Name', label: 'Full Name', resizable: true, filterable: true, editable: true, dataType: 'string' },
            { field: 'Age', label: 'Age', resizable: false, filterable: false, editable: true, dataType: 'number' },
            { field: 'Title', label: 'Title', resizable: true, filterable: true, editable: true, dataType: 'string' },
            { field: 'HireDate', label: 'Hire Date', resizable: true, filterable: true, editable: true, dataType: 'date' }
        ];
    }

    public activeRowCondition = (row: RowType) => this.treeGrid1?.navigation.activeNode?.row === row.index;
    // eslint-disable-next-line @typescript-eslint/member-ordering
    public rowClasses = {
        activeRow: this.activeRowCondition
    };


    public handleChange() {
        requestAnimationFrame(() => {
            this.treeGrid1.pipeTrigger++;
            this.treeGrid1.notifyChanges();
        });
    }
    public handleLeftClick(args) {
        args.event.preventDefault();
        this.treeGrid1.navigation.setActiveNode({ row: args.cell.row.index, column: args.cell.column.visibleIndex });
    }
}
