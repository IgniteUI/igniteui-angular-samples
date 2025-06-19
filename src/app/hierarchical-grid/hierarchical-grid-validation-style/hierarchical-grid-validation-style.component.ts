import { Component, ViewChild } from '@angular/core';
import { IgxGridComponent, IgxHierarchicalGridComponent, IgxRowIslandComponent, RowType, IgxColumnComponent, IgxColumnRequiredValidatorDirective, IgxCellValidationErrorDirective } from 'igniteui-angular';
import { SINGERS } from '../../data/singersData';
import { Singer } from '../models';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'app-hierarchical-grid-validation-style',
    styleUrls: ['./hierarchical-grid-validation-style.component.scss'],
    templateUrl: 'hierarchical-grid-validation-style.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnRequiredValidatorDirective, IgxCellValidationErrorDirective, NgTemplateOutlet, IgxRowIslandComponent]
})
export class HGridValidationStyleComponent {
    @ViewChild('hierarchicalGrid', { read: IgxHierarchicalGridComponent, static: true }) public hierarchicalGrid: IgxHierarchicalGridComponent;
    @ViewChild('childGrid', { static: true }) private childGrid: IgxRowIslandComponent;
    public localData: Singer[];
    public rowStyles = {
        background: (row: RowType) => row.validation.status === 'INVALID' ? '#FF000033' : '#00000000'
    };
    public cellStyles = {
        'invalid-cell': (rowData, columnKey) => {
            let cell = this.hierarchicalGrid.getCellByKey(rowData, columnKey);
            // search in child grids
            if (!cell) {
                for (let grid of this.childGrid.gridAPI.getChildGrids()) {
                    cell = (grid as IgxGridComponent).getCellByKey(rowData, columnKey);
                    if (cell) break;
                }
            }
            return cell && cell.validation.status === 'INVALID';
        }
    }

    constructor() {
        this.localData = SINGERS;
    }

    public formatter = (a) => a;
}
