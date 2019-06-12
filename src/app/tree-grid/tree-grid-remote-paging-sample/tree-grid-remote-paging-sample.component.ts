import { formatNumber } from "@angular/common";
import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxTreeGridComponent } from "igniteui-angular";
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
    public lastPage = false;
    public firstPage = true;
    public totalPages: number = 1;
    public totalCount = 0;
    public maxPerPage = Number.MAX_SAFE_INTEGER;

    @ViewChild("treeGrid")
    public treeGrid: IgxTreeGridComponent;
    public data: Observable<any[]>;

    public get perPage(): number {
        return this._perPage;
    }

    public set perPage(val: number) {
        this._perPage = val;
        this.paginate(0, true);
    }

    private _perPage = 10;
    private _dataLengthSubscriber;

    constructor(
        private remoteService: RemotePagingService) {
    }

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();

        this._dataLengthSubscriber = this.remoteService.dataLength.subscribe((data) => {
            this.totalCount = data;
            this.totalPages = Math.ceil(data / this.perPage);
            this.buttonDeselection(this.page, this.totalPages);
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

        this.remoteService.getData(0, this.perPage);
        this.remoteService.getDataLength();
    }

    public nextPage() {
        this.firstPage = false;
        this.page++;
        const skip = this.page * this.perPage;
        const top = this.perPage;
        this.remoteService.getData(skip, top);
        if (this.page + 1 >= this.totalPages) {
            this.lastPage = true;
        }
    }

    public previousPage() {
        this.lastPage = false;
        this.page--;
        const skip = this.page * this.perPage;
        const top = this.perPage;
        this.remoteService.getData(skip, top);
        if (this.page <= 0) {
            this.firstPage = true;
        }
    }

    public paginate(page: number, recalc: true) {
        this.page = page;
        const skip = this.page * this.perPage;
        const top = this.perPage;
        if (recalc) {
            this.totalPages = Math.ceil(this.totalCount / this.perPage);
        }
        this.remoteService.getData(skip, top);
        this.buttonDeselection(this.page, this.totalPages);
    }

    public buttonDeselection(page: number, totalPages: number) {
        if (totalPages === 1) {
            this.lastPage = true;
            this.firstPage = true;
        } else if (page + 1 >= totalPages) {
            this.lastPage = true;
            this.firstPage = false;
        } else if (page !== 0 && page !== totalPages) {
            this.lastPage = false;
            this.firstPage = false;
        } else {
            this.lastPage = false;
            this.firstPage = true;
        }
    }

    public parseToInt(val) {
        return parseInt(val, 10);
    }

    public formatSize(value: number) {
        return formatNumber(value, "en") + " KB";
    }
}
