import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ViewChild
} from "@angular/core";
import { IgxCategoryChartComponent } from "igniteui-angular-charts/ES5/igx-category-chart-component";
import { ToolTipType } from "igniteui-angular-charts/ES5/ToolTipType";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: "app-category-chart-tooltip-types",
    styleUrls: ["./category-chart-tooltip-types.component.scss"],
    templateUrl: "./category-chart-tooltip-types.component.html"
})
export class CategoryChartTooltipTypesComponent implements AfterViewInit {

    @ViewChild("chart", {static: true})
    public chart: IgxCategoryChartComponent;
    public toolTipType: string = "Category";
    public olympicData: any;

    constructor() {
        const usaMedals: any = [
            { Year: "1996", UnitedStates: 148 },
            { Year: "2000", UnitedStates: 142 },
            { Year: "2004", UnitedStates: 134 },
            { Year: "2008", UnitedStates: 131 },
            { Year: "2012", UnitedStates: 135 },
            { Year: "2016", UnitedStates: 146 }
        ];
        const chinaMedals: any = [
            { Year: "1996", China: 110 },
            { Year: "2000", China: 115 },
            { Year: "2004", China: 121 },
            { Year: "2008", China: 129 },
            { Year: "2012", China: 115 },
            { Year: "2016", China: 112 }
        ];
        const russiaMedals: any = [
            { Year: "1996", Russia: 95 },
            { Year: "2000", Russia: 91 },
            { Year: "2004", Russia: 86 },
            { Year: "2008", Russia: 65 },
            { Year: "2012", Russia: 77 },
            { Year: "2016", Russia: 88 }
        ];
        this.olympicData = [ usaMedals, chinaMedals, russiaMedals ];
    }

    public ngAfterViewInit(): void {
    }

    public initToolTipType(): void {
        this.chart.toolTipType = ToolTipType.Item;
    }
}
