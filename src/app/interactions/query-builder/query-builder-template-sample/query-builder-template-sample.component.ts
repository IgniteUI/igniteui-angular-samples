import { Component, OnInit } from '@angular/core';
import { FilteringExpressionsTree, FilteringLogic, IExpressionTree, IgxBooleanFilteringOperand, IgxDateFilteringOperand, IgxNumberFilteringOperand, IgxStringFilteringOperand } from 'igniteui-angular';

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
    public regionOptions = [
        {text: 'Central North America', value: 'CNA'},
        {text: 'Central Europe', value: 'CEU'},
        {text: 'Mediterranean region', value: 'MED'},
        {text: 'Central Asia', value: 'CAS'},
        {text: 'South Asia', value: 'SAS'},
        {text: 'Western Africa', value: 'WAF'},
        {text: 'Amazonia', value: 'AMZ'},
        {text: 'Southern Africa', value: 'SAF'},
        {text: 'Northern Australia', value: 'NAU'}];

    public statusOptions = [
        {text: 'New', value: 1},
        {text: 'Shipped', value: 2},
        {text: 'Delivered', value: 3}];

    public ngOnInit(): void {
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
            { field: "Region", dataType: "string" },
            { field: "OrderStatus", dataType: "number" }
        ];

        this.entities = [
            {
                name: "Orders",
                fields: this.ordersFields
            }
        ];

        const tree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Orders', ['*']);
        tree.filteringOperands.push({
            fieldName: 'Region',
            condition: IgxStringFilteringOperand.instance().condition('equals'),
            conditionName: 'equals',
            searchVal: 'CNA'
        });
        tree.filteringOperands.push({
            fieldName: 'OrderStatus',
            condition: IgxNumberFilteringOperand.instance().condition('equals'),
            conditionName: 'equals',
            searchVal: 1
        });
        tree.filteringOperands.push({
            fieldName: 'OrderDate',
            condition: IgxDateFilteringOperand.instance().condition('before'),
            conditionName: 'before',
            searchVal: new Date('2024-01-01T00:00:00.000Z')
        });

        this.expressionTree = tree;
    }

    public printExpressionTree(tree: IExpressionTree) {
        return tree ? JSON.stringify(tree, null, 2) : 'Please add an expression!';
    }
}