import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { IgxTreeGridComponent, NoopFilteringStrategy } from "igniteui-angular";
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
    @ViewChild("treeGrid", { static: true }) public treeGrid: IgxTreeGridComponent;
    public noopFilterStrategy = NoopFilteringStrategy.instance();

    constructor(private _remoteService: RemoteFilteringService, private _cdr: ChangeDetectorRef) {
    }

    public ngOnInit() {
        this.remoteData = this._remoteService.remoteData;
    }

    public ngAfterViewInit() {
        this.processData();
        this._cdr.detectChanges();
    }

    public processData() {
        this.treeGrid.isLoading = true;

        const filteringExpr = this.treeGrid.filteringExpressionsTree;

        this._remoteService.getData(filteringExpr, () => {
            this.treeGrid.isLoading = false;
        });
    }
}
