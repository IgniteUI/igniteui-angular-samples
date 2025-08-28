import { Component, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import {
    ColumnPinningPosition,
    IgxColumnComponent,
    IgxHierarchicalGridComponent,
    IPinningConfig,
    IgxGridToolbarComponent,
    IgxGridToolbarActionsComponent,
    IgxGridToolbarPinningComponent,
    IgxCellTemplateDirective,
    IgxTooltipTargetDirective,
    IgxTooltipDirective,
    IgxAvatarComponent,
    IgxCellHeaderTemplateDirective,
    IgxIconComponent,
    IgxRowIslandComponent,
    IgxDropDownComponent,
    IgxDropDownItemComponent,
    IgxButtonDirective,
    IgxToggleActionDirective,
    IgxDropDownItemNavigationDirective,
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
        IgxGridToolbarPinningComponent,
        IgxColumnComponent,
        IgxCellTemplateDirective,
        IgxTooltipTargetDirective,
        IgxTooltipDirective,
        IgxAvatarComponent,
        IgxCellHeaderTemplateDirective,
        IgxIconComponent,
        IgxRowIslandComponent,
        DatePipe,
        IgxDropDownComponent,
        IgxDropDownItemComponent,
        IgxButtonDirective,
        IgxToggleActionDirective,
        IgxDropDownItemNavigationDirective,
    ],
})
export class HierarchicalGridBothSidePinningSampleComponent implements OnInit {
    @ViewChild("grid1", { static: true })
    public grid1: IgxHierarchicalGridComponent;

    public data: any[];
    public employeesData: any[];
    public columns: any[];
    public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };
    private _columnsPinned = true;

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

    // Toggle individual column pin state (unchanged)
    public toggleColumn(col: IgxColumnComponent): void {
        col.pinned ? col.unpin() : col.pin();
    }

    // NEW: Set global pinning position via toolbar dropdown
    public setPinningPosition(side: "start" | "end"): void {
        const pos =
            side === "start"
                ? ColumnPinningPosition.Start
                : ColumnPinningPosition.End;

        // Reassign a new object so change detection updates both grid and row island
        this.pinningConfig = { columns: pos };
    }

    public get columnsPinned(): boolean {
        return this._columnsPinned;
    }

    public set columnsPinned(pinned) {
        this._columnsPinned = !this._columnsPinned;
    }

    private generateReadableDate(timestamp: string): Date {
        let dateObj = new Date(timestamp);
        if (isNaN(dateObj.getTime())) {
            dateObj = new Date(timestamp.split(" ")[0]);
        }
        return dateObj;
    }

    public pinLeft(){
            this.grid1.selectedColumns().forEach((col: IgxColumnComponent) => {
                col.pinningPosition = ColumnPinningPosition.Start;
                col.pinned = true;
            });
        }
        public pinRight(){
            this.grid1.selectedColumns().forEach((col: IgxColumnComponent) => {
                col.pinningPosition = ColumnPinningPosition.End;
                col.pinned = true;
            });
        }

        public unpinColumn(){
            this.grid1.selectedColumns().forEach((col: IgxColumnComponent) => {
                col.pinned = false;
            });
        }
}
