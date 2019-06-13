import { Component, OnInit, ViewChild } from "@angular/core";
import {
    DataType,
    IgxColumnComponent,
    IgxDateFilteringOperand,
    IgxNumberFilteringOperand,
    IgxStringFilteringOperand,
    IgxTreeGridComponent
} from "igniteui-angular";
import { FOODS_DATA } from "../data/foods";

@Component({
    selector: "tree-grid-filtering-template-sample",
    styleUrls: ["./tree-grid-filtering-template-sample.component.scss"],
    templateUrl: "tree-grid-filtering-template-sample.component.html"
})

export class TreeGridFilteringTemplateSampleComponent implements OnInit {

    @ViewChild("treegrid1", {static: true})
    public treegrid1: IgxTreeGridComponent;
    public data: any[];

    constructor() {
    }
    public ngOnInit(): void {
        this.data = FOODS_DATA();
    }

    public formatDate(val: Date) {
        return new Intl.DateTimeFormat("en-US").format(val);
    }

    public formatCurrency(val: string) {
        return parseInt(val, 10).toFixed(2);
    }

    public onInput(input: any, column: IgxColumnComponent) {
        let operand = null;
        switch (column.dataType) {
            case DataType.Number:
                operand = IgxNumberFilteringOperand.instance().condition("equals");
                break;
            default:
                operand = IgxStringFilteringOperand.instance().condition("contains");
        }
        this.treegrid1.filter(column.field,
            this.transformValue(input.value, column), operand, column.filteringIgnoreCase);
    }

    public clearInput(input: any, column: any) {
        input.value = null;
        this.treegrid1.clearFilter(column.field);
    }

    public onDateSelected(event, column: IgxColumnComponent) {
        this.treegrid1.filter(column.field, event, IgxDateFilteringOperand.instance().condition("equals"),
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
