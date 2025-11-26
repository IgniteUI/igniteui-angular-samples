import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import {
    ColumnPinningPosition,
    IgxColumnComponent,
    IgxHierarchicalGridComponent,
    IPinningConfig,
    IgxGridToolbarComponent,
    IgxGridToolbarActionsComponent,
    IgxCellTemplateDirective,
    IgxTooltipTargetDirective,
    IgxTooltipDirective,
    IgxAvatarComponent,
    IgxCellHeaderTemplateDirective,
    IgxIconComponent,
    IgxRowIslandComponent,
    IgxButtonDirective,
    IgxGridToolbarTitleComponent
} from "igniteui-angular";
import { employeesData } from "../../data/employeesData";
import { athletesData } from "../../data/athletesData";
import { DatePipe } from "@angular/common";

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [],
    selector: "hierarchical-grid-sample-both-side-pinning",
    styleUrls: ["hierarchical-grid-both-sides-pinning.component.scss"],
    templateUrl: "hierarchical-grid-both-sides-pinning.component.html",
    imports: [
        IgxHierarchicalGridComponent,
        IgxGridToolbarComponent,
        IgxGridToolbarActionsComponent,
        IgxColumnComponent,
        IgxCellTemplateDirective,
        IgxTooltipTargetDirective,
        IgxTooltipDirective,
        IgxAvatarComponent,
        IgxCellHeaderTemplateDirective,
        IgxIconComponent,
        IgxRowIslandComponent,
        DatePipe,
        IgxButtonDirective,
        IgxGridToolbarTitleComponent
    ]
})
export class HierarchicalGridBothSidePinningSampleComponent implements OnInit {
    @ViewChild("grid1", { static: true })
    public grid1: IgxHierarchicalGridComponent;

    public data: any[];
    public employeesData: any[];
    public columns: any[];
    public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };
    public start = ColumnPinningPosition.Start;
    public end = ColumnPinningPosition.End;

    public ngOnInit(): void {
        this.data = athletesData;
        this.employeesData = employeesData;
        let i = 0;
        this.data.forEach((x) => {
            x.FirstPlaces = Math.floor(Math.random() * Math.floor(3));
            x.SecondPlaces = Math.floor(Math.random() * Math.floor(4));
            x.ThirdPlaces = Math.floor(Math.random() * Math.floor(5));
            x.RegistrationDate = this.generateReadableDate(x.Registered);
            x.Birthday = this.generateReadableDate(
                this.employeesData[i].birthday
            );
            x.Sponsor = this.employeesData[i].company;
            x.AgentData = [this.employeesData[i]];
            i++;
        });
    }

    private generateReadableDate(timestamp: string): Date {
        let dateObj = new Date(timestamp);
        if (isNaN(dateObj.getTime())) {
            dateObj = new Date(timestamp.split(" ")[0]);
        }
        return dateObj;
    }

    public pinLeft() {
        this.grid1.selectedColumns().forEach((col: IgxColumnComponent) => {
            col.pinningPosition = ColumnPinningPosition.Start;
            col.pinned = true;
        });
    }

    public pinRight() {
        this.grid1.selectedColumns().forEach((col: IgxColumnComponent) => {
            col.pinningPosition = ColumnPinningPosition.End;
            col.pinned = true;
        });
    }

    public unpinColumn() {
        this.grid1.selectedColumns().forEach((col: IgxColumnComponent) => {
            col.pinned = false;
        });
    }
}
