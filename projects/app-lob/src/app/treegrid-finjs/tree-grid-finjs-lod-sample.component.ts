import { AfterViewInit, Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { IgxOverlayOutletDirective, IgxTreeGridComponent } from 'igniteui-angular';
import { TreeGridGroupingLoadOnDemandService, TreeGridGroupingParameters } from './remoteService';
import { ITreeGridAggregation } from './tree-grid-grouping.pipe';

@Component({
    selector: 'app-tree-grid-finjs-lod-sample',
    styleUrls: ['./tree-grid-finjs-lod-sample.component.scss'],
    templateUrl: './tree-grid-finjs-lod-sample.component.html'
})

export class TreeGridFinJSLoadOnDemandComponent implements AfterViewInit, OnInit {
    @ViewChild('grid1', { static: true }) public grid1: IgxTreeGridComponent;
    @ViewChild(IgxOverlayOutletDirective, { static: true }) public outlet: IgxOverlayOutletDirective;

    public selectionMode = 'multiple';
    public groupColumns = ['category', 'type'];
    public aggregations: ITreeGridAggregation[] = [
        {
            aggregate: (parent: any, data: any[]) => data.map((r) => r.change).reduce((ty, u) => ty + u, 0),
            field: 'change'
        },
        {
            aggregate: (parent: any, data: any[]) => data.map((r) => r.price).reduce((ty, u) => ty + u, 0),
            field: 'price'
        },
        {
            aggregate: (parent: any, data: any[]) => parent.change / (parent.price - parent.change) * 100,
            field: 'changeP'
        }
    ];
    public primaryKey = 'id';
    public childDataKey = 'children';
    public hasChildrenKey = 'children';
    public groupColumnKey = 'categories';

    public data = [];
    private dataService = new TreeGridGroupingLoadOnDemandService();

    constructor() { }

    public ngOnInit() {
        this.reloadData();
        // this.grid1.sortingExpressions = [{ fieldName: this.groupColumnKey, dir: SortingDirection.Desc }];
    }

    public ngAfterViewInit() {
        this.groupColumns.forEach(col => {
            const column = this.grid1.getColumnByName(col);
            if (column) {
                column.hidden = !column.hidden;
            }
        });
        this.grid1.reflow();
    }

    public loadChildren = (parentID: any, done: (children: any[]) => void) => {
        const groupingParameters = this.assembleGroupingParameters();
        this.dataService.getData(parentID, groupingParameters, (children) => done(children));
    };

    public formatNumber(value: number) {
        return value ? value.toFixed(2) : '';
    }

    public percentage(value: number) {
        return value ? value.toFixed(2) + '%' : '';
    }

    public formatCurrency(value: number) {
        return value ? '$' + value.toFixed(3) : '';
    }

    public onGroupColumnsChange(event: EventEmitter<string[]>) {
        this.reloadData();
    }

    private reloadData() {
        this.grid1.isLoading = true;
        const groupingParameters = this.assembleGroupingParameters();
        this.dataService.getData(null, groupingParameters, (children) => {
            this.data = children;
            this.grid1.isLoading = false;
        });
    }

    private negative = (rowData: any): boolean => rowData['changeP'] < 0;
    private positive = (rowData: any): boolean => rowData['changeP'] > 0;
    private changeNegative = (rowData: any): boolean => rowData['changeP'] < 0 && rowData['changeP'] > -1;
    private changePositive = (rowData: any): boolean => rowData['changeP'] > 0 && rowData['changeP'] < 1;
    private strongPositive = (rowData: any): boolean => rowData['changeP'] >= 1;
    private strongNegative = (rowData: any, key: string): boolean => rowData['changeP'] <= -1;

    /* eslint-disable @typescript-eslint/member-ordering */
    public trends = {
        changeNeg: this.changeNegative,
        changePos: this.changePositive,
        negative: this.negative,
        positive: this.positive,
        strongNegative: this.strongNegative,
        strongPositive: this.strongPositive
    };

    public trendsChange = {
        changeNeg2: this.changeNegative,
        changePos2: this.changePositive,
        strongNegative2: this.strongNegative,
        strongPositive2: this.strongPositive
    };
    /* eslint-enable @typescript-eslint/member-ordering */

    private assembleGroupingParameters(): TreeGridGroupingParameters {
        const groupingParameters: TreeGridGroupingParameters = {
            groupColumns: this.groupColumns,
            aggregations: this.aggregations,
            groupKey: this.groupColumnKey,
            primaryKey: this.primaryKey,
            childDataKey: this.childDataKey
        };

        return groupingParameters;
    }
}
