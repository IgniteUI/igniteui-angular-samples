import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild  } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
import { Observable } from "rxjs";
import { RemoteFilteringService } from "../services/remoteFilteringService";

@Component({
    providers: [RemoteFilteringService],
    selector: "app-tree-grid-remote-filtering-sample",
    styleUrls: ["./tree-grid-remote-filtering-sample.component.scss"],
    templateUrl: "./tree-grid-remote-filtering-sample.component.html"
})
export class TreeGridRemoteFilteringSampleComponent implements OnInit, AfterViewInit {

    public remoteData: Observable<any[]>;
    @ViewChild("treeGrid") public treeGrid: IgxTreeGridComponent;

    constructor(private _remoteService: RemoteFilteringService, private _cdr: ChangeDetectorRef) {
    }

    public ngOnInit() {
        this.remoteData = this._remoteService.remoteData;
    }

    public ngAfterViewInit() {
        this.processData();
    }

    public processData() {
        const filteringExpr = this.treeGrid.filteringExpressionsTree;
        const sortingExpr = this.treeGrid.sortingExpressions[0];

        this._remoteService.getData(filteringExpr, sortingExpr);
        this._cdr.detectChanges();
    }
}
