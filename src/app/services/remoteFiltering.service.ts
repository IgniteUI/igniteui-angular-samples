/* eslint-disable id-blacklist */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilteringLogic, IForOfState, SortingDirection, FilteringExpressionsTree, IFilteringExpression, IFilteringExpressionsTree } from 'igniteui-angular';
import { BehaviorSubject, Observable } from 'rxjs';

const DATA_URL = 'https://services.odata.org/V4/Northwind/Northwind.svc/';
const EMPTY_STRING = '';
const NULL_VALUE = null;
// eslint-disable-next-line no-shadow
export enum FILTER_OPERATION {
    CONTAINS = 'contains',
    STARTS_WITH = 'startswith',
    ENDS_WITH = 'endswith',
    EQUALS = 'eq',
    DOES_NOT_EQUAL = 'ne',
    DOES_NOT_CONTAIN = 'not contains',
    GREATER_THAN = 'gt',
    LESS_THAN = 'lt',
    LESS_THAN_EQUAL = 'le',
    GREATER_THAN_EQUAL = 'ge'
}

@Injectable()
export class RemoteFilteringService {
    public entity = 'Products';

    public remoteData: Observable<any[]>;
    private _remoteData: BehaviorSubject<any[]>;

    constructor(private _http: HttpClient) {
        this._remoteData = new BehaviorSubject([]);
        this.remoteData = this._remoteData.asObservable();
    }

    public getData(
        virtualizationArgs?: IForOfState,
        filteringArgs?: any,
        sortingArgs?: any, cb?: (any) => void): any {
        return this._http.get(this.buildDataUrl(
            virtualizationArgs, filteringArgs, sortingArgs)).subscribe((data: any) => {
                this._remoteData.next(data.value);
                if (cb) {
                    cb(data);
                }
            });
    }

    private buildDataUrl(virtualizationArgs: any, filteringArgs: any, sortingArgs: any): string {
        let baseQueryString = `${DATA_URL}${this.entity}?$count=true`;
        let scrollingQuery = EMPTY_STRING;
        let orderQuery = EMPTY_STRING;
        let filterQuery = EMPTY_STRING;
        let query = EMPTY_STRING;
        let filter = EMPTY_STRING;

        if (sortingArgs) {
            orderQuery = this._buildSortExpression(sortingArgs);
        }

        if (filteringArgs instanceof FilteringExpressionsTree) {
            filterQuery = `$filter=${this._buildAdvancedFilterExpression(filteringArgs)}`;
        } else if (filteringArgs?.length > 0) {
            filteringArgs.forEach((columnFilter) => {
                if (filter !== EMPTY_STRING) {
                    filter += ` ${FilteringLogic[columnFilter.operator].toLowerCase()} `;
                }

                filter += this._buildFilterExpression(
                    columnFilter.filteringOperands,
                    columnFilter.operator);
            });

            filterQuery = `$filter=${filter}`;
        }

        if (virtualizationArgs) {
            scrollingQuery = this._buildScrollExpression(virtualizationArgs);
        }

        query += (orderQuery !== EMPTY_STRING) ? `&${orderQuery}` : EMPTY_STRING;
        query += (filterQuery !== EMPTY_STRING) ? `&${filterQuery}` : EMPTY_STRING;
        query += (scrollingQuery !== EMPTY_STRING) ? `&${scrollingQuery}` : EMPTY_STRING;

        baseQueryString += query;

        return baseQueryString;
    }

    private _buildFilterExpression(operands, operator): string {
        let filterExpression = EMPTY_STRING;
        operands.forEach((operand, index) => {
            if (operand instanceof FilteringExpressionsTree) {
                if (index > 0) {
                  filterExpression += ` ${FilteringLogic[operator].toLowerCase()} `;
                }
                filterExpression += this._buildFilterExpression(
                  operand.filteringOperands,
                  operand.operator
                );
                return filterExpression;
            }
            let filterString;

            if (filterExpression !== EMPTY_STRING) {
                filterExpression += ` ${FilteringLogic[operator].toLowerCase()} `;
            }

            filterString = this._oDataOperandMapper(operand);

            filterExpression += filterString;
        });

        return filterExpression;
    }

    private _buildAdvancedFilterExpression(filter: IFilteringExpressionsTree): string {
        const operands = filter.filteringOperands;
        let builder: string = '';
        operands.forEach((operand) => {
            if (operand instanceof FilteringExpressionsTree) {
                builder += `${builder.length ? FilteringLogic[filter.operator].toLowerCase() : ''} (${this._buildAdvancedFilterExpression(operand)})`;
            } else {
                if (builder !== EMPTY_STRING) {
                    builder += ` ${FilteringLogic[filter.operator].toLowerCase()} `;
                }

                builder += this._oDataOperandMapper(operand as IFilteringExpression);
            }
        });

        return builder;
    }

    private _buildSortExpression(sortingArgs): string {
        let sortingDirection: string;
        switch (sortingArgs.dir) {
            case SortingDirection.None: {
                sortingDirection = EMPTY_STRING;
                break;
            }
            default: {
                sortingDirection = SortingDirection[sortingArgs.dir].toLowerCase();
                break;
            }
        }

        return `$orderby=${sortingArgs.fieldName} ${sortingDirection}`;
    }

    private _buildScrollExpression(virtualizationArgs): string {
        let requiredChunkSize: number;
        const skip = virtualizationArgs.startIndex;
        // eslint-disable-next-line prefer-const
        requiredChunkSize = virtualizationArgs.chunkSize === 0 ? 11 : virtualizationArgs.chunkSize;
        const top = requiredChunkSize;

        return `$skip=${skip}&$top=${top}`;
    }

    private _oDataOperandMapper(operand: IFilteringExpression): string {
        const value = (operand as IFilteringExpression).searchVal;
        const isNumberValue = (typeof (value) === 'number' || value instanceof Date) ? true : false;
        const filterValue = (isNumberValue) ? value : `'${value}'`;
        const fieldName = operand.fieldName;
        switch ((operand as IFilteringExpression).condition.name) {
            case 'contains': return `${FILTER_OPERATION.CONTAINS}(${fieldName}, ${filterValue})`;
            case 'startsWith': return `${FILTER_OPERATION.STARTS_WITH}(${fieldName},${filterValue})`;
            case 'endsWith': return`${FILTER_OPERATION.ENDS_WITH}(${fieldName},${filterValue})`;
            case 'equals': return`${fieldName} ${FILTER_OPERATION.EQUALS} ${filterValue} `;
            case 'doesNotEqual': return`${fieldName} ${FILTER_OPERATION.DOES_NOT_EQUAL} ${filterValue} `;
            case 'doesNotContain': return`${FILTER_OPERATION.DOES_NOT_CONTAIN}(${fieldName},${filterValue})`;
            case 'greaterThan': return`${fieldName} ${FILTER_OPERATION.GREATER_THAN} ${filterValue} `;
            case 'greaterThanOrEqualTo': return`${fieldName} ${FILTER_OPERATION.GREATER_THAN_EQUAL} ${filterValue} `;
            case 'lessThan': return`${fieldName} ${FILTER_OPERATION.LESS_THAN} ${filterValue} `;
            case 'lessThanOrEqualTo': return`${fieldName} ${FILTER_OPERATION.LESS_THAN_EQUAL} ${filterValue} `;
            case 'empty': return`length(${fieldName}) ${FILTER_OPERATION.EQUALS} 0`;
            case 'notEmpty': return`length(${fieldName}) ${FILTER_OPERATION.GREATER_THAN} 0`;
            case 'null': return`${fieldName} ${FILTER_OPERATION.EQUALS} ${NULL_VALUE}`;
            case 'notNull': return`${fieldName} ${FILTER_OPERATION.DOES_NOT_EQUAL} ${NULL_VALUE}`;
            case 'before': return`${fieldName} ${FILTER_OPERATION.LESS_THAN} ${(filterValue as Date).toISOString()} `;
            case 'after': return`${fieldName} ${FILTER_OPERATION.GREATER_THAN} ${(filterValue as Date).toISOString()} `;
            case 'today': {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const tomorrow = new Date().setDate(today.getDate() + 1);
                return`(${fieldName} ${FILTER_OPERATION.GREATER_THAN_EQUAL} ${today} and ${fieldName} ${FILTER_OPERATION.LESS_THAN} ${tomorrow}) `;
            }
            case 'yesterday': {
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const yesterday = new Date().setDate(today.getDate() - 1);
                return`(${fieldName} ${FILTER_OPERATION.GREATER_THAN_EQUAL} ${yesterday} and ${fieldName} ${FILTER_OPERATION.LESS_THAN} ${today}) `;
            }
            case 'thisMonth': {
                const today = new Date();
                return`(year(${fieldName}) ${FILTER_OPERATION.EQUALS} ${today.getFullYear()} and month(${fieldName}) ${FILTER_OPERATION.EQUALS} ${today.getMonth() + 1}) `;
            }
            case 'lastMonth': {
                const today = new Date();
                const month = (today.getMonth() ? today.getMonth() - 1 : 11) + 1;
                const year = today.getMonth() ? today.getFullYear() : today.getFullYear() - 1;
                return`(year(${fieldName}) ${FILTER_OPERATION.EQUALS} ${year} and month(${fieldName}) ${FILTER_OPERATION.EQUALS} ${month}) `;
            }
            case 'nextMonth': {
                const today = new Date();
                const month = (today.getMonth() < 11 ? today.getMonth() + 1 : 0) + 1;
                const year = today.getMonth() < 11 ? today.getFullYear() : today.getFullYear() + 1;
                return`(year(${fieldName}) ${FILTER_OPERATION.EQUALS} ${year} and month(${fieldName}) ${FILTER_OPERATION.EQUALS} ${month}) `;
            }
            case 'thisYear': {
                const today = new Date();
                return`year(${fieldName}) ${FILTER_OPERATION.EQUALS} ${today.getFullYear()} `;
            }
            case 'lastYear': { 
                const today = new Date();
                return`year(${fieldName}) ${FILTER_OPERATION.EQUALS} ${today.getFullYear() - 1} `;
            }
            case 'nextYear': { 
                const today = new Date();
                return`year(${fieldName}) ${FILTER_OPERATION.EQUALS} ${today.getFullYear() + 1} `;
            }
        }
    }
}
