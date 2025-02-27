import { Component, OnInit } from '@angular/core';
import { FilteringExpressionsTree, FilteringLogic, IExpressionTree, IgxBooleanFilteringOperand, IgxDateFilteringOperand, IgxNumberFilteringOperand, IgxQueryBuilderComponent, IgxStringFilteringOperand } from 'igniteui-angular';

@Component({
    selector: 'app-query-builder-sample-1',
    styleUrls: ['./query-builder-sample-1.component.scss'],
    templateUrl: 'query-builder-sample-1.component.html',
    imports: [IgxQueryBuilderComponent]
})
export class QueryBuilderSample1Component implements OnInit {
    public entities: any[];
    public companiesFields: any[];
    public ordersFields: any[];
    public expressionTree: IExpressionTree;

    public ngOnInit(): void {
        this.companiesFields = [
            { field: "ID", dataType: "string" },
            { field: "CompanyName", dataType: "string" },
            { field: "ContactName", dataType: "string" },
            { field: "Employees", dataType: "number" },
            { field: "ContactTitle", dataType: "string" },
            { field: "DateCreated", dataType: "date" },
            { field: "TimeCreated", dataType: "time" },
            { field: "Address", dataType: "string" },
            { field: "City", dataType: "string" },
            { field: "Region", dataType: "string" },
            { field: "PostalCode", dataType: "string" },
            { field: "Phone", dataType: "string" },
            { field: "Fax", dataType: "string" },
            { field: "Contract", dataType: "boolean" }
        ];

        this.ordersFields = [
            { field: "CompanyID", dataType: "string" },
            { field: "OrderID", dataType: "number" },
            { field: "EmployeeId", dataType: "number" },
            { field: "OrderDate", dataType: "date" },
            { field: "RequiredDate", dataType: "date" },
            { field: "ShippedDate", dataType: "date" },
            { field: "ShipVia", dataType: "number" },
            { field: "Freight", dataType: "number" },
            { field: "ShipName", dataType: "string" },
            { field: "ShipCity", dataType: "string" },
            { field: "ShipPostalCode", dataType: "string" },
            { field: "ShipCountry", dataType: "string" },
            { field: "Region", dataType: "string" }
        ];

        this.entities = [
            {
                name: "Companies",
                fields: this.companiesFields
            },
            {
                name: "Orders",
                fields: this.ordersFields
            }
        ];

        const innerTree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Companies', ['ID']);
        innerTree.filteringOperands.push({
            fieldName: 'Employees',
            condition: IgxNumberFilteringOperand.instance().condition('greaterThan'),
            conditionName: 'greaterThan',
            searchVal: 100
        });
        innerTree.filteringOperands.push({
            fieldName: 'Contract',
            condition: IgxBooleanFilteringOperand.instance().condition('true'),
            conditionName: 'true'
        });

        const subGroup = new FilteringExpressionsTree(FilteringLogic.Or, undefined, 'Orders', ['*']);
        subGroup.filteringOperands.push({
            fieldName: 'ShipCity',
            condition: IgxStringFilteringOperand.instance().condition('endsWith'),
            conditionName: IgxStringFilteringOperand.instance().condition('endsWith').name,
            searchVal: 'bar'
        });
        subGroup.filteringOperands.push({
            fieldName: 'OrderDate',
            condition: IgxDateFilteringOperand.instance().condition('today'),
            conditionName: IgxDateFilteringOperand.instance().condition('today').name
        });
        
        const tree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Orders', ['*']);
        tree.filteringOperands.push({
            fieldName: 'CompanyID',
            condition: IgxStringFilteringOperand.instance().condition('inQuery'),
            conditionName: 'inQuery',
            searchTree: innerTree
        });
        tree.filteringOperands.push({
            fieldName: 'OrderDate',
            condition: IgxDateFilteringOperand.instance().condition('before'),
            conditionName: 'before',
            searchVal: new Date('2024-01-01T00:00:00.000Z')
        });
        tree.filteringOperands.push(subGroup);
        tree.filteringOperands.push({
            fieldName: 'ShippedDate',
            condition: IgxDateFilteringOperand.instance().condition('null'),
            conditionName: 'null'
        });

        this.expressionTree = tree;
    }

    public printExpressionTree(tree: IExpressionTree) {
        return tree ? JSON.stringify(tree, null, 2) : 'Please add an expression!';
    }
}