import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { BehaviorSubject, Observable } from "rxjs";
import { map, takeUntil } from "rxjs/operators";
import { UserService } from "./data-service/data-service";
@Component({
    providers: [UserService],
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
    @ViewChild("customPager", { read: TemplateRef })
    public remotePager: TemplateRef<any>;

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

    private _perPage = 10;
    private _dataLengthSubscriber;
    private _dataSubscriber;

    constructor(
        private remoteService: UserService) {
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
        } else {
            this.lastPage = false;
            this.firstPage = true;
        }
    }

    public parseToInt(val) {
        return parseInt(val, 10);
    }
}
