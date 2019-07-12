import { Component } from "@angular/core";
import { IgxTransactionService, State, Transaction, TransactionType } from "igniteui-angular";
import { IItem, WISHLIST } from "../data";

@Component({
    selector: "transaction-base",
    styleUrls: ["./transaction-base.component.scss"],
    templateUrl: "transaction-base.component.html"
})
export class TransactionBaseComponent {
    public wishlist: IItem[];
    public name: string;
    public price: string;
    public addDisabled: boolean;
    public deleteDisabled: boolean;
    public editDisabled: boolean;

    constructor(public transactions: IgxTransactionService<Transaction, State>) {
        this.wishlist = WISHLIST;
    }

    public onAdd(event): void {
        const item: IItem = { id: 4, name: "Yacht", price: "A lot!" };
        this.transactions.add({ id: 4, type: TransactionType.ADD, newValue: item });

        /** visualization */
        this.addDisabled = true;
        this.name = item.name;
        this.price = item.price;
    }

    public onEdit(event): void {
        const newPrice = "54$";
        this.transactions.add({
            id: 2, type: TransactionType.UPDATE, newValue: { name: "Apple", price: newPrice }
        }, this.wishlist[1]);

        /** visualization */
        this.editDisabled = true;
        this.name = this.wishlist[1].name;
        this.price = newPrice;
    }

    public onDelete(event): void {
        /** visualization */
        this.deleteDisabled = true;
        this.name = this.wishlist[0].name;
        this.price = this.wishlist[0].price;
        /** */

        this.transactions.add({
            id: 1, type: TransactionType.DELETE, newValue: { name: this.name, price: this.price }
        }, this.wishlist[0]);
    }

    public onClear(event): void {
        this.transactions.clear();

        /** visualization */
        this.reset();
    }

    public onCommit(event): void {
        this.transactions.commit(this.wishlist);

        /** visualization */
        this.reset();
    }

    public applyColor(item?: IItem): string {
        const states = this.transactions.getAggregatedChanges(true);
        for (const transaction of states) {
            if (item && transaction.newValue.id === item.id) {
                return this.getColor(transaction);
            }
        }

        return null;
    }

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

    private reset(): void {
        this.name = null;
        this.price = null;
        this.addDisabled = false;
        this.deleteDisabled = false;
        this.editDisabled = false;
    }
}
