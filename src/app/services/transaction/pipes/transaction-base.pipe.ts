import { Pipe, PipeTransform } from "@angular/core";
import { IgxTransactionService, State, Transaction, TransactionType } from "igniteui-angular";
import { WishlistItem } from "../data";

@Pipe({
    name: "transactionBasePipe",
    pure: false
})
export class TransactionBasePipe implements PipeTransform {
    // inject the transaction service
    constructor(public transactions: IgxTransactionService<Transaction, State>) { }

    public transform(data: WishlistItem[]) {
        // the pipe should NOT operate on the original dataset
        // we create a copy of the original data and then use it for visualization only
        const _data = [...data];
        const states = this.transactions.getAggregatedChanges(false);
        // iterate over all pending states
        for (const state of states) {
            // depending on the type of state either:
            switch (state.type) {
                case TransactionType.ADD:
                    // push the newValue property of the current ADD state
                    _data.push(state.newValue);
                    break;
                // the pipe should not change the data directly, rathen than
                // it should simply modify it in some way and then return it
                // thus, we do not directly operate on records, we just style them
                // the record will be deleted once the state is committed
                case TransactionType.DELETE:
                    break;
                case TransactionType.UPDATE:
                    const index = _data.findIndex(record => record.id === state.id);
                    // update the value of the record that corresponds to the index
                    _data[index] = Object.assign({}, _data[index], state.newValue);
                    break;
                default:
                    return _data;
            }
        }

        return _data;
    }
}
