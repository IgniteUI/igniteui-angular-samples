import { formatNumber } from "@angular/common";
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { GridPagingMode, IgxTreeGridComponent, IPagingEventArgs } from "igniteui-angular";

import { Observable } from "rxjs";
import { RemotePagingService } from "./remotePagingService";

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [RemotePagingService],
    selector: "app-tree-grid-remote-paging-grid-sample",
    styleUrls: ["./tree-grid-remote-paging-sample.component.scss"],
    templateUrl: "./tree-grid-remote-paging-sample.component.html"
})
export class TreeGridRemotePagingSampleComponent implements OnInit, AfterViewInit, OnDestroy {
    public page = 0;
    public perPage = 10;
    public totalCount = 0;
    public data: Observable<any[]>;
    public selectOptions = [5, 10, 25, 50];
    public isLoading = true;
    public mode = GridPagingMode.Remote;
    @ViewChild("treeGrid", { static: true }) public treeGrid: IgxTreeGridComponent;

    private _dataLengthSubscriber;

    constructor(
        private remoteService: RemotePagingService) {
    }

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();
        this.data.subscribe((data) => {
            this.isLoading = false;
        })

        this._dataLengthSubscriber = this.remoteService.dataLength.subscribe((data) => {
            this.totalCount = data;
        });
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        const skip = this.page * this.perPage;
        this.remoteService.getData(skip, this.perPage);
        this.remoteService.getDataLength();
    }


    public paging(event: IPagingEventArgs) {
        this.isLoading = true;
        const skip = event.newPage * event.owner.perPage;
        this.remoteService.getData(skip, event.owner.perPage);
    }

    public perPageChange(perPage: number) {
        if (this.page < this.totalPages) {
            this.isLoading = true;
            const skip = this.page * perPage;
            this.remoteService.getData(skip, perPage);
        }
    }

    private get totalPages() {
        return Math.ceil(this.totalCount / this.perPage);
    }

    public formatSize(value: number) {
        return formatNumber(value, "en") + " KB";
    }
}
