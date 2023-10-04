import { Component, OnInit } from '@angular/core';
import { FilteringExpressionsTree, FilteringLogic, IExpressionTree, IgxQueryBuilderComponent, IgxStringFilteringOperand } from 'igniteui-angular';

@Component({
    selector: 'app-query-builder-sample-1',
    styleUrls: ['./query-builder-sample-1.component.scss'],
    templateUrl: 'query-builder-sample-1.component.html'
})
export class QueryBuilderSample1Component implements OnInit {
    public expressionTree: IExpressionTree;
    
    public fields: any[] = [
        { field: 'ID', dataType: 'string' },
        { field: 'CompanyName', dataType: 'string' },
        { field: 'ContactName', dataType: 'string' },
        { field: 'Employees', dataType: 'number' },
        { field: 'ContactTitle', dataType: 'string' },
        { field: 'DateCreated', dataType: 'date' },
        { field: 'TimeCreated', dataType: 'time' },
        { field: 'Address', dataType: 'string' },
        { field: 'City', dataType: 'string' },
        { field: 'Region', dataType: 'string' },
        { field: 'PostalCode', dataType: 'string' },
        { field: 'Phone', dataType: 'string' },
        { field: 'Fax', dataType: 'string' },
        { field: 'Contract', dataType: 'boolean' }
    ];

    public ngOnInit(): void {
        const tree = new FilteringExpressionsTree(FilteringLogic.And);
        tree.filteringOperands.push({
            fieldName: 'ID',
            condition: IgxStringFilteringOperand.instance().condition('contains'),
            searchVal: 'a',
            ignoreCase: true
        });
        const orTree = new FilteringExpressionsTree(FilteringLogic.Or);
        orTree.filteringOperands.push({
            fieldName: 'ID',
            condition: IgxStringFilteringOperand.instance().condition('contains'),
            searchVal: 'b',
            ignoreCase: true
        });
        orTree.filteringOperands.push({
            fieldName: 'CompanyName',
            condition: IgxStringFilteringOperand.instance().condition('contains'),
            searchVal: 'c',
            ignoreCase: true
        });
        tree.filteringOperands.push(orTree);
        tree.filteringOperands.push({
            fieldName: 'CompanyName',
            condition: IgxStringFilteringOperand.instance().condition('contains'),
            searchVal: 'd',
            ignoreCase: true
        });

        this.expressionTree = tree;
    }

    public printExpressionTree(tree: IExpressionTree) {
        return tree ? JSON.stringify(tree, null, 2) : 'Please add an expression!';
    }
}
