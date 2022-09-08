import { Component, ViewChild } from '@angular/core';
import { lessThan } from '@igniteui/material-icons-extended';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent, RowType } from 'igniteui-angular';
import { SINGERS } from '../../data/singersData';
import { Singer } from '../models';

@Component({
    selector: 'app-hierarchical-grid-validation-style',
    styleUrls: ['./hierarchical-grid-validation-style.component.scss'],
    templateUrl: 'hierarchical-grid-validation-style.component.html'
})
export class HGridValidationStyleComponent {
    @ViewChild('hierarchicalGrid', { read: IgxHierarchicalGridComponent, static: true }) public hierarchicalGrid: IgxHierarchicalGridComponent;
    @ViewChild('childGrid', { static: true }) private childGrid: IgxRowIslandComponent;
    public localData: Singer[];
    public rowStyles = {
        background: (row: RowType) => row.cells.find(c => c.errors !== null && c.errors !== undefined) ? '#FF000033' : '#00000000'
    };
    public cellStyles = {
        'invalid-cell': (rowData, columnKey, cellValue, rowIndex) => {
            let cell = this.hierarchicalGrid.getCellByKey(rowData, columnKey);
            // search in child grids
            if (!cell) {
                for (let grid of this.childGrid.gridAPI.getChildGrids()) {
                    cell = grid.getCellByKey(rowData, columnKey);
                    if (cell) break;
                }
            }
            return cell && cell.errors !== null && cell.errors !== undefined;
        }
    }

    constructor() {
        this.localData = SINGERS;
    }

    public formatter = (a) => a;
}
