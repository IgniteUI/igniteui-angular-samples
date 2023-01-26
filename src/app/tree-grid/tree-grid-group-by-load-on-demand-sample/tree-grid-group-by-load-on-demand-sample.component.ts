import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DefaultSortingStrategy, IGroupingExpression, IgxTreeGridComponent } from '@infragistics/igniteui-angular';
import { TreeGridGroupingLoadOnDemandService, TreeGridGroupingParameters } from './remoteService';

@Component({
    selector: 'app-tree-grid-group-by-load-on-demand-sample',
    styleUrls: ['./tree-grid-group-by-load-on-demand-sample.component.scss'],
    templateUrl: './tree-grid-group-by-load-on-demand-sample.component.html'
})

export class TreeGridGroupByLoadOnDemandComponent implements OnInit {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;
    @Input()
    public groupingExpressions: IGroupingExpression[] = [
        { fieldName: 'ShipCountry', dir: 2, ignoreCase: true, strategy: DefaultSortingStrategy.instance() },
        { fieldName: 'ShipCity', dir: 1, ignoreCase: true, strategy: DefaultSortingStrategy.instance() },
        { fieldName: 'Discontinued', dir: 1, ignoreCase: true, strategy: DefaultSortingStrategy.instance() }
    ];

    public primaryKey = 'id';
    public foreignKey = 'parentId';
    public hasChildrenKey = 'children';
    public groupColumnKey = '';
    public data = [];

    private dataService = new TreeGridGroupingLoadOnDemandService();

    public ngOnInit() {
        this.reloadData();
    }

    public loadChildren = (parentID: any, done: (children: any[]) => void) => {
        const groupingParameters = this.assembleGroupingParameters();
        this.dataService.getData(parentID, this.hasChildrenKey, groupingParameters, (children) => done(children));
    };

    public onExpressionsChange(event: IGroupingExpression[]) {
        this.reloadData();
    }

    private reloadData() {
        this.treeGrid.isLoading = true;
        this.treeGrid.expansionStates.clear();
        const groupingParameters = this.assembleGroupingParameters();
        this.dataService.getData(null, this.hasChildrenKey, groupingParameters, (children) => {
            this.data = children;
            this.treeGrid.isLoading = false;
            this.treeGrid.reflow();
        });
    }

    private assembleGroupingParameters(): TreeGridGroupingParameters {
        const groupingParameters: TreeGridGroupingParameters = {
            groupingExpressions: this.groupingExpressions,
            groupKey: this.groupColumnKey,
            primaryKey: this.primaryKey,
            foreignKey: this.foreignKey
        };

        return groupingParameters;
    }
}
