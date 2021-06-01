import { AfterViewInit, Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { IgxTreeGridComponent } from 'igniteui-angular';
import { TreeGridGroupingLoadOnDemandService, TreeGridGroupingParameters } from './remoteService';

@Component({
    selector: 'app-tree-grid-group-by-load-on-demand-sample',
    styleUrls: ['./tree-grid-group-by-load-on-demand-sample.component.scss'],
    templateUrl: './tree-grid-group-by-load-on-demand-sample.component.html'
})

export class TreeGridGroupByLoadOnDemandComponent implements AfterViewInit, OnInit {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;

    public groupColumns = ['ShipCountry', 'ShipCity', 'Discontinued'];
    public primaryKey = 'id';
    public childDataKey = 'children';
    public hasChildrenKey = 'children';
    public groupColumnKey = '';
    public data = [];

    private dataService = new TreeGridGroupingLoadOnDemandService();

    public ngOnInit() {
        this.reloadData();
    }

    public ngAfterViewInit() {
        this.groupColumns.forEach(col => {
            const column = this.treeGrid.getColumnByName(col);
            if (column) {
                column.hidden = !column.hidden;
            }
        });
    }

    public loadChildren = (parentID: any, done: (children: any[]) => void) => {
        const groupingParameters = this.assembleGroupingParameters();
        this.dataService.getData(parentID, groupingParameters, (children) => done(children));
    };

    public onGroupColumnsChange(event: EventEmitter<string[]>) {
        this.reloadData();
    }

    private reloadData() {
        this.treeGrid.isLoading = true;
        this.treeGrid.expansionStates.clear();
        const groupingParameters = this.assembleGroupingParameters();
        this.dataService.getData(null, groupingParameters, (children) => {
            this.data = children;
            this.treeGrid.isLoading = false;
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
