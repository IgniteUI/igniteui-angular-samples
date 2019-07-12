import { Pipe, PipeTransform } from "@angular/core";
import { IgxTransactionService, State, Transaction, TransactionType } from "igniteui-angular";
import { IItem } from "../data";

@Pipe({
    name: "transactionBasePipe",
    pure: false
})
export class TransactionBasePipe implements PipeTransform {
    constructor(public transactions: IgxTransactionService<Transaction, State>) { }

    public transform(data: IItem[]) {
        const _data = [...data];
        const states = this.transactions.getAggregatedChanges(false);
        for (const state of states) {
            switch (state.type) {
                case TransactionType.ADD:
                    _data.push(state.newValue);
                    break;
                // we do not directly operate on records, we just style them
                // it will be deleted once it's committed
                case TransactionType.DELETE:
                    break;
                case TransactionType.UPDATE:
                    const record = _data.find(r => r.id === state.id);
                    Object.assign(record, state.newValue);
                    break;
            }
        }

        return _data;
    }
}
