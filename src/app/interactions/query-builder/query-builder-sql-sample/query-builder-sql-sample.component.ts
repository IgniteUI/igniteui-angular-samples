import { Component, OnInit, ViewChild } from '@angular/core';
import { EntityType, FilteringExpressionsTree, IExpressionTree, IgxQueryBuilderComponent } from 'igniteui-angular';
import { RemoteLoDService } from '../../../services/remote-lod.service';

@Component({
    providers: [RemoteLoDService],
    selector: 'app-query-builder-sql-sample',
    styleUrls: ['./query-builder-sql-sample.component.scss'],
    templateUrl: 'query-builder-sql-sample.component.html',
    imports: [IgxQueryBuilderComponent]
})
export class QueryBuilderSqlSampleComponent implements OnInit {
    @ViewChild('queryBuilder', { static: true })
    public queryBuilder: IgxQueryBuilderComponent;

    public entities: EntityType[] = [];
    public expressionTree: IExpressionTree;
    public sqlQuery: string = 'Select an entity and build your query';

    private dataTypeMap = {
        'Edm.String': 'string',
        'Edm.Int16': 'number',
        'Edm.Int32': 'number',
        'Edm.Int64': 'number',
        'Edm.Decimal': 'number',
        'Edm.Double': 'number',
        'Edm.Single': 'number',
        'Edm.Boolean': 'boolean',
        'Edm.DateTimeOffset': 'date',
        'Edm.Guid': 'string'
    };
    
    constructor(private remoteService: RemoteLoDService) { }

    public ngOnInit(): void {
        console.log('Query Builder SQL Sample');

        const entities = [];
        this.remoteService.getMetadata().subscribe({
            next: (data) => {
                const schema = data['edmx:Edmx']['edmx:DataServices']['Schema'];
                const entityTypes = schema[0]['EntityType'];
                const entitySets = schema[1]['EntityContainer']['EntitySet'];
                entityTypes.forEach((entityType) => {
                    const entityName = entityType['$'].Name;
                    const fields = entityType['Property'].map((prop) => {
                        return {
                            field: prop['$'].Name,
                            dataType: this.dataTypeMap[prop['$'].Type]
                        }
                    });
                    const entityMatch = entitySets.find((entitySet) => entitySet['$'].EntityType === 'NorthwindModel.' + entityName);

                    const entity = {
                        name: entityMatch['$'].Name,
                        fields: fields
                    }
                    entities.push(entity);
                });
            },
            error: err => {
                console.log(err);
            },
            complete: () => {
                this.entities = entities;
            }
        });
    }

    public handleExpressionTreeChange(event: IExpressionTree) {
        this.sqlQuery = this.transformExpressionTreeToSQL(this.queryBuilder.expressionTree);
    }

    private transformExpressionTreeToSQL(tree: any): string {
        if (!tree) {
            return '';
        }

        const selectClause = `SELECT \n    ${tree.returnFields.length > 0 ? tree.returnFields.join('\n    ') : '*'} `; 
        const fromClause = `FROM ${tree.entity}`;
        const whereClause = this.buildWhereClause(tree);

        return `\n${selectClause}\n${fromClause}${whereClause ? '\n' + whereClause : ''}\n`;
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

        const operator = tree.operator === 0 ? 'AND' : 'OR'; // 0 for AND, 1 for OR
        conditions = conditions.filter(cond => cond !== '');
        return conditions.length > 0 ? `WHERE ${conditions.join(` ${operator} `)}` : '';
    }

    private buildCondition(operand: any): string {
        const field = operand.fieldName;
        const value = operand.searchVal;
        const condition = operand.condition.name;

        // TODO: add missing conditions
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
                return `${field} IN (${this.transformExpressionTreeToSQL(operand.searchTree)})`;
            case 'notInQuery':
                return `${field} NOT IN (${this.transformExpressionTreeToSQL(operand.searchTree)})`;
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
}