import { Component, OnInit, ViewChild } from '@angular/core';
import { GridColumnDataType, IgxColumnComponent, IgxDateFilteringOperand, IgxGridComponent, IgxNumberFilteringOperand, IgxStringFilteringOperand, ColumnType, IgxCellTemplateDirective, IgxFilterCellTemplateDirective, IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, IgxInputDirective, IgxSuffixDirective, IgxDatePickerComponent, IgxPickerToggleComponent, IgxPickerClearComponent } from 'igniteui-angular';
import { DATA } from '../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-grid-sample',
    styleUrls: ['./grid-filtering-template-sample.component.scss'],
    templateUrl: 'grid-filtering-template-sample.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxFilterCellTemplateDirective, IgxInputGroupComponent, IgxPrefixDirective, IgxIconComponent, IgxInputDirective, IgxSuffixDirective, IgxDatePickerComponent, IgxPickerToggleComponent, IgxPickerClearComponent, CurrencyPipe]
})

export class FilteringTemplateSampleComponent implements OnInit {
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    public data: any[];
    public displayDateFormat = 'M/d/y';

    private _filterValues = new Map<ColumnType, any>();

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat('en-US').format(val);
    }

    public formatCurrency(val: string) {
        return parseInt(val, 10).toFixed(2);
    }

    public getFilterValue(column: ColumnType): any {
        return this._filterValues.has(column) ? this._filterValues.get(column) : null;
    }

    public onKeyDown(event: KeyboardEvent) {
        event.stopImmediatePropagation();
    }

    public onInput(input: any, column: ColumnType) {
        this._filterValues.set(column, input.value);

        if (input.value === '') {
            this.grid1.clearFilter(column.field);
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
        this.grid1.filter(column.field, this.transformValue(input.value, column), operand, column.filteringIgnoreCase);
    }

    public clearInput(column: ColumnType) {
        this._filterValues.delete(column);
        this.grid1.clearFilter(column.field);
    }

    public onClick(inputGroup) {
        if (!inputGroup.isFocused) {
            inputGroup.input.focus();
        }
    }

    public onDateSelected(event, column: ColumnType) {
        if(!event) {
            this.clearInput(column);
            return;
        }

        this._filterValues.set(column, event);
        this.grid1.filter(column.field, event, IgxDateFilteringOperand.instance().condition('equals'),
            column.filteringIgnoreCase);
    }

    private transformValue(value: any, column: ColumnType): any {
        if (column.dataType === GridColumnDataType.Number) {
            value = parseFloat(value);
        }

        return value;
    }
}
