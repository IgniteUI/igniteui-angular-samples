import { Component } from "@angular/core";
import { IgxGridTransaction, IgxHierarchicalTransactionService } from "igniteui-angular";

@Component({
    providers: [{ provide: IgxGridTransaction, useClass: IgxHierarchicalTransactionService }],
    selector: "app-tree-grid-with-transactions",
    template: "<ng-content></ng-content>"
})
export class TreeGridWithTransactionsComponent { }
