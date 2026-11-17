import { AfterViewInit, Component, OnInit, ViewChild, inject } from '@angular/core';
import { IGX_HIERARCHICAL_GRID_DIRECTIVES, IGridCreatedEventArgs, IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular/grids/hierarchical-grid';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { FilteringExpressionsTree, FilteringLogic, IgxNumberFilteringOperand, IgxStringFilteringOperand } from 'igniteui-angular/core';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { HttpClient } from '@angular/common/http';

const API_ENDPOINT = 'https://data-northwind.indigo.design';
const ROOT_ENTITY = 'Customers';

@Component({
    selector: 'app-hierarchical-grid-lod',
    styleUrls: ['./hierarchical-grid-lod.component.scss'],
    templateUrl: './hierarchical-grid-lod.component.html',
    imports: [IGX_HIERARCHICAL_GRID_DIRECTIVES, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent]
})
export class HierarchicalGridLoDSampleComponent implements OnInit, AfterViewInit {
    private http = inject(HttpClient);

    @ViewChild('hGrid', { static: true })
    public hGrid: IgxHierarchicalGridComponent;

    public remoteData = [];
    public ngOnInit() {
        const ordersTree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Orders', ['customerId']);
        ordersTree.filteringOperands.push({
            fieldName: 'freight',
            ignoreCase: false,
            condition: IgxNumberFilteringOperand.instance().condition('greaterThanOrEqualTo'),
            conditionName: IgxNumberFilteringOperand.instance().condition('greaterThanOrEqualTo').name,
            searchVal: 500
        });

        const customersTree = new FilteringExpressionsTree(FilteringLogic.And, undefined, ROOT_ENTITY, ['customerId', 'companyName', 'contactName', 'contactTitle']);
        customersTree.filteringOperands.push({
            fieldName: 'customerId',
            condition: IgxStringFilteringOperand.instance().condition('inQuery'),
            conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
            ignoreCase: false,
            searchTree: ordersTree
        });
        this.hGrid.advancedFilteringExpressionsTree = customersTree;
    }

    public ngAfterViewInit() {
        this.refreshRootGridData();
    }

    public refreshRootGridData() {
        const tree = this.hGrid.advancedFilteringExpressionsTree;
        this.hGrid.isLoading = true;
        if (tree) {
            const query = { ...tree, entity: ROOT_ENTITY };
            this.http.post(`${API_ENDPOINT}/QueryBuilder/ExecuteQuery`, query).subscribe(data =>{
                this.remoteData = Object.values(data)[0];
                this.hGrid.isLoading = false;
                this.hGrid.cdr.detectChanges();
            });
        } else {
            this.http.get(`${API_ENDPOINT}/${ROOT_ENTITY}`).subscribe(data => {
                this.remoteData = Object.values(data);
                this.hGrid.isLoading = false;
                this.hGrid.cdr.detectChanges();
            });
        }
    }

    public gridCreated(event: IGridCreatedEventArgs) {
        event.grid.isLoading = true;
        const url = this.buildUrl(event);
        this.http.get(url).subscribe(data => {
            event.grid.data = Object.values(data);
            event.grid.isLoading = false;
            this.hGrid.cdr.detectChanges();
        });
    }

    private buildUrl(event: IGridCreatedEventArgs) {
        const parentKey = (event.grid.parent as any).key ?? ROOT_ENTITY;
        const url = `${API_ENDPOINT}/${parentKey}/${event.parentID}/${event.owner.key}`;
        return url;
    }
}
