import { Component, ViewChild } from "@angular/core";
import { IgxButtonDirective, IgxTransactionService, State, Transaction, TransactionType } from "igniteui-angular";
import { IPerson, PEOPLE } from "../data";

@Component({
    selector: "transaction-base",
    styleUrls: ["./transaction-base.component.scss"],
    templateUrl: "transaction-base.component.html"
})

export class TransactionBaseComponent {
    @ViewChild("add", { static: false })
    public add: IgxButtonDirective;

    public people: IPerson[];
    public name: string;
    public age: number;

    constructor(private _transactions: IgxTransactionService<Transaction, State>) {
        this.people = PEOPLE;
    }

    public onAdd(event): void {
        this.add.disabled = true;
        const person: IPerson = { name: "Sile", age: 42 };
        this._transactions.add({ id: 2, type: TransactionType.ADD, newValue: person });

        /** visualization */
        this.name = person.name;
        this.age = person.age;
    }

    public onEdit(event): void {
        const newAge = 54;
        this._transactions.add({ id: 3, type: TransactionType.UPDATE, newValue: { age: newAge } }, this.people[1]);

        /** visualization */
        this.name = this.people[1].name;
        this.age = newAge;
    }

    public onDelete(event): void {
        /** visualization */
        this.name = this.people[0].name;
        this.age = this.people[0].age;
        /** */

        this._transactions.add(
            { id: 1, type: TransactionType.DELETE, newValue: { name: this.name, age: this.age } }, this.people[0]);
    }

    public onClear(event): void {
        this._transactions.clear();

        /** visualization */
        this.name = null;
        this.age = null;
    }

    public onCommit(event): void {
        this._transactions.commit(this.people);

        /** visualization */
        this.name = null;
        this.age = null;
    }
}
