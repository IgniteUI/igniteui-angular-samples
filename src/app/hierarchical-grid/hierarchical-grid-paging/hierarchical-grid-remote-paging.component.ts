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
    public title = "gridPaging";
    public selectOptions = [5, 10, 25, 50];

    @ViewChild("customPager", { read: TemplateRef, static: true }) public remotePager: TemplateRef<any>;
    @ViewChild("layout1") public layout1: IgxRowIslandComponent;
    @ViewChild("hierarchicalGrid", { static: true }) public hierarchicalGrid: IgxHierarchicalGridComponent;

    private _perPage = 10;
    private _dataLengthSubscriber;

    constructor(private remoteService: RemotePagingService) { }

    public get perPage(): number {
        return this._perPage;
    }

    public set perPage(val: number) {
        this._perPage = val;
        this.paginate(0);
    }

    public ngOnInit(): void {
        this._dataLengthSubscriber = this.remoteService.getDataLength(
            { parentID: null, rootLevel: true, key: "Customers" }).subscribe((length) => {
                this.totalCount = length;
                this.totalPages = Math.ceil(length / this.perPage);
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
            },
                (error) => {
                    this.hierarchicalGrid.emptyGridMessage = error.message;
                    this.hierarchicalGrid.isLoading = false;
                    this.hierarchicalGrid.cdr.detectChanges();
                }
            );
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
            },
            (error) => {
                event.grid.emptyGridMessage = error.message;
                event.grid.isLoading = false;
                event.grid.cdr.detectChanges();
            }
        );
    }

    public paginate(page: number) {
        this.page = page;
        const skip = this.page * this.perPage;
        const top = this.perPage;
        this.remoteService.getData(
            { parentID: null, rootLevel: true, key: "Customers" }, skip, top).subscribe((data) => {
                this.hierarchicalGrid.data = data;
                this.hierarchicalGrid.cdr.detectChanges();
            },
                (error) => {
                    this.hierarchicalGrid.emptyGridMessage = error.message;
                    this.hierarchicalGrid.data = null;
                    this.hierarchicalGrid.cdr.detectChanges();
                }
            );
    }
}
