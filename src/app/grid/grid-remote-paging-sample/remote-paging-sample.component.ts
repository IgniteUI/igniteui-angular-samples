import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { Observable } from "rxjs";
import { RemotePagingService } from "../services/remotePagingService";
@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [RemotePagingService],
    selector: "remote-paging-grid-sample",
    styleUrls: ["./remote-paging-sample.component.scss"],
    templateUrl: "./remote-paging-sample.component.html"
})
export class RemotePagingGridSample implements OnInit, AfterViewInit, OnDestroy {

    public page = 0;
    public lastPage = false;
    public firstPage = true;
    public totalPages: number = 1;
    public totalCount = 0;
    public pages = [];
    @ViewChild("customPager", { read: TemplateRef })
    public remotePager: TemplateRef<any>;
    @ViewChild("secCustomPager", {read: TemplateRef})
    public secondPagerTemplate: TemplateRef<any>;

    @ViewChild("grid1")
    public grid1: IgxGridComponent;
    public title = "gridPaging";
    public data: Observable<any[]>;

    public get perPage(): number {
        return this._perPage;
    }

    public set perPage(val: number) {
        this._perPage = val;
        this.paginate(0, true);
    }

    public get shouldShowLastPage() {
        return this.pages[this.pages.length - 1] !== this.totalPages - 1;
    }

    public get shouldShowFirstPage() {
        return this.pages[0] !== 0;
    }
    private visibleElements = 3;
    private _perPage = 10;
    private _dataLengthSubscriber;

    constructor(
        private remoteService: RemotePagingService) {
    }

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();
        this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data) => {
            this.totalCount = data;
            this.totalPages = Math.ceil(data / this.perPage);
            this.buttonDeselection(this.page, this.totalPages);
        });
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        this.remoteService.getData(0, this.perPage);
        this.grid1.paginationTemplate = this.remotePager;
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
        if (this.grid1.paginationTemplate === this.secondPagerTemplate) {
            this.setNumberOfPagingItems(this.page, this.totalPages);
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
        if (this.grid1.paginationTemplate === this.secondPagerTemplate) {
            this.setNumberOfPagingItems(this.page, this.totalPages);
        }
    }

    public paginate(page: number, recalc: true) {
        this.page = page;
        const skip = this.page * this.perPage;
        const top = this.perPage;
        if (recalc) {
            this.totalPages = Math.ceil(this.totalCount / this.perPage);
        }
        if (this.grid1.paginationTemplate === this.secondPagerTemplate) {
            this.setNumberOfPagingItems(this.page, this.totalPages);
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

    public activePage(page) {
        return page === this.page ? "activePage" : "";
    }

    public setNumberOfPagingItems(currentPage, totalPages) {
        if (currentPage > this.pages[0] && currentPage < this.pages[this.pages.length]) {
            return;
        }
        if (this.pages.length === 0) {
            for (let item = currentPage; item < currentPage + this.visibleElements ; item++) {
                this.pages.push(item);
            }
            return;
        }
        if (currentPage <= this.pages[0]) {
            this.pages = [];
            let firstPage = currentPage - 1 < 0 ? 0 : currentPage - 1;
            firstPage = firstPage > totalPages - this.visibleElements ?
                    totalPages - this.visibleElements : firstPage;
            const lastPage = (firstPage + this.visibleElements) <= totalPages ?
            firstPage + this.visibleElements : totalPages;
            for (let item = firstPage; item < lastPage; item++) {
                this.pages.push(item);
            }
        } else if (currentPage >= this.pages[this.pages.length - 1]) {
            this.pages = [];
            const firtsPage = currentPage > totalPages - this.visibleElements ?
            totalPages - this.visibleElements : currentPage - 1;
            const lastPage = (firtsPage + this.visibleElements) <= totalPages ?
            firtsPage + this.visibleElements : totalPages - 1 ;
            for (let item = firtsPage; item < lastPage ; item++) {
                this.pages.push(item);
            }
        }
    }

    public changeTemplate() {
        if (this.grid1.paginationTemplate === this.remotePager) {
            this.grid1.paginationTemplate = this.secondPagerTemplate;
            this.setNumberOfPagingItems(this.page, this.totalPages);
        } else {
            this.pages = [];
            this.grid1.paginationTemplate = this.remotePager;
        }
        this.grid1.cdr.detectChanges();
    }
}
