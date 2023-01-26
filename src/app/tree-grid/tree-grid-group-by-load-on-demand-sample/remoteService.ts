import { DataUtil, IGroupingExpression, IgxSorting, ISortingExpression } from '@infragistics/igniteui-angular';
import { INVOICE_DATA } from '../../data/invoiceData';

class GroupByRecord {
    public key: any;
    public groups: GroupByRecord[];
    public records: any[];
}

export class TreeGridGroupingParameters {
    groupingExpressions: IGroupingExpression[];
    groupKey: string;
    primaryKey: string;
    foreignKey: string;
}

export class TreeGridGroupingLoadOnDemandService {
    private parentID;
    private children: any[];
    private hasChildrenKey: string;

    public getData(parentID: any, hasChildrenKey, groupingParameters: TreeGridGroupingParameters, done: (children: any[]) => void) {
        setTimeout(() => {
            this.parentID = parentID;
            this.hasChildrenKey = hasChildrenKey;
            this.children = [];
            const groupedData = this.transform(INVOICE_DATA, groupingParameters);

            if (this.children.length > 0) {
                done(this.children);
            } else {
                done(groupedData);
            }
        }, 1000);
    }

    private transform(collection: any[], groupingParameters: TreeGridGroupingParameters): any[] {
        const groupingExpressions = groupingParameters.groupingExpressions;
        if (groupingExpressions.length === 0) {
            return collection;
        }

        const result = [];
        const groupedRecords = this.groupByMultiple(collection, groupingExpressions);

        this.flattenGrouping(
            groupedRecords,
            groupingParameters.groupKey,
            groupingParameters.primaryKey,
            groupingParameters.foreignKey,
            '',
            result);

        return result;
    }

    private flattenGrouping(groupRecords: GroupByRecord[],
                            groupKey: string,
                            primaryKey: string,
                            foreignKey: string,
                            parentID: any,
                            data: any[]) {
        for (const groupRecord of groupRecords) {
            const parent = {};
            const children = groupRecord.records;

            parent[primaryKey] = (parentID ? `${parentID}-` : '') + groupRecord.key;
            parent[foreignKey] = [];
            parent[groupKey] = groupRecord.key + ` (${groupRecord.records.length})`;
            parent[this.hasChildrenKey] = true;
            children.forEach((c) => c[foreignKey] = parent[primaryKey]);

            data.push(parent);

            if (parent[primaryKey] === this.parentID) {
                if (groupRecord.groups) {
                    this.flattenGrouping(groupRecord.groups, groupKey, primaryKey, foreignKey,
                        parent[primaryKey], this.children);
                } else {
                    children.forEach((c) => c.hasChildren = false);
                    this.children = children;
                }

                break;
            }

            if (this.parentID && !parent[primaryKey].startsWith(this.parentID)) {
                if (groupRecord.groups) {
                    this.flattenGrouping(groupRecord.groups, groupKey, primaryKey, foreignKey,
                        parent[primaryKey], [parent[foreignKey]]);
                }
            }
        }
    }

    private groupByMultiple(array: any[], groupingExpressions: IGroupingExpression[], index = 0): GroupByRecord[] {
        const res = this.groupBy(array, groupingExpressions[index]);

        if (index + 1 < groupingExpressions.length) {
           for (const groupByRecord of res) {
                groupByRecord.groups = this.groupByMultiple(groupByRecord.records, groupingExpressions, index + 1);
            }
        }

        return res;
    }

    private groupBy(array: any[], groupingExpression: IGroupingExpression): GroupByRecord[] {
        const map: Map<any, GroupByRecord> = new Map<any, GroupByRecord>();

        for (const record of array) {
            const key = record[groupingExpression.fieldName];
            let groupByRecord: GroupByRecord;

            if (map.has(key)) {
                groupByRecord = map.get(key);
            } else {
                groupByRecord = new GroupByRecord();
                groupByRecord.key = key;
                groupByRecord.records = [];
                map.set(key, groupByRecord);
            }

            groupByRecord.records.push(record);
        }

        const unsortedData = Array.from(map.values());
        const sortExpression: ISortingExpression = {
            fieldName: 'key',
            dir: groupingExpression.dir,
            ignoreCase: groupingExpression.ignoreCase,
            strategy: groupingExpression.strategy
        };
        const sortedData = DataUtil.sort(unsortedData, [sortExpression], new IgxSorting());

        return sortedData;
    }
}
