import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { FilteringExpressionsTree, FilteringLogic, IExpressionTree } from 'igniteui-angular/core';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxQueryBuilderComponent } from 'igniteui-angular/query-builder';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

@Component({
    selector: 'query-builder-request-sample',
    styleUrls: ['./query-builder-request-sample.component.scss'],
    templateUrl: 'query-builder-request-sample.component.html',
    imports: [IgxQueryBuilderComponent, IgxGridComponent, IgxColumnComponent]
})
export class QueryBuilderRequestSampleComponent implements OnInit, AfterViewInit {
    private http = inject(HttpClient);
    private cdr = inject(ChangeDetectorRef);

    @ViewChild('grid', { static: true })
    public grid: IgxGridComponent;

    public entities: any[];
    public customersFields: any[];
    public ordersFields: any[];
    public expressionTree: IExpressionTree;
    public data: any[] = [];

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
            { field: "shipVia", dataType: "string" },
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
    }
    
    public ngAfterViewInit(): void {
        this.onChange();
    }


    public onChange() {
        this.grid.isLoading = true;
        this.http.post(`${API_ENDPOINT}/QueryBuilder/ExecuteQuery`, this.expressionTree).subscribe(data =>{
            this.data = Object.values(data)[0];
            this.grid.isLoading = false;
            this.cdr.detectChanges();
            this.calculateColsInView();
        });
    }

    private calculateColsInView() {
        if (this.expressionTree.returnFields.length === 0 || this.expressionTree.returnFields[0] === '*') {
            const selectedEntity = this.entities.find(entity => entity.name === this.expressionTree.entity);
            const selectedEntityFields = selectedEntity.fields.map(field => field.field);
            this.grid.columns.forEach(column => column.hidden = !selectedEntityFields.includes(column.field));
        } else {
            this.grid.columns.forEach(column => column.hidden = !this.expressionTree.returnFields.includes(column.field));
        }
    }
}
