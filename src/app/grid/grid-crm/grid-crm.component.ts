import {
    Component,
    OnInit,
    ViewChild,
    ViewEncapsulation
} from "@angular/core";

import { IgxNumberSummaryOperand, IgxSummaryResult, IgxDateSummaryOperand } from "igniteui-angular/grid/grid-summary";
import { IgxGridComponent } from "igniteui-angular/grid/grid.component";
import { STRING_FILTERS } from "igniteui-angular/main";
import { data } from "./data";

class DealsSummary extends IgxNumberSummaryOperand {
    constructor() {
        super();
    }

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = super.operate(data).filter((obj) => {
            if (obj.key === "average" || obj.key === "sum") {
                let summaryResult = obj.summaryResult;
                //apply formatting to float numbers
                if (Number(summaryResult) === summaryResult && summaryResult % 1 !== 0) {
                    obj.summaryResult = summaryResult.toFixed(2);
                }
                return obj;
            }
        });
        return result;
    }
}

class EarliestSummary extends IgxDateSummaryOperand {
    constructor() {
        super();
    }

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = super.operate(data).filter((obj) => {
            if (obj.key === "earliest") {
                return obj;
            }
        });
        return result;
    }
}

class SoonSummary extends IgxDateSummaryOperand {
    constructor() {
        super();
    }

    public operate(data?: any[]): IgxSummaryResult[] {
        const result = super.operate(data).filter((obj) => {
            if (obj.key === "latest") {
                obj.label = "Soon";
                return obj;
            }
        });
        return result;
    }
}

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-grid",
    styleUrls: ["./grid-crm.component.scss"],
    templateUrl: "./grid-crm.component.html"
})
export class GridCRMComponent implements OnInit {

    @ViewChild("grid1", { read: IgxGridComponent })
    public grid1: IgxGridComponent;

    public localData: any[];
    public dealsSummary = DealsSummary;
    public earliestSummary = EarliestSummary;
    public soonSummary = SoonSummary;

    constructor() { }

    public ngOnInit() {
        this.localData = data;
    }
}
