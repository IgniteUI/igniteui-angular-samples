import { InMemoryDbService, RequestInfo, ResponseOptions, STATUS, getStatusText } from 'angular-in-memory-web-api';
import { FinancialData } from './financialData';
import { BehaviorSubject, Observable } from "rxjs/Rx";

export class MockDataService implements InMemoryDbService {
    private _records: any[];
    createDb() {
        let financialData: FinancialData, financial;
        financialData = new FinancialData();
        this._records = financialData.generateData(1000);
        financial = this._records;
        return {financial};
    }
    get(reqInfo: RequestInfo) {
        let records = this._records;
        return reqInfo.utils.createResponse$(() => {
            let skip, top;
            skip = reqInfo.query.get("$skip");
            top = reqInfo.query.get("$top");
            if (skip && skip.length && skip.length === 1) {
                skip = parseInt(skip[0]);
            }
            if (top && top.length && top.length === 1) {
                top = parseInt(top[0]);
            }
            const data = { value: records.slice(skip, skip + top), count: records.length };

            const options: ResponseOptions =
                {
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