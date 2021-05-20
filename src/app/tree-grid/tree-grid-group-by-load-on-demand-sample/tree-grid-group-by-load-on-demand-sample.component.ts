import { AfterViewInit, Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular';
import { TreeGridGroupingLoadOnDemandService, TreeGridGroupingParameters } from './remoteService';

@Component({
    selector: 'app-tree-grid-group-by-load-on-demand-sample',
    styleUrls: ['./tree-grid-group-by-load-on-demand-sample.component.scss'],
    templateUrl: './tree-grid-group-by-load-on-demand-sample.component.html'
})

export class TreeGridGroupByLoadOnDemandComponent implements AfterViewInit, OnInit {
    @ViewChild('grid1', { static: true }) public grid1: IgxTreeGridComponent;
    // @ViewChild(IgxOverlayOutletDirective, { static: true }) public outlet: IgxOverlayOutletDirective;

    public selectionMode = 'multiple';
    public groupColumns = ['category', 'type'];
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

    private assembleGroupingParameters(): TreeGridGroupingParameters {
        const groupingParameters: TreeGridGroupingParameters = {
            groupColumns: this.groupColumns,
            groupKey: this.groupColumnKey,
            primaryKey: this.primaryKey,
            childDataKey: this.childDataKey
        };

        return groupingParameters;
    }
}
