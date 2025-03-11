import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { EntityType, FilteringExpressionsTree, IExpressionTree, IgxGridComponent, IgxQueryBuilderComponent } from 'igniteui-angular';
import { initDbQuery } from './data-query';
import { format } from 'sql-formatter';
import initSqlJs from 'sql.js';

@Component({
    selector: 'app-query-builder-sql-sample',
    styleUrls: ['./query-builder-sql-sample.component.scss'],
    templateUrl: 'query-builder-sql-sample.component.html',
    imports: [IgxQueryBuilderComponent, IgxGridComponent]
})
export class QueryBuilderSqlSampleComponent implements OnInit, OnDestroy {
    @ViewChild('queryBuilder', { static: true })
    public queryBuilder: IgxQueryBuilderComponent;

    @ViewChild('grid', { static: true })
    public grid: IgxGridComponent;

    public gridData = [];
    public entities: EntityType[] = [];
    public expressionTree: IExpressionTree;
    public sqlQuery: string = 'SQL Query will be displayed here';

    private db: any;
    private sqlQueryResult: any;

    private sqlDataTypeMap = {
        'smallint': 'number',
        'integer': 'number',
        'bigint': 'number',
        'decimal': 'number',
        'numeric': 'number',
        'real': 'number',
        'date': 'date',
        'time': 'time',
        'timestamp': 'datetime'
    }

    public ngOnInit(): void {
        this.initializeDbAndEntities();
    }

    public ngOnDestroy(): void {
        this.db.close();
    }

    private async initializeDbAndEntities() {
        const SQL = await initSqlJs({
            locateFile: file => `https://sql.js.org/dist/${file}`
        });
          
        // create a database
        this.db = new SQL.Database();

        // create tables and insert data
        this.db.run(initDbQuery);

        
        // get table names with fields and field types
        const tables = this.db.exec("SELECT name FROM sqlite_master WHERE type='table'");

        // get fields for each table
        const tableFields = tables[0].values.map(table => {
            const tableName = table[0];
            const fieldsResult = this.db.exec(`PRAGMA table_info(${tableName})`);
            const fields = fieldsResult[0].values.map(field => {
                return {
                    name: field[1],
                    type: field[2]
                };
            });
            return {
                tableName: tableName,
                fields: fields
            }
        });

        // transform tables to entities
        const entities = [];
        tableFields.forEach(table => {
            const fields = table.fields.map(field => {
                return {
                    field: field.name,
                    dataType: this.sqlDataTypeMap[field.type.toLowerCase()] ?? 'string'
                }
            });
            entities.push({
                name: table.tableName,
                fields: fields
            });
        });

        this.entities = entities;
    }

    public handleExpressionTreeChange(event: IExpressionTree) {
        const sqlQuery = this.transformExpressionTreeToSqlQuery(this.queryBuilder.expressionTree);
        this.sqlQuery = format(sqlQuery);
        this.sqlQueryResult = this.db.exec(this.sqlQuery);
        this.setGridData();
    }

    private transformExpressionTreeToSqlQuery(tree: any): string {
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
        const condition = operand.condition.name;

        switch (condition) {
            case 'equals':
                return `${field} = '${value}'`;
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
            case 'doesNotEqual':
                return `${field} <> ${value}`;
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
        const rows = this.sqlQueryResult[0].values;
        const columns = this.sqlQueryResult[0].columns;
        
        const gridData = rows.map(row => {
            const data = {};
            columns.forEach((column, index) => {
                data[column] = row[index];
            });
            return data;
        });

        this.gridData = gridData;
    }
}