import { Component, OnInit, ViewChild } from "@angular/core";
import {
    IgxDialogComponent,
    IgxGridComponent,
    IgxGridTransaction,
    IgxHierarchicalTransactionService,
    IgxTreeGridComponent,
    Transaction
} from "igniteui-angular";

@Component({
    providers: [{ provide: IgxGridTransaction, useClass: IgxHierarchicalTransactionService }],
    selector: "app-tree-grid-batch-editing-sample",
    styleUrls: ["tree-grid-batch-editing-sample.component.scss"],
    templateUrl: "tree-grid-batch-editing-sample.component.html"
})
export class TreeGridBatchEditingSampleComponent implements OnInit {

    public data: any[];
    public transactionsData: Transaction[] = [];

    @ViewChild("treeGrid") public treeGrid: IgxTreeGridComponent;
    @ViewChild(IgxDialogComponent) public dialog: IgxDialogComponent;
    @ViewChild("dialogGrid", { read: IgxGridComponent }) public dialogGrid: IgxGridComponent;

    private nextRow = 1;

    public ngOnInit(): void {
        this.data = [
            // tslint:disable:max-line-length
            { Salary: 2500, employeeID: 0, PID: -1, firstName: "Andrew", lastName: "Fuller", Title: "Vice President, Sales" },
            { Salary: 3500, employeeID: 1, PID: -1, firstName: "Jonathan", lastName: "Smith", Title: "Human resources" },
            { Salary: 1500, employeeID: 2, PID: -1, firstName: "Nancy", lastName: "Davolio", Title: "CFO" },
            { Salary: 2500, employeeID: 3, PID: -1, firstName: "Steven", lastName: "Buchanan", Title: "CTO" },
            // sub of ID 0
            { Salary: 2500, employeeID: 4, PID: 0, firstName: "Janet", lastName: "Leverling", Title: "Sales Manager" },
            { Salary: 3500, employeeID: 5, PID: 0, firstName: "Laura", lastName: "Callahan", Title: "Inside Sales Coordinator" },
            { Salary: 1500, employeeID: 6, PID: 0, firstName: "Margaret", lastName: "Peacock", Title: "Sales Representative" },
            { Salary: 2500, employeeID: 7, PID: 0, firstName: "Michael", lastName: "Suyama", Title: "Sales Representative" },
            // sub of ID 4
            { Salary: 2500, employeeID: 8, PID: 4, firstName: "Anne", lastName: "Dodsworth", Title: "Sales Representative" },
            { Salary: 3500, employeeID: 9, PID: 4, firstName: "Danielle", lastName: "Davis", Title: "Sales Representative" },
            { Salary: 1500, employeeID: 10, PID: 4, firstName: "Robert", lastName: "King", Title: "Sales Representative" },
            // sub of ID 2
            { Salary: 2500, employeeID: 11, PID: 2, firstName: "Peter", lastName: "Lewis", Title: "Chief Accountant" },
            { Salary: 3500, employeeID: 12, PID: 2, firstName: "Ryder", lastName: "Zenaida", Title: "Accountant" },
            { Salary: 1500, employeeID: 13, PID: 2, firstName: "Wang", lastName: "Mercedes", Title: "Accountant" },
            // sub of ID 3
            { Salary: 1500, employeeID: 14, PID: 3, firstName: "Theodore", lastName: "Zia", Title: "Software Architect" },
            { Salary: 4500, employeeID: 15, PID: 3, firstName: "Lacota", lastName: "Mufutau", Title: "Product Manager" },
            // sub of ID 16
            { Salary: 2500, employeeID: 16, PID: 15, firstName: "Jin", lastName: "Elliott", Title: "Product Owner" },
            { Salary: 3500, employeeID: 17, PID: 15, firstName: "Armand", lastName: "Ross", Title: "Product Owner" },
            { Salary: 1500, employeeID: 18, PID: 15, firstName: "Dane", lastName: "Rodriquez", Title: "Team Leader" },
            // sub of ID 19
            { Salary: 2500, employeeID: 19, PID: 18, firstName: "Declan", lastName: "Lester", Title: "Senior Software Developer" },
            { Salary: 3500, employeeID: 20, PID: 18, firstName: "Bernard", lastName: "Jarvis", Title: "Senior Software Developer" },
            { Salary: 1500, employeeID: 21, PID: 18, firstName: "Jason", lastName: "Clark", Title: "QA" },
            { Salary: 1500, employeeID: 22, PID: 18, firstName: "Mark", lastName: "Young", Title: "QA" },
            // sub of ID 20
            { Salary: 1500, employeeID: 23, PID: 20, firstName: "Jeremy", lastName: "Donaldson", Title: "Software Developer" }
        ];
        this.transactionsData = this.treeGrid.transactions.getAggregatedChanges(true);
        this.treeGrid.transactions.onStateUpdate.subscribe(() => {
            this.transactionsData = this.treeGrid.transactions.getAggregatedChanges(true);
        });
    }

    public addRow() {
        this.treeGrid.addRow({
            PID: -1,
            Title: "Junior Sales Representative",
            employeeID: this.data.length + this.nextRow++,
            firstName: "John",
            lastName: "Doe"
        });
    }

    public addChildRow(id) {
        this.treeGrid.addRow(
            {
                Title: "Sales Manager",
                employeeID: this.data.length + this.nextRow++,
                firstName: `Added `,
                lastName: "Added"
            },
            id);
    }

    public deleteRow(id) {
        this.treeGrid.deleteRow(id);
    }

    public undo() {
        this.treeGrid.transactions.undo();
    }

    public redo() {
        this.treeGrid.transactions.redo();
    }

    public commit() {
        this.treeGrid.transactions.commit(this.data);
        this.dialog.close();
    }

    public cancel() {
        this.dialog.close();
    }

    public discard() {
        this.treeGrid.transactions.clear();
        this.dialog.close();
    }

    public get undoEnabled(): boolean {
        return this.treeGrid.transactions.canUndo;
    }

    public get redoEnabled(): boolean {
        return this.treeGrid.transactions.canRedo;
    }

    public openCommitDialog() {
        this.dialog.open();
        this.dialogGrid.reflow();
    }

    public get hasTransactions(): boolean {
        return this.treeGrid.transactions.getAggregatedChanges(false).length > 0;
    }

    public stateFormatter(value: string) {
        return value ? JSON.stringify(value) : "";
    }

    public typeFormatter(value: string) {
        return value ? value.toUpperCase() : "";
    }

    private classFromType(type: string): string {
        return type ? `transaction--${type.toLowerCase()}` : "";
    }
}
