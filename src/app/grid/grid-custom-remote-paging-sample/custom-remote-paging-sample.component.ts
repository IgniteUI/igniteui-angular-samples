import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { GridPagingMode, IgxGridComponent } from "igniteui-angular";
import { Observable } from "rxjs";
import { RemotePagingService } from "../services/remotePagingService";
@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [RemotePagingService],
    selector: "custom-remote-paging-grid-sample",
    styleUrls: ["./custom-remote-paging-sample.component.scss"],
    templateUrl: "./custom-remote-paging-sample.component.html"
})
export class CustomRemotePagingGridSample implements OnInit, AfterViewInit, OnDestroy {

    public page = 0;
    public perPage = 10;
    public lastPage = false;
    public firstPage = true;
    public totalPages: number = 1;
    public totalCount = 0;
    public pages = [];
    public title = "gridPaging";
    public data: Observable<any[]>;
    public isLoading = true;
    public mode = GridPagingMode.Remote;

    @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;

    private visibleElements = 5;
    private _dataLengthSubscriber;

    constructor(
        private remoteService: RemotePagingService) {
    }
    public get shouldShowLastPage() {
        return this.pages[this.pages.length - 1] !== this.totalPages - 1;
    }

    public get shouldShowFirstPage() {
        return this.pages[0] !== 0;
    }

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();
        this.data.subscribe((data) => {
            this.isLoading = false;
        })

        this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data) => {
            this.totalCount = data;
            this.totalPages = Math.ceil(data / this.perPage);
            this.buttonDeselection(this.page, this.totalPages);
            this.setNumberOfPagingItems(this.page, this.totalPages);
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
    }

    public nextPage() {
        this.firstPage = false;
        this.paginate(this.page + 1);

        if (this.page + 1 >= this.totalPages) {
            this.lastPage = true;
        }
    }

    public previousPage() {
        this.lastPage = false;
        this.paginate(this.page - 1);

        if (this.page <= 0) {
            this.firstPage = true;
        }
    }

    public paginate(page: number, recalc = false) {
        this.isLoading = true;
        this.page = page;
        const skip = this.page * this.perPage;
        const top = this.perPage;
        if (recalc) {
            this.totalPages = Math.ceil(this.totalCount / this.perPage);
        }
        this.setNumberOfPagingItems(this.page, this.totalPages);
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

    public activePage(page) {
        return page === this.page ? "activePage" : "";
    }

    public setNumberOfPagingItems(currentPage, totalPages) {
        if (currentPage > this.pages[0] && currentPage < this.pages[this.pages.length]) {
            return;
        }
        if (this.pages.length === 0) {
            const lastPage = (currentPage + this.visibleElements) <= totalPages ?
                currentPage + this.visibleElements : totalPages;
            for (let item = 0; item < lastPage; item++) {
                this.pages.push(item);
            }
            return;
        }
        if (currentPage <= this.pages[0]) {
            this.pages = [];
            let firstPage = currentPage - 1 < 0 ? 0 : currentPage - 1;
            firstPage = firstPage > totalPages - this.visibleElements ?
                totalPages - this.visibleElements : firstPage;
            firstPage = firstPage >= 0 ? firstPage : 0;
            const lastPage = (firstPage + this.visibleElements) <= totalPages ?
                firstPage + this.visibleElements : totalPages;
            for (let item = firstPage; item < lastPage; item++) {
                this.pages.push(item);
            }

        } else if (currentPage >= this.pages[this.pages.length - 1]) {
            this.pages = [];
            let firstPage = currentPage > totalPages - this.visibleElements ?
                totalPages - this.visibleElements : currentPage - 1;
            firstPage = firstPage >= 0 ? firstPage : 0;
            const lastPage = (firstPage + this.visibleElements) <= totalPages ?
            firstPage + this.visibleElements : totalPages;
            for (let item = firstPage; item < lastPage; item++) {
                this.pages.push(item);
            }
        }
    }
}
