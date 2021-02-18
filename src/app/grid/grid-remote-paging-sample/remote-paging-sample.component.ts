import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { GridPagingMode, IgxGridComponent, IPagingEventArgs } from "igniteui-angular";

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
    public perPage = 5;
    public totalCount = 0;
    public data: Observable<any[]>;
    public selectOptions = [5, 10, 15, 25, 50];
    public isLoading = true;
    public mode = GridPagingMode.Remote;
    private _dataLengthSubscriber;

    @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;

    constructor(private remoteService: RemotePagingService) {
    }

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();
        this.data.subscribe((data) => {
            this.isLoading = false;
        })

        this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data) => {
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
    }

    public paging(event: IPagingEventArgs) {
        this.isLoading = true;
        const skip = event.newPage * this.perPage;
        this.remoteService.getData(skip, this.perPage);
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
}
