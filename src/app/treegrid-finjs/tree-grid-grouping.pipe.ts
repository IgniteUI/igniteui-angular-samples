import { Pipe, PipeTransform } from "@angular/core";

class GroupByRecord {
    public key: any;
    public groups: GroupByRecord[];
    public records: any[];
}

@Pipe({
    name: "treeGridGrouping",
    pure: true
})
export class TreeGridGroupingPipe implements PipeTransform {

    public transform(collection: any[], groupColumns: string[], groupColumnName: string): any[] {
        const result = [];
        groupColumns = ["Category", "Type", "Contract"];
        groupColumnName = "Categories";

        const groupedRecords = this.groupByMultiple(collection, groupColumns);
        this.flattenGrouping(groupedRecords, groupColumnName, "", result);

        return result;
    }

    private flattenGrouping(groupRecords: GroupByRecord[], groupColumnName: string, parentID: any, data: any[]) {
        for (const groupRecord of groupRecords) {
            const change = groupRecord.records.map((r) => r.Change).reduce((ty, u) => ty + u, 0);
            const price = groupRecord.records.map((r) => r.Price).reduce((ty, u) => ty + u, 0);

            const parent = {
                "Change": change,
                "Change(%)": change / (price - change) * 100,
                "Children": [],
                "ID": parentID + groupRecord.key,
                "Price": price
            };
            parent[groupColumnName] = groupRecord.key;
            data.push(parent);

            if (groupRecord.groups) {
                this.flattenGrouping(groupRecord.groups, groupColumnName, parent.ID, parent.Children);
            } else {
                parent.Children = groupRecord.records;
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
