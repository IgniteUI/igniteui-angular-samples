import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EntityType, FieldType, FilteringExpressionsTree, IExpressionTree, IgxGridComponent, IgxQueryBuilderComponent, IgxStringFilteringOperand } from 'igniteui-angular';
import { format } from 'sql-formatter';
const API_ENDPOINT = 'https://data-northwind.indigo.design';

@Component({
    selector: 'app-query-builder-sql-sample',
    styleUrls: ['./query-builder-sql-sample.component.scss'],
    templateUrl: 'query-builder-sql-sample.component.html',
    imports: [IgxQueryBuilderComponent, IgxGridComponent]
})
export class QueryBuilderSqlSampleComponent implements OnInit {
    @ViewChild('queryBuilder', { static: true })
    public queryBuilder: IgxQueryBuilderComponent;

    @ViewChild('grid', { static: true })
    public grid: IgxGridComponent;

    public gridData = [];
    public entities: EntityType[] = [];
    public expressionTree: IExpressionTree;
    public sqlQuery: string = 'SQL Query will be displayed here';

    constructor(private http: HttpClient) {}

    public ngOnInit(): void {
        this.setEntities();
        this.setInitialExpressionTree();
        this.executeQuery();
    }

    public executeQuery() {
        const sqlQuery = this.transformExpressionTreeToSqlQuery(this.expressionTree);
        this.sqlQuery = format(sqlQuery);
        this.setGridData();
    }

    private setEntities() {
        this.entities = [
            {
                name: 'Categories',
                fields: [
                    { field: 'categoryId', dataType: 'number' },
                    { field: 'description', dataType: 'string' },
                    { field: 'name', dataType: 'string' },
                ]
            }, {
                name: 'Products',
                fields: [
                    { field: 'productId', dataType: 'number' },
                    { field: 'productName', dataType: 'string' },
                    { field: 'supplierId', dataType: 'number' },
                    { field: 'categoryId', dataType: 'number' },
                    { field: 'quantityperUnit', dataType: 'number' },
                    { field: 'unitPrice', dataType: 'number' },
                    { field: 'unitsInStock', dataType: 'number' },
                    { field: 'unitsOnOrder', dataType: 'number' },
                    { field: 'reorderLevel', dataType: 'number' },
                    { field: 'discontinued', dataType: 'boolean' },
                ]
            }, {
                name: 'Suppliers',
                fields: [
                    { field: 'supplierId', dataType: 'number' },
                    { field: 'companyName', dataType: 'string' },
                    { field: 'contactName', dataType: 'string' },
                    { field: 'contactTitle', dataType: 'string' },
                    { field: 'address', dataType: 'string' },
                    { field: 'city', dataType: 'string' },
                    { field: 'region', dataType: 'string' },
                    { field: 'postalCode', dataType: 'string' },
                    { field: 'country', dataType: 'string' },
                    { field: 'phone', dataType: 'string' },
                    { field: 'fax', dataType: 'string' },
                    { field: 'homePage', dataType: 'string' },
                ]
            }
        ];
    }

    private setInitialExpressionTree() {
        const categoriesTree = new FilteringExpressionsTree(0, undefined, 'Categories', ['categoryId', 'name']);
        categoriesTree.filteringOperands.push({
            fieldName: 'name',
            conditionName: IgxStringFilteringOperand.instance().condition('equals').name,
            searchVal: 'Beverages'
        });

        const productsTree = new FilteringExpressionsTree(0, undefined, 'Products', ['supplierId']);
        productsTree.filteringOperands.push({
            fieldName: 'categoryId',
            conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
            searchTree: categoriesTree
        });

        const suppliersTree = new FilteringExpressionsTree(0, undefined, 'Suppliers', ['supplierId', 'companyName', 'contactName', 'contactTitle']);
        suppliersTree.filteringOperands.push({
            fieldName: 'supplierId',
            conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
            searchTree: productsTree
        });

        this.expressionTree = suppliersTree;
    }

    private transformExpressionTreeToSqlQuery(tree: IExpressionTree): string {
        if (!tree) {
            return '';
        }

        const selectFields = tree.returnFields.length > 0 && tree.returnFields.length < this.entities.find(e => e.name === tree.entity).fields.length ?
            `${tree.returnFields.join(',')}` :
            '*';

        const selectClause = `SELECT ${selectFields}`; 
        const fromClause = `FROM ${tree.entity}`;
        const whereClause = this.buildWhereClause(tree);

        return `${selectClause} ${fromClause} ${whereClause}`;
    }

    private buildWhereClause(tree: IExpressionTree): string {
        if (!tree || !tree.filteringOperands || tree.filteringOperands.length === 0) {
            return '';
        }

        let conditions = tree.filteringOperands.map(operand => {
            if (operand instanceof FilteringExpressionsTree) {
                return `(${this.buildWhereClause(operand)})`;
            } else {
                return this.buildCondition(operand);
            }
        });

        const operator = tree.operator === 0 ? 'AND' : 'OR';
        conditions = conditions.filter(cond => cond !== '');
        return conditions.length > 0 ? `WHERE ${conditions.join(` ${operator} `)}` : '';
    }

    private buildCondition(operand: any): string {
        const field = operand.fieldName;
        const value = operand.searchVal;
        const condition = operand.conditionName;

        switch (condition) {
            case 'equals':
                return `${field} = '${value}'`;
            case 'doesNotEqual':
                return `${field} <> '${value}'`;
            case 'contains':
                return `${field} LIKE '%${value}%'`;
            case 'startsWith':
                return `${field} LIKE '${value}%'`;
            case 'endsWith':
                return `${field} LIKE '%${value}'`;
            case 'greaterThan':
                return `${field} > ${value}`;
            case 'lessThan':
                return `${field} < ${value}`;
            case 'greaterThanOrEqualTo':
                return `${field} >= ${value}`;
            case 'lessThanOrEqualTo':
                return `${field} <= ${value}`;
            case 'doesNotContain':
                return `${field} NOT LIKE '%${value}%'`;
            case 'doesNotStartWith':
                return `${field} NOT LIKE '${value}%'`;
            case 'doesNotEndWith':
                return `${field} NOT LIKE '%${value}'`;
            case 'null':
                return `${field} IS NULL`;
            case 'notNull':
                return `${field} IS NOT NULL`;
            case 'empty':
                return `${field} = ''`;
            case 'notEmpty':
                return `${field} <> ''`;
            case 'true':
                return `${field} = true`;
            case 'false':
                return `${field} = false`;
            case 'inQuery':
                return `${field} IN (${this.transformExpressionTreeToSqlQuery(operand.searchTree)})`;
            case 'notInQuery':
                return `${field} NOT IN (${this.transformExpressionTreeToSqlQuery(operand.searchTree)})`;
            case 'before':
                return `${field} < DATEFROMPARTS(${value.getFullYear()}, ${value.getMonth() + 1}, ${value.getDate()})`;
            case 'after':
                return `${field} > DATEFROMPARTS(${value.getFullYear()}, ${value.getMonth() + 1}, ${value.getDate()})`;
            case 'today':
                return `CONVERT(DATE, ${field}) = CONVERT(DATE, GETDATE())`;
            case 'yesterday':
                return `CONVERT(DATE, ${field}) = CONVERT(DATE, DATEADD(DAY, -1, GETDATE()))`;
            case 'thisMonth':
                return `YEAR(${field}) = YEAR(GETDATE()) AND MONTH(${field}) = MONTH(GETDATE())`;
            case 'lastMonth':
                return `${field} BETWEEN DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()) - 1, 0) AND DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()), 0)`;
            case 'nextMonth':
                return `${field} BETWEEN DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()), 0) AND DATEADD(MONTH, DATEDIFF(MONTH, 0, GETDATE()) + 1, 0)`;
            case 'thisYear':
                return `YEAR(${field}) = YEAR(GETDATE())`;
            case 'lastYear':
                return `YEAR(${field}) = YEAR(GETDATE()) - 1`;
            case 'nextYear':
                return `YEAR(${field}) = YEAR(GETDATE()) + 1`;
            default:
                return '';
        }
    }
    
    private setGridData() {
        this.http.post(`${API_ENDPOINT}/QueryBuilder/ExecuteQuery`, this.expressionTree).subscribe(data => {
            this.gridData = Object.values(data)[0] as any[];
        });
    }
}