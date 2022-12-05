import { Component, OnInit, ViewChild } from '@angular/core';
import { IBaseChipEventArgs, IgxTreeGridComponent, IRowSelectionEventArgs } from 'igniteui-angular';
import { EMPLOYEE_DATA } from '../../../data/nested-employee-data';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-dropdown-tree-grid-hierarchical-selection',
    styleUrls: ['./dropdown-tree-grid-hierarchical-selection.scss'],
    templateUrl: './dropdown-tree-grid-hierarchical-selection.html'
})
export class DropdownTreeGridHierarchicalSelectionComponent implements OnInit {
    @ViewChild('treeGrid', { static: true })
    public igxTreeGrid: IgxTreeGridComponent;

    public employees!: any[];
    public selectedRows!: any[];

    public ngOnInit(): void {
        this.employees = EMPLOYEE_DATA;
    }

    public onRowSelectionChanging(args: IRowSelectionEventArgs, grid: IgxTreeGridComponent) {
        this.selectedRows = [];
        args.newSelection.forEach((val) => this.selectedRows.push(grid.getRowData(val)));
      }

    public chipRemoved(event: IBaseChipEventArgs) {
        this.selectedRows = this.selectedRows.filter((row) => {
            if (row.ID === event.owner.id){
                this.igxTreeGrid.deselectRows([row.ID]);
            }
            return row.ID !== event.owner.id;
        });
    }
}