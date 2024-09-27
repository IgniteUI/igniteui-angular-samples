import { Component, OnInit } from '@angular/core';
import { FilteringExpressionsTree, FilteringLogic, IExpressionTree, IgxQueryBuilderComponent, IgxBooleanFilteringOperand, IgxDateFilteringOperand, IgxNumberFilteringOperand, IgxStringFilteringOperand } from 'igniteui-angular';

@Component({
    selector: 'app-query-builder-template-sample',
    styleUrls: ['./query-builder-template-sample.component.scss'],
    templateUrl: 'query-builder-template-sample.component.html'
})
export class QueryBuilderTemplateSampleComponent implements OnInit {
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
            fieldName: 'Contact',
            condition: IgxBooleanFilteringOperand.instance().condition('true'),
            conditionName: 'true'
        });

        const tree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Orders', ['*']);
        tree.filteringOperands.push({
            fieldName: 'CompanyID',
            condition: IgxStringFilteringOperand.instance().condition('in'),
            conditionName: 'in',
            searchTree: innerTree
        });
        tree.filteringOperands.push({
            fieldName: 'OrderDate',
            condition: IgxDateFilteringOperand.instance().condition('before'),
            conditionName: 'before',
            searchVal: new Date('2024-01-01T00:00:00.000Z')
        });
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