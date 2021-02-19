import { formatNumber } from "@angular/common";
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
import { IPagingEventArgs } from "igniteui-angular/lib/paginator/interfaces";
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
    public totalPages: number = 1;
    public totalCount = 0;
    public data: Observable<any[]>;
    public selectOptions = [5, 10, 25, 50];
    @ViewChild("treeGrid", { static: true }) public treeGrid: IgxTreeGridComponent;

    private _dataLengthSubscriber;

    constructor(
        private remoteService: RemotePagingService) {
    }

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();

        this._dataLengthSubscriber = this.remoteService.dataLength.subscribe((data) => {
            this.totalCount = data;
            this.totalPages = Math.ceil(data / this.perPage);
            this.treeGrid.isLoading = false;
        });
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        this.treeGrid.isLoading = true;
        const skip = this.page * this.perPage;
        this.remoteService.getData(skip, this.perPage);
        this.remoteService.getDataLength();
    }


    public paging(event: IPagingEventArgs) {
        const skip = event.newPage * event.owner.perPage;
        this.remoteService.getData(skip, event.owner.perPage);
    }

    public perPageChange(perPage: number) {
        const skip = this.page * perPage;
        this.remoteService.getData(skip, perPage);
    }

    public formatSize(value: number) {
        return formatNumber(value, "en") + " KB";
    }
}
