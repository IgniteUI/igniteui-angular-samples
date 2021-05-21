import { INVOICE_DATA } from '../../data/invoiceData';

class GroupByRecord {
    public key: any;
    public groups: GroupByRecord[];
    public records: any[];
}

export class TreeGridGroupingParameters {
    groupColumns: string[];
    groupKey: string;
    primaryKey: string;
    childDataKey: string;
}

export class TreeGridGroupingLoadOnDemandService {
    private parentID;
    private children: any[];

    public getData(parentID: any, groupParameters: TreeGridGroupingParameters, done: (children: any[]) => void) {
        setTimeout(() => {
            this.parentID = parentID;
            this.children = [];
            const groupedData = this.transform(INVOICE_DATA, groupParameters);

            if (this.children.length > 0) {
                done(this.children);
            } else {
                done(groupedData);
            }
        }, 1000);
    }

    private transform(collection: any[], groupingParameters: TreeGridGroupingParameters): any[] {
        if (groupingParameters.groupColumns.length === 0) {
            return collection;
        }

        const result = [];
        const groupedRecords = this.groupByMultiple(collection, groupingParameters.groupColumns);

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

    private groupByMultiple(array: any[], fieldNames: string[], index = 0): GroupByRecord[] {
        const res = this.groupBy(array, fieldNames[index]);

        if (index + 1 < fieldNames.length) {
           for (const groupByRecord of res) {
                groupByRecord.groups = this.groupByMultiple(groupByRecord.records, fieldNames, index + 1);
            }
        }

        return res;
    }

    private groupBy(array: any[], fieldName: string): GroupByRecord[] {
        const map: Map<any, GroupByRecord> = new Map<any, GroupByRecord>();

        for (const record of array) {
            const key = record[fieldName];
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

        return Array.from(map.values());
    }
}
