import { getStatusText, InMemoryDbService, RequestInfo, ResponseOptions, STATUS } from "angular-in-memory-web-api";
import { FinancialData } from "./financialData";

export class MockDataService implements InMemoryDbService {
    private _records: any[];
    public createDb() {
        let financialData: FinancialData;
        let financial;
        financialData = new FinancialData();
        this._records = financialData.generateData(1000);
        financial = this._records;
        return {financial};
    }
    public get(reqInfo: RequestInfo) {
        const records = this._records;
        return reqInfo.utils.createResponse$(() => {
            let skip;
            let top;
            skip = reqInfo.query.get("$skip");
            top = reqInfo.query.get("$top");
            if (skip && skip.length && skip.length === 1) {
                skip = parseInt(skip[0], 10);
            }
            if (top && top.length && top.length === 1) {
                top = parseInt(top[0], 10);
            }
            const data = { value: records.slice(skip, skip + top), count: records.length };

            const options: ResponseOptions = {
                body: data,
                status: STATUS.OK
            };
            options.statusText = getStatusText(options.status);
            options.headers = reqInfo.headers;
            options.url = reqInfo.url;
            return options;
        });
    }
}
