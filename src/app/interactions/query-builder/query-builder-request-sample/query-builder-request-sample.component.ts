import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FilteringExpressionsTree, FilteringLogic, IExpressionTree, IgxColumnComponent, IgxGridComponent, IgxQueryBuilderComponent } from 'igniteui-angular';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

@Component({
    selector: 'query-builder-request-sample',
    styleUrls: ['./query-builder-request-sample.component.scss'],
    templateUrl: 'query-builder-request-sample.component.html',
    imports: [IgxQueryBuilderComponent, IgxGridComponent, IgxColumnComponent]
})
export class QueryBuilderRequestSampleComponent implements OnInit {
    @ViewChild('grid', { static: true })
    public grid: IgxGridComponent;

    public entities: any[];
    public customersFields: any[];
    public ordersFields: any[];
    public expressionTree: IExpressionTree;
    public data: any[] = [];

    constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

    public ngOnInit(): void {
        this.customersFields = [
            { field: "customerId", dataType: "string" },
            { field: "companyName", dataType: "string" },
            { field: "contactName", dataType: "string" },
            { field: "contactTitle", dataType: "string" }
        ];

        this.ordersFields = [
            { field: "orderId", dataType: "number" },
            { field: "customerId", dataType: "string" },
            { field: "employeeId", dataType: "number" },
            { field: "shipperId", dataType: "number" },
            { field: "orderDate", dataType: "date" },
            { field: "requiredDate", dataType: "date" },
            { field: "shipVia", dataType: "number" },
            { field: "freight", dataType: "number" },
            { field: "shipName", dataType: "string" },
            { field: "completed", dataType: "boolean" }
        ];

        this.entities = [
            {
                name: "Customers",
                fields: this.customersFields
            },
            {
                name: "Orders",
                fields: this.ordersFields
            }
        ];
        
        const tree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Orders', ['orderId', 'customerId', 'employeeId', 'shipperId', 'orderDate', 'requiredDate', 'shipVia', 'freight', 'shipName', 'completed']);
        this.expressionTree = tree;

        this.onChange();
    }

    public onChange() {
        this.grid.isLoading = true;
        this.http.post(`${API_ENDPOINT}/QueryBuilder/ExecuteQuery`, this.expressionTree).subscribe(data =>{
            this.data = Object.values(data)[0];
            this.grid.isLoading = false;
        });
        this.cdr.detectChanges();
        this.calculateColsInView();
    }

    private calculateColsInView() {
        this.grid.columns.forEach(column => column.hidden = !this.expressionTree.returnFields.includes(column.field));
    }
}