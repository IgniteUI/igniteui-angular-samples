import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxButtonDirective, IgxTransactionService, State, Transaction, TransactionType } from "igniteui-angular";
import { IPerson, PEOPLE } from "../data";

@Component({
    selector: "transaction-base",
    styleUrls: ["./transaction-base.component.scss"],
    templateUrl: "transaction-base.component.html"
})

export class TransactionBaseComponent implements OnInit {
    @ViewChild("add", { static: false })
    public add: IgxButtonDirective;

    public people: IPerson[];
    public name: string;
    public age: number;

    constructor(private _transactions: IgxTransactionService<Transaction, State>) {
        this.people = PEOPLE;
    }

    public ngOnInit(): void {
    }

    public onAdd(event): void {
        this.add.disabled = true;
        this._transactions.add({ id: 2, type: TransactionType.ADD, newValue: { name: "Sile", age: 42 } });
        /** visualization */
        const log = this._transactions.getTransactionLog();
        this.name = log[0].newValue.name;
        this.age = log[0].newValue.age;
    }

    public onEdit(event): void {
        this._transactions.add({ id: 3, type: TransactionType.UPDATE, newValue: { age: 54 } }, this.people[3]);
    }

    public onDelete(event): void {

    }

    public onClear(event): void {
        this._transactions.clear();
        /** visualization */
        this.name = null;
        this.age = null;
    }

    public onCommit(event): void {
        this._transactions.commit(this.people, 2);
        /** visualization */
        this.name = null;
        this.age = null;
    }
}
