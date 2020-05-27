import { Component, OnInit, ViewChild } from "@angular/core";
import {
    DataType,
    IgxColumnComponent,
    IgxDateFilteringOperand,
    IgxGridComponent,
    IgxNumberFilteringOperand,
    IgxStringFilteringOperand
} from "igniteui-angular";
import { DATA } from "../../data/nwindData";

@Component({
    selector: "grid-sample",
    styleUrls: ["./grid-filtering-template-sample.component.scss"],
    templateUrl: "grid-filtering-template-sample.component.html"
})

export class FilteringTemplateSampleComponent implements OnInit {
    @ViewChild("grid1", { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    public data: any[];

    private _filterValues = new Map<IgxColumnComponent, any>();

    constructor() {
    }
    public ngOnInit(): void {
        this.data = DATA;
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat("en-US").format(val);
    }

    public formatCurrency(val: string) {
        return parseInt(val, 10).toFixed(2);
    }

    public getFilterValue(column: IgxColumnComponent): any {
        return this._filterValues.has(column) ? this._filterValues.get(column) : null;
    }

    public onKeyDown(event: KeyboardEvent) {
        event.stopImmediatePropagation();
    }

    public onInput(input: any, column: IgxColumnComponent) {
        this._filterValues.set(column, input.value);

        if (input.value === "") {
            this.grid1.clearFilter(column.field);
            return;
        }

        let operand = null;
        switch (column.dataType) {
            case DataType.Number:
                operand = IgxNumberFilteringOperand.instance().condition("equals");
                break;
            default:
                operand = IgxStringFilteringOperand.instance().condition("contains");
        }
        this.grid1.filter(column.field, this.transformValue(input.value, column), operand, column.filteringIgnoreCase);
    }

    public clearInput(column: IgxColumnComponent) {
        this._filterValues.delete(column);
        this.grid1.clearFilter(column.field);
    }

    public onClick(inputGroup) {
        if (!inputGroup.isFocused) {
            inputGroup.input.focus();
        }
    }

    public onDateSelected(event, column: IgxColumnComponent) {
        this._filterValues.set(column, event);

        this.grid1.filter(column.field, event, IgxDateFilteringOperand.instance().condition("equals"),
            column.filteringIgnoreCase);
    }

    public openDatePicker(openDialog: () => void) {
        openDialog();
    }

    private transformValue(value: any, column: IgxColumnComponent): any {
        if (column.dataType === DataType.Number) {
            value = parseFloat(value);
        }

        return value;
    }
}
