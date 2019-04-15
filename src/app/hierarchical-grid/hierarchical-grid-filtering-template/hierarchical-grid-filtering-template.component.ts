import { Component, OnInit, ViewChild } from "@angular/core";
import {
    DataType,
    IgxColumnComponent,
    IgxDateFilteringOperand,
    IgxHierarchicalGridComponent,
    IgxNumberFilteringOperand,
    IgxStringFilteringOperand,
    OverlaySettings
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
    private overlaySettings: OverlaySettings = {
        outlet: this.hierarchicalGrid
    };

    constructor() {
        this.localdata = SINGERS;
    }
    public ngOnInit(): void {

    }

    public onInput(input: any, column: IgxColumnComponent, grid:IgxHierarchicalGridComponent) {
        let operand = null;
        switch (column.dataType) {
            case DataType.Number:
                operand = IgxNumberFilteringOperand.instance().condition("equals");
                break;
            default:
                operand = IgxStringFilteringOperand.instance().condition("contains");
        }
        grid.filter(column.field,
            this.transformValue(input.value, column), operand, column.filteringIgnoreCase);
    }

    public clearInput(input: any, column: any, grid: IgxHierarchicalGridComponent) {
        input.value = null;
        grid.clearFilter(column.field);
    }

    public onDateSelected(event, column: IgxColumnComponent, grid: IgxHierarchicalGridComponent) {
        grid.filter(column.field, event, IgxDateFilteringOperand.instance().condition("equals"),
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
