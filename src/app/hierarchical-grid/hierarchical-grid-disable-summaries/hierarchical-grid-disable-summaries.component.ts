import {
    Component,
    ViewChild,
    OnInit,
    AfterViewInit
} from "@angular/core";
import {
    IgxCellTemplateDirective,
    IgxColumnComponent,
    IgxHierarchicalGridComponent,
    IgxNumberSummaryOperand,
    IgxRowIslandComponent,
    IgxSummaryResult,
    IgxButtonGroupComponent
} from "igniteui-angular";
import { SINGERS } from "../../data/singersData";
import { IgxPreventDocumentScrollDirective } from "../../directives/prevent-scroll.directive";

class GrammySummary {
    public operate(
        data?: any[],
        allData = [],
        fieldName = ""
    ): IgxSummaryResult[] {
        const result = [];

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
        IgxHierarchicalGridComponent,
        IgxPreventDocumentScrollDirective,
        IgxColumnComponent,
        IgxCellTemplateDirective,
        IgxRowIslandComponent,
        IgxButtonGroupComponent
    ]
})
export class HierarchicalGridDisableSummariesComponent implements OnInit, AfterViewInit {
    @ViewChild("hierarchicalGrid1", { static: true })
    private hierarchicalGrid1: IgxHierarchicalGridComponent;

    public data: any[];
    public defaultSummaries: any[];
    public customSummaries: any[];

    public grammySummary = GrammySummary;

    constructor() {}

    public ngOnInit(): void {
        this.data = SINGERS;
    }

    public ngAfterViewInit(): void {
        this.defaultSummaries = [
            {
                label: 'Count',
                selected: this.hierarchicalGrid1.getColumnByName('GrammyNominations').disabledSummaries.includes('count'),
                togglable: true,
                value: 'count'
            },
            {
                label: 'Min',
                selected: this.hierarchicalGrid1.getColumnByName('GrammyNominations').disabledSummaries.includes('min'),
                togglable: true,
                value: 'min'
            },
            {
                label: 'Max',
                selected: this.hierarchicalGrid1.getColumnByName('GrammyNominations').disabledSummaries.includes('max'),
                togglable: true,
                value: 'max'
            },
            {
                label: 'Sum',
                selected: this.hierarchicalGrid1.getColumnByName('GrammyNominations').disabledSummaries.includes('sum'),
                togglable: true,
                value: 'sum'
            },
            {
                label: 'Average',
                selected: this.hierarchicalGrid1.getColumnByName('GrammyNominations').disabledSummaries.includes('average'),
                togglable: true,
                value: 'average'
            }
        ];

        this.customSummaries = [
            {
                label: 'Nominated Singers',
                selected: this.hierarchicalGrid1.getColumnByName('Photo').disabledSummaries.includes('nominatedSingers'),
                togglable: true,
                value: 'nominatedSingers'
            },
            {
                label: 'Singers with Awards',
                selected: this.hierarchicalGrid1.getColumnByName('Photo').disabledSummaries.includes('singersWithAwards'),
                togglable: true,
                value: 'singersWithAwards'
            },
            {
                label: 'Total Nominations',
                selected: this.hierarchicalGrid1.getColumnByName('Photo').disabledSummaries.includes('nominations'),
                togglable: true,
                value: 'nominations'
            },
            {
                label: 'Total Awards',
                selected: this.hierarchicalGrid1.getColumnByName('Photo').disabledSummaries.includes('awards'),
                togglable: true,
                value: 'awards'
            }
        ];
    }

    public disableDefaultSummary(event) {
        const selectedValue = this.defaultSummaries[event.index].value;
        const column = this.hierarchicalGrid1.getColumnByName('GrammyNominations');

        if (!column.disabledSummaries.includes(selectedValue)) {
            column.disabledSummaries = [...column.disabledSummaries, selectedValue];
        }
    }

    public enableDefaultSummary(event) {
        const selectedValue = this.defaultSummaries[event.index].value;
        const column = this.hierarchicalGrid1.getColumnByName('GrammyNominations');

        column.disabledSummaries = column.disabledSummaries.filter(
            (summary) => summary !== selectedValue
        );
    }

    public disableCustomSummary(event) {
        const selectedValue = this.customSummaries[event.index].value;
        const column = this.hierarchicalGrid1.getColumnByName('Photo');

        if (!column.disabledSummaries.includes(selectedValue)) {
            column.disabledSummaries = [...column.disabledSummaries, selectedValue];
        }
    }

    public enableCustomSummary(event) {
        const selectedValue = this.customSummaries[event.index].value;
        const column = this.hierarchicalGrid1.getColumnByName('Photo');

        column.disabledSummaries = column.disabledSummaries.filter(
            (summary) => summary !== selectedValue
        );
    }

    public formatter = (a) => a;
}
