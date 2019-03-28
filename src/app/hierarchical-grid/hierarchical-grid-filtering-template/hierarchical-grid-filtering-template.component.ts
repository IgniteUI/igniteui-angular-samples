import { Component, OnInit, ViewChild } from "@angular/core";
import {
    DataType,
    IgxColumnComponent,
    IgxDateFilteringOperand,
    IgxHierarchicalGridComponent,
    IgxNumberFilteringOperand,
    IgxStringFilteringOperand
} from "igniteui-angular";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-filtering-template",
    styleUrls: ["./hierarchical-grid-filtering-template.component.scss"],
    templateUrl: "hierarchical-grid-filtering-template.component.html"
})

export class HGridFilteringTemplateSampleComponent implements OnInit {
    public localdata;

    @ViewChild("hierarchicalGrid")
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {

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
        this.hierarchicalGrid.filter(column.field, this.transformValue(input.value, column), operand, column.filteringIgnoreCase);
    }

    public clearInput(input: any, column: any) {
        input.value = null;
        this.hierarchicalGrid.clearFilter(column.field);
    }

    public onDateSelected(event, column: IgxColumnComponent) {
        this.hierarchicalGrid.filter(column.field, event, IgxDateFilteringOperand.instance().condition("equals"),
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
