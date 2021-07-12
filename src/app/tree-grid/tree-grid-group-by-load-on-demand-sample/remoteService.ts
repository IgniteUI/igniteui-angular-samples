import { DataUtil, IGroupingExpression, IgxSorting, ISortingExpression } from 'igniteui-angular';
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
    childDataKey: string;
}

export class TreeGridGroupingLoadOnDemandService {
    private parentID;
    private children: any[];

    public getData(parentID: any, groupingParameters: TreeGridGroupingParameters, done: (children: any[]) => void) {
        setTimeout(() => {
            this.parentID = parentID;
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
            groupingParameters.childDataKey,
            '',
            result);

        return result;
    }

    private flattenGrouping(groupRecords: GroupByRecord[],
                            groupKey: string,
                            primaryKey: string,
                            childDataKey: string,
                            parentID: any,
                            data: any[]) {
        for (const groupRecord of groupRecords) {
            const parent = {};
            const children = groupRecord.records;

            parent[primaryKey] = (parentID ? `${parentID}-` : '') + groupRecord.key;
            parent[childDataKey] = [];
            parent['ParentID'] = parentID;
            parent[groupKey] = groupRecord.key + ` (${groupRecord.records.length})`;
            parent['hasChildren'] = true;
            children.forEach((c) => c.ParentID = parent[primaryKey]);

            data.push(parent);

            if (parent[primaryKey] === this.parentID) {
                if (groupRecord.groups) {
                    this.flattenGrouping(groupRecord.groups, groupKey, primaryKey, childDataKey,
                        parent[primaryKey], this.children);
                } else {
                    children.forEach((c) => c.hasChildren = false);
                    this.children = children;
                }

                break;
            }

            if (this.parentID && !parent[primaryKey].startsWith(this.parentID)) {
                if (groupRecord.groups) {
                    this.flattenGrouping(groupRecord.groups, groupKey, primaryKey, childDataKey,
                        parent[primaryKey], parent[childDataKey]);
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
