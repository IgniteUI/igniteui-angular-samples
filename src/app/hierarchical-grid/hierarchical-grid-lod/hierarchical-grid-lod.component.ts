import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IGridCreatedEventArgs, IgxHierarchicalGridComponent, IgxRowIslandComponent, IgxColumnComponent, FilteringExpressionsTree, IgxNumberFilteringOperand, IgxStringFilteringOperand, EntityType, IGX_HIERARCHICAL_GRID_DIRECTIVES, FilteringLogic } from 'igniteui-angular';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { HttpClient } from '@angular/common/http';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

@Component({
    selector: 'app-hierarchical-grid-lod',
    styleUrls: ['./hierarchical-grid-lod.component.scss'],
    templateUrl: './hierarchical-grid-lod.component.html',
    imports: [IGX_HIERARCHICAL_GRID_DIRECTIVES, IgxHierarchicalGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxRowIslandComponent]
})
export class HierarchicalGridLoDSampleComponent implements OnInit, AfterViewInit {
    @ViewChild('hGrid', { static: true })
    public hGrid: IgxHierarchicalGridComponent;

    public remoteData = [];
    public schema: EntityType[] = [
        {
            name: 'Customers',
            fields: [
                { field: 'customerId', dataType: 'string' },
                { field: 'companyName', dataType: 'string' },
                { field: 'contactName', dataType: 'string' },
                { field: 'contactTitle', dataType: 'string' }
            ],
            childEntities: [
                {
                    name: 'Orders',
                    fields: [
                        { field: 'customerId', dataType: 'string' }, // first field will be treated as foreign key
                        { field: 'orderId', dataType: 'number' },
                        { field: 'employeeId', dataType: 'number' },
                        { field: 'shipVia', dataType: 'string' },
                        { field: 'freight', dataType: 'number' }
                    ],
                    childEntities: [
                        {
                            name: 'Details',
                            fields: [
                                { field: 'orderId', dataType: 'number' }, // first field will be treated as foreign key
                                { field: 'productId', dataType: 'number' },
                                { field: 'unitPrice', dataType: 'number' },
                                { field: 'quantity', dataType: 'number' },
                                { field: 'discount', dataType: 'number' }
                            ]
                        }
                    ]
                }
            ]
        }
    ];

    constructor(private http: HttpClient) {}

    public ngOnInit() {
        const ordersTree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Orders', ['customerId']);
        ordersTree.filteringOperands.push({
            fieldName: 'freight',
            ignoreCase: false,
            condition: IgxNumberFilteringOperand.instance().condition('greaterThanOrEqualTo'),
            conditionName: IgxNumberFilteringOperand.instance().condition('greaterThanOrEqualTo').name,
            searchVal: '500'
        });

        const customersTree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Customers', ['customerId', 'companyName', 'contactName', 'contactTitle']);
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
            this.http.post(`${API_ENDPOINT}/QueryBuilder/ExecuteQuery`, tree).subscribe(data =>{
                this.remoteData = Object.values(data)[0];
                this.hGrid.isLoading = false;
                this.hGrid.cdr.detectChanges();
            });
        } else {
            this.http.get(`${API_ENDPOINT}/Customers`).subscribe(data => {
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
        const parentKey = (event.grid.parent as any).key ?? this.schema[0].name;
        const url = `${API_ENDPOINT}/${parentKey}/${event.parentID}/${event.owner.key}`;
        return url;
    }
}
