import { AfterViewChecked, AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { Observable } from "rxjs";
import { UserService } from "./data-service/data-service";
@Component({
    selector: "app-gridpaging",
    styleUrls: ["./remote-paging-sample.component.scss"],
    templateUrl: "./remote-paging-sample.component.html"
})
export class RemotePagingGridSample implements OnInit, AfterViewInit, AfterViewChecked {

    public index = PageCounter.pageIndex;
    public lastPage = false;
    public firstPage = true;
    public totalPages;
    public total;
    @ViewChild("customPager", { read: TemplateRef })
    public remotePager: TemplateRef<any>;

    @ViewChild("grid1")
    public grid1: IgxGridComponent;
    public title = "gridPaging";
    public data: Observable<any[]>;
    public allData: Observable<number>;
    public totalRecords: number;
    constructor(
        private remoteService: UserService) {
    }

    public ngOnInit() {
        this.allData = this.remoteService.allRemoteData;
        this.data = this.remoteService.remoteData;
    }
    public ngAfterViewInit() {
        this.remoteService.getData(this.grid1.perPage, 0);
        this.remoteService.getAllData();
    }

    public ngAfterViewChecked() {
        this.allData.subscribe((val) => this.total = val);
        this.grid1.paginationTemplate = this.remotePager;
        this.grid1.pagingState.metadata.countRecords = this.total;
        this.grid1.pagingState.recordsPerPage = this.grid1.perPage;
        if (this.total / this.grid1.pagingState.recordsPerPage < 1 && this.total !== 0) {
            this.totalPages = 1;
            this.grid1.cdr.detectChanges();
            this.lastPage = true;
            this.firstPage = true;
            return;
        } else if (this.total / this.grid1.pagingState.recordsPerPage >
            Math.round(this.total / this.grid1.pagingState.recordsPerPage)
            && this.total !== 0) {
            this.grid1.pagingState.countPages = Math.round(this.total / this.grid1.pagingState.recordsPerPage) + 1;
            this.totalPages = this.grid1.pagingState.countPages;
            this.grid1.cdr.detectChanges();
        } else {
            this.grid1.pagingState.countPages = Math.round(this.total / this.grid1.pagingState.recordsPerPage);
            this.totalPages = this.grid1.pagingState.countPages;
            this.grid1.cdr.detectChanges();
        }
    }

    public nextPage() {
        this.firstPage = false;
        this.index++;
        const skip = this.index * this.grid1.pagingState.recordsPerPage;
        const top = this.grid1.pagingState.recordsPerPage;
        this.remoteService.getData(top, skip);
        if (this.index + 1 >= this.totalPages) {
            this.lastPage = true;
        }
    }

    public previousPage() {
        this.lastPage = false;
        this.index--;
        const skip = this.index * this.grid1.pagingState.recordsPerPage;
        const top = this.grid1.pagingState.recordsPerPage;
        this.remoteService.getData(top, skip);
        if (this.index <= 0) {
            this.firstPage = true;
            return;
        }
    }

    public paginate(index: number) {
        this.index = index;
        const skip = this.index * this.grid1.pagingState.recordsPerPage;
        const top = this.grid1.pagingState.recordsPerPage;
        this.remoteService.getData(top, skip);
        this.buttonDeselection(index);
    }

    public buttonDeselection(index: number) {
        if (index + 1 >= this.totalPages) {
            this.lastPage = true;
            this.firstPage = false;
            return;
        }
        this.lastPage = false;
        this.firstPage = true;
    }
}

class PageCounter {
    public static pageIndex = 0;
}
