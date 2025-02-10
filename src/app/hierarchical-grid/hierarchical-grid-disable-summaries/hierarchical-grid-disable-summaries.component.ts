import {
    Component,
    ViewChild,
    OnInit,
    AfterViewInit,
    ElementRef,
    QueryList,
    ViewChildren
} from "@angular/core";
import {
    IgxHierarchicalGridComponent,
    IgxRowIslandComponent,
    IgxCellTemplateDirective,
    IgxNumberSummaryOperand,
    IgxSummaryResult,
    IgxColumnComponent,
    IgxButtonDirective,
    IgxCheckboxComponent,
    IgxToggleDirective,
    HorizontalAlignment,
    VerticalAlignment,
    OverlaySettings,
    ConnectedPositioningStrategy
} from "igniteui-angular";
import { SINGERS } from "../../data/singersData";
import { IgxPreventDocumentScrollDirective } from "../../directives/prevent-scroll.directive";
import { NgFor } from "@angular/common";

class GrammySummary {
    public operate(
        data?: any[],
        allData: any[] = [],
        fieldName: string = ""
    ): IgxSummaryResult[] {
        const result = [];

        result.push({
            key: "count",
            label: "Count",
            summaryResult: allData.filter((rec) => rec["Artist"] > 0)
                .length
        });

        result.push({
            key: "nominatedSingers",
            label: "Nominated Singers",
            summaryResult: allData.filter((rec) => rec["GrammyNominations"] > 0)
                .length
        });

        result.push({
            key: "singersWithAwards",
            label: "Singers with Awards",
            summaryResult: allData.filter((rec) => rec["GrammyAwards"] > 0)
                .length
        });

        result.push({
            key: "nominations",
            label: "Total Nominations",
            summaryResult: IgxNumberSummaryOperand.sum(
                allData.map((r) => r["GrammyNominations"])
            )
        });

        result.push({
            key: "awards",
            label: "Total Awards",
            summaryResult: IgxNumberSummaryOperand.sum(
                allData.map((r) => r["GrammyAwards"])
            )
        });

        return result;
    }
}

@Component({
    selector: "app-hierarchical-grid-summary-sample",
    styleUrls: ["./hierarchical-grid-disable-summaries.component.scss"],
    templateUrl: "hierarchical-grid-disable-summaries.component.html",
    imports: [
        NgFor,
        IgxHierarchicalGridComponent,
        IgxRowIslandComponent,
        IgxCellTemplateDirective,
        IgxPreventDocumentScrollDirective,
        IgxColumnComponent,
        IgxButtonDirective,
        IgxCheckboxComponent,
        IgxToggleDirective
    ]
})
export class HierarchicalGridDisableSummariesComponent implements OnInit, AfterViewInit {
    @ViewChild("hierarchicalGrid1", { static: true }) public hierarchicalGrid1: IgxHierarchicalGridComponent;
    @ViewChildren(IgxToggleDirective) public toggles: QueryList<IgxToggleDirective>;
    @ViewChildren('toggleButton') public buttons: QueryList<ElementRef>;

    public data: any[];
    public togglesArray: any[];
    public buttonsArray: any[];

    public columns = [
        {
            label: 'Artist',
            field: 'Artist',
            summaries: []
        },
        {
            label: 'Photo',
            field: 'Photo',
            summaries: []
        },
        {
            label: 'Debut',
            field: 'Debut',
            summaries: []
        },
        {
            label: 'Grammy Nominations',
            field: 'GrammyNominations',
            summaries: []
        },
        {
            label: 'Grammy Awards',
            field: 'GrammyAwards',
            summaries: []
        }
    ];

    public grammySummary = GrammySummary;

    private _positionSettings = {
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalStartPoint: VerticalAlignment.Bottom,
        horizontalDirection: HorizontalAlignment.Right,
        verticalDirection: VerticalAlignment.Bottom
    };

    private _overlaySettings: OverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        closeOnEscape: true,
        positionStrategy: new ConnectedPositioningStrategy(this._positionSettings)
    };

    constructor() {}

    public ngOnInit(): void {
        this.data = SINGERS;
    }

    public ngAfterViewInit(): void {
        this.togglesArray = this.toggles.toArray();
        this.buttonsArray = this.buttons.toArray();

        this.columns.forEach((column, index) => {
            column.summaries = this.getSummaries(column.field)
        });
    }

    public getCheckedSummariesCount(summaries: any[]): number {
        return summaries.filter(summary => summary.checked).length;
    }

    public toggle(index: number): void {
        this._overlaySettings.target = this.buttonsArray[index].nativeElement;
        this.togglesArray[index].toggle(this._overlaySettings);
    }

    public toggleCheckbox(event: any, index: number, column: any): void {
        column.summaries[index].checked = event.checked;
        if (event.checked) {
            this.hierarchicalGrid1.getColumnByName(column.field).disabledSummaries = [
                ...this.hierarchicalGrid1.getColumnByName(column.field).disabledSummaries,
                column.summaries[index].summaryKey
            ];
        } else {
            this.hierarchicalGrid1.getColumnByName(column.field).disabledSummaries = this.hierarchicalGrid1.getColumnByName(column.field).disabledSummaries.filter(
                (key: string) => key !== column.summaries[index].summaryKey
            );
        }
    }

    public uncheckAllColumns(column: any): void {
        column.summaries.forEach(summary => (summary.checked = false));
        this.hierarchicalGrid1.getColumnByName(column.field).disabledSummaries = [];
    }

    public checkAllColumns(column: any): void {
        column.summaries.forEach(summary => (summary.checked = true));
        this.hierarchicalGrid1.getColumnByName(column.field).disabledSummaries = column.summaries.map(summary => summary.summaryKey);
    }

    public formatter = (a) => a;

    private getSummaries(columnName: string): any[] {
        return this.hierarchicalGrid1
            .getColumnByName(columnName)
            .summaries.operate(
                this.hierarchicalGrid1.data.map((record) => record.ProductID)
            )
            .map((summary) => ({
                summaryKey: summary.key,
                summaryLabel: summary.label,
                checked: false
            }));
    }
}
