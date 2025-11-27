import { Pipe, PipeTransform, inject } from '@angular/core';
import { IgxTransactionService, State, Transaction, TransactionType } from 'igniteui-angular/core';
import { WishlistItem } from '../data';

@Pipe({
    name: 'transactionBasePipe',
    pure: false
})
export class TransactionBasePipe implements PipeTransform {
    transactions = inject<IgxTransactionService<Transaction, State>>(IgxTransactionService);


    public transform(data: WishlistItem[]) {
        // the pipe should NOT operate on the original dataset
        // we create a copy of the original data and then use it for visualization only
        const _data = [...data];
        const pendingStates = this.transactions.getAggregatedChanges(false);

        for (const state of pendingStates) {
            switch (state.type) {
                case TransactionType.ADD:
                    // push the newValue property of the current `ADD` state
                    _data.push(state.newValue);
                    break;
                case TransactionType.DELETE:
                    // pipe doesn't delete items because the demo displays them with a different style
                    // the record will be deleted once the state is committed
                    break;
                case TransactionType.UPDATE:
                    const index = _data.findIndex(x => x.id === state.id);
                    // merge changes with the item into a new object
                    // to avoid modifying the original data item
                    _data[index] = Object.assign({}, _data[index], state.newValue);
                    break;
                default:
                    return _data;
            }
        }

        return _data;
    }
}
