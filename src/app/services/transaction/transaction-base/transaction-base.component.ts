import { Component } from "@angular/core";
import { IgxTransactionService, State, Transaction, TransactionType } from "igniteui-angular";
import { WISHLIST, WishlistItem } from "../data";

@Component({
    selector: "transaction-base",
    styleUrls: ["./transaction-base.component.scss"],
    templateUrl: "transaction-base.component.html"
})
export class TransactionBaseComponent {
    public wishlist: WishlistItem[];
    public addDisabled: boolean;
    public deleteDisabled: boolean;
    public editDisabled: boolean;

    // inect the transaction service
    constructor(public transactions: IgxTransactionService<Transaction, State>) {
        this.wishlist = WISHLIST;
    }

    /*
     * For each type of action that we want to perform we can add different types of transactions.
     * The below methods - onAdd, onEdit, onDelete demonstrate the different types of transactions
     * and what kind of data we normally pass to each of them.
     *
     * Each transaction needs to have id, type and a newValue properties.
     * ADD and DELETE transactions should have unique IDs.
     * There can be multiple UPDATE transactions with the same ID,
     * since there can be multiple consecutive changes on a single element.
    */

    /**
     * Create an 'ADD' transaction.
     */
    public onAdd(event): void {
        // the item that will be added, it could be anything
        // it is a good idea for it to have a unique 'id' property
        // this would allow you to find it more easily
        const item: WishlistItem = { id: 4, name: "Yacht", price: "A lot!" };
        this.transactions.add({ id: 4, type: TransactionType.ADD, newValue: item });

        /** visualization */
        this.addDisabled = true;
    }

    /**
     * Create an 'UPDATE' transaction.
     */
    public onEdit(event): void {
        const newPrice = "999$";
        this.transactions.add({
            id: this.wishlist[1].id,
            type: TransactionType.UPDATE,
            newValue: { price: newPrice }
        },
            this.wishlist[1]);

        /** visualization */
        this.editDisabled = true;
    }

    /**
     * Create a 'DELETE' transaction.
     */
    public onDelete(event): void {
        this.transactions.add({
            id: this.wishlist[0].id,
            type: TransactionType.DELETE,
            newValue: null
        },
            this.wishlist[0]);

        /** visualization */
        this.deleteDisabled = true;
    }

    /**
     * Clear all pending transactions.
     */
    public onClear(event): void {
        /** visualization  */
        if (this.transactions.getTransactionLog().length !== 0) {
            this.reset();
        }
        /** */

        this.transactions.clear();
    }

    /**
     * Commit all pending transactions.
     */
    public onCommit(event): void {
        // the commit function expects the dataset as its parameter
        this.transactions.commit(this.wishlist);
    }

    /*
     * The below methos are used for visualization purposes.
     */

    /**
     * Apply a color to a specific item.
     */
    public applyColor(item?: WishlistItem): string {
        // get all pending transactions
        const states = this.transactions.getAggregatedChanges(true);
        if (states.length === 0) {
            return null;
        }
        // iterate over the pending transactions
        for (const transaction of states) {
            if (transaction.newValue.id === item.id) {
                // get the color that corresponds to the transaction's type
                return this.getColor(transaction);
            }
        }

        return null;
    }

    /**
     * Map the items in the transaction log with the items in the wishlist.
     */
    public getTransactionLog() {
        return this.transactions.getTransactionLog().map(transaction => {
            const item = this.wishlist.find(i => i.id === transaction.id);
            return Object.assign({ type: transaction.type }, item, transaction.newValue);
        });
    }

    /**
     * Depending on the type of transaction return a color.
     */
    public getColor(transaction: Transaction): string {
        switch (transaction.type) {
            case TransactionType.ADD:
                return "green";
            case TransactionType.DELETE:
                return "red";
            case TransactionType.UPDATE:
                return "blue";
            default:
                return null;
        }
    }

    /**
     * Depending on the type of transaction return a material-based icon.
     */
    public setIcon(transaction: Transaction): string {
        switch (transaction.type) {
            case TransactionType.ADD:
                return "check";
            case TransactionType.DELETE:
                return "delete";
            case TransactionType.UPDATE:
                return "edit";
            default:
                return null;
        }
    }

    /**
     * Reset all local parameters.
     */
    private reset(): void {
        this.addDisabled = false;
        this.deleteDisabled = false;
        this.editDisabled = false;
    }
}
