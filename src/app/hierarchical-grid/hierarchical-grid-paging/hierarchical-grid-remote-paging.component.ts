import { AfterViewInit, Component, OnDestroy, OnInit, TemplateRef, ViewChild } from "@angular/core";
import { IGridCreatedEventArgs, IgxHierarchicalGridComponent, IgxRowIslandComponent } from "igniteui-angular";
import { RemotePagingService } from "./remotePagingService";

@Component({
    providers: [RemotePagingService],
    selector: "hierarchical-grid-remote-paging",
    styleUrls: ["./hierarchical-grid-remote-paging.component.scss"],
    templateUrl: "hierarchical-grid-remote-paging.component.html"
})

export class HGridRemotePagingSampleComponent implements OnInit, AfterViewInit, OnDestroy {
    public page = 0;
    public lastPage = false;
    public firstPage = true;
    public totalPages: number = 1;
    public totalCount = 0;
    @ViewChild("customPager", { read: TemplateRef })
    public remotePager: TemplateRef<any>;
    public title = "gridPaging";

    @ViewChild("layout1")
    public layout1: IgxRowIslandComponent;

    @ViewChild("hierarchicalGrid")
    public hierarchicalGrid: IgxHierarchicalGridComponent;

    public get perPage(): number {
        return this._perPage;
    }

    public set perPage(val: number) {
        this._perPage = val;
        this.paginate(0, true);
    }

    private _perPage = 10;
    private _dataLengthSubscriber;

    constructor(private remoteService: RemotePagingService) {}

    public ngOnInit(): void {
        this._dataLengthSubscriber = this.remoteService.getDataLength(
            { parentID: null, rootLevel: true, key: "Customers" }).subscribe((length) => {
            this.totalCount = length;
            this.totalPages = Math.ceil(length / this.perPage);
            this.buttonDeselection(this.page, this.totalPages);
        });
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        this.hierarchicalGrid.isLoading = true;
        this.remoteService.getData(
            { parentID: null, rootLevel: true, key: "Customers" }, 0, this.perPage).subscribe((data) => {
            this.hierarchicalGrid.isLoading = false;
            this.hierarchicalGrid.data = data;
            this.hierarchicalGrid.paginationTemplate = this.remotePager;
            this.hierarchicalGrid.cdr.detectChanges();
        });
    }

    public dateFormatter(val: string) {
        return new Intl.DateTimeFormat("en-US").format(new Date(val));
    }

    public gridCreated(event: IGridCreatedEventArgs, _foreignKey: string) {
        const dataState = {
            foreignKey: _foreignKey,
            key: event.owner.key,
            parentID: event.parentID,
            rootLevel: false
        };
        event.grid.isLoading = true;
        this.remoteService.getData(dataState).subscribe(
            (data) => {
                event.grid.isLoading = false;
                event.grid.data = data;
                event.grid.cdr.detectChanges();
            }
        );
    }

    public nextPage() {
        this.firstPage = false;
        this.page++;
        const skip = this.page * this.perPage;
        const top = this.perPage;
        this.remoteService.getData(
            { parentID: null, rootLevel: true, key: "Customers" }, skip, top).subscribe((data) => {
            this.hierarchicalGrid.data = data;
            this.hierarchicalGrid.cdr.detectChanges();
        });
        if (this.page + 1 >= this.totalPages) {
            this.lastPage = true;
        }
    }

    public previousPage() {
        this.lastPage = false;
        this.page--;
        const skip = this.page * this.perPage;
        const top = this.perPage;
        this.remoteService.getData(
            { parentID: null, rootLevel: true, key: "Customers" }, skip, top).subscribe((data) => {
            this.hierarchicalGrid.data = data;
            this.hierarchicalGrid.cdr.detectChanges();
        });
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
        this.remoteService.getData(
            { parentID: null, rootLevel: true, key: "Customers" }, skip, top).subscribe((data) => {
            this.hierarchicalGrid.data = data;
            this.hierarchicalGrid.cdr.detectChanges();
        });
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
        this.perPage = parseInt(val, 10);
        this.hierarchicalGrid.cdr.detectChanges();
    }

}
