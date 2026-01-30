import { HttpClient } from '@angular/common/http';
import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild, inject } from '@angular/core';
import { EntityType, FilteringExpressionsTree, IExpressionTree, IgxNumberFilteringOperand, IgxStringFilteringOperand } from 'igniteui-angular/core';
import { IgxColumnComponent } from 'igniteui-angular/grids/core';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { IgxQueryBuilderComponent } from 'igniteui-angular/query-builder';
import { format } from 'sql-formatter';

const API_ENDPOINT = 'https://data-northwind.indigo.design';

@Component({
    selector: 'app-query-builder-sql-sample',
    styleUrls: ['./query-builder-sql-sample.component.scss'],
    templateUrl: 'query-builder-sql-sample.component.html',
    imports: [IgxQueryBuilderComponent, IgxGridComponent, IgxColumnComponent]
})
export class QueryBuilderSqlSampleComponent implements OnInit, AfterViewInit {
    private http = inject(HttpClient);
    private cdr = inject(ChangeDetectorRef);

    @ViewChild('grid', { static: true })
    public grid: IgxGridComponent;

    public data: any[] = [];
    public entities: EntityType[] = [];
    public expressionTree: IExpressionTree;
    public sqlQuery: string = 'SQL Query will be displayed here';

    public ngOnInit(): void {
        this.setEntities();
        this.setInitialExpressionTree();
    }

    public ngAfterViewInit(): void {
        this.onChange();
    }

    private setEntities() {
        this.entities = [
            {
                name: 'Categories',
                fields: [
                    { field: 'categoryId', dataType: 'number' },
                    { field: 'description', dataType: 'string' },
                    { field: 'name', dataType: 'string' }
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
                    { field: 'discontinued', dataType: 'boolean' }
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
                    { field: 'homePage', dataType: 'string' }
                ]
            }
        ];
    }

    private setInitialExpressionTree() {
        const categoriesTree = new FilteringExpressionsTree(0, undefined, 'Categories', ['categoryId']);
        categoriesTree.filteringOperands.push({
            fieldName: 'name',
            ignoreCase: false,
            conditionName: IgxStringFilteringOperand.instance().condition('equals').name,
            searchVal: 'Beverages'
        });

        const productsTree = new FilteringExpressionsTree(0, undefined, 'Products', ['supplierId']);
        productsTree.filteringOperands.push({
            fieldName: 'categoryId',
            ignoreCase: false,
            conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
            searchTree: categoriesTree
        });

        const suppliersTree = new FilteringExpressionsTree(0, undefined, 'Suppliers', ['supplierId', 'companyName', 'contactName', 'contactTitle']);
        suppliersTree.filteringOperands.push({
            fieldName: 'supplierId',
            conditionName: IgxStringFilteringOperand.instance().condition('inQuery').name,
            ignoreCase: false,
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
            case 'greaterThan':
                return `${field} > ${value}`;
            case 'lessThan':
                return `${field} < ${value}`;
            case 'greaterThanOrEqualTo':
                return `${field} >= ${value}`;
            case 'lessThanOrEqualTo':
                return `${field} <= ${value}`;
            case 'contains':
                return `${field} LIKE '%${value}%'`;
            case 'doesNotContain':
                return `${field} NOT LIKE '%${value}%'`;
            case 'startsWith':
                return `${field} LIKE '${value}%'`;
            case 'endsWith':
                return `${field} LIKE '%${value}'`;
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
            default:
                console.error(`Condition ${condition} is not implemented`);
                break;
        }
    }
    
    public onChange() {
        const sqlQuery = this.transformExpressionTreeToSqlQuery(this.expressionTree);
        this.sqlQuery = format(sqlQuery);
        this.cdr.detectChanges();

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