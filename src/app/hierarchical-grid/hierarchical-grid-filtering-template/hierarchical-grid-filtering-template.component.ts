import { Component, OnInit, ViewChild } from '@angular/core';
import { ColumnType, GridColumnDataType, IgxDateFilteringOperand, IgxNumberFilteringOperand, IgxPickerClearComponent, IgxPickerToggleComponent, IgxStringFilteringOperand, OverlaySettings } from 'igniteui-angular/core';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxCellTemplateDirective, IgxColumnComponent, IgxFilterCellTemplateDirective } from 'igniteui-angular/grids/core';
import { IgxInputDirective, IgxInputGroupComponent, IgxPrefixDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxDatePickerComponent } from 'igniteui-angular/date-picker';
import { SINGERS } from '../../data/singersData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-hierarchical-grid-filtering-template',
    styleUrls: ['./hierarchical-grid-filtering-template.component.scss'],
    templateUrl: 'hierarchical-grid-filtering-template.component.html',
    imports: [IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxRowIslandComponent, IgxFilterCellTemplateDirective, IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, IgxInputDirective, IgxSuffixDirective, IgxDatePickerComponent, IgxPickerToggleComponent, IgxPickerClearComponent]
})

export class HGridFilteringTemplateSampleComponent implements OnInit {
    @ViewChild('hierarchicalGrid', { static: true })
    public hierarchicalGrid: IgxHierarchicalGridComponent;

    public localdata;
    public overlaySettings: OverlaySettings;
    public displayDateFormat = 'MMM d, y';

    private _filterValues = new Map<ColumnType, any>();

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {
        this.overlaySettings = {
            outlet: this.hierarchicalGrid
        };
    }

    public formatter = (a) => a;

    public getFilterValue(column: ColumnType): any {
        return this._filterValues.has(column) ? this._filterValues.get(column) : null;
    }

    public onKeyDown(event: KeyboardEvent) {
        event.stopImmediatePropagation();
    }

    public onInput(input: any, column: any) {
        this._filterValues.set(column, input.value);

        if (input.value === '') {
            column.grid.clearFilter(column.field);
            return;
        }

        let operand = null;
        switch (column.dataType) {
            case GridColumnDataType.Number:
                operand = IgxNumberFilteringOperand.instance().condition('equals');
                break;
            default:
                operand = IgxStringFilteringOperand.instance().condition('contains');
        }
        column.grid.filter(column.field,
            this.transformValue(input.value, column), operand, column.filteringIgnoreCase);
    }

    public clearInput(column: any) {
        this._filterValues.delete(column);
        column.grid.clearFilter(column.field);
    }

    public onClick(inputGroup) {
        if (!inputGroup.isFocused) {
            inputGroup.input.focus();
        }
    }

    public onDateSelected(event, column: any) {
        if (!event) {
            this.clearInput(column);
            return;
        }

        this._filterValues.set(column, event);
        column.grid.filter(column.field, event, IgxDateFilteringOperand.instance().condition('equals'),
            column.filteringIgnoreCase);
    }

    private transformValue(value: any, column: ColumnType): any {
        if (column.dataType === GridColumnDataType.Number) {
            value = parseFloat(value);
        }

        return value;
    }
}
