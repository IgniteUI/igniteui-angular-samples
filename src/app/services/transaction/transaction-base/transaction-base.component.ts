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
    public addDisabled;
    public deleteDisabled;

    constructor(public transactions: IgxTransactionService<Transaction, State>) {
        this.wishlist = WISHLIST;
    }

    public onAdd(event): void {
        const person: IItem = { name: "Yacht", price: "A lot!" };
        this.transactions.add({ id: 2, type: TransactionType.ADD, newValue: person });

        /** visualization */
        this.addDisabled = true;
        this.name = person.name;
        this.price = person.price;
    }

    public onEdit(event): void {
        const newPrice = "54$";
        this.transactions.add({
            id: 3, type: TransactionType.UPDATE, newValue: { name: "Apple", price: newPrice }
        }, this.wishlist[1]);

        /** visualization */
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

    public getColor(transaction: Transaction) {
        switch (transaction.type) {
            case TransactionType.ADD:
                return "green";
            case TransactionType.DELETE:
                return "red";
            case TransactionType.UPDATE:
                return "blue";
        }
    }

    private reset() {
        this.name = null;
        this.price = null;
        this.addDisabled = false;
        this.deleteDisabled = false;
    }
}
