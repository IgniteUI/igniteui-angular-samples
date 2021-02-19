import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { IgxGridComponent, IPagingEventArgs } from "igniteui-angular";

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
    private _dataLengthSubscriber;

    @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;

    constructor(private remoteService: RemotePagingService) {
    }

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();

        this._dataLengthSubscriber = this.remoteService.getDataLength().subscribe((data) => {
            this.totalCount = data;
            this.grid1.isLoading = false;
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
        const skip = event.newPage * this.perPage;
        this.remoteService.getData(skip, this.perPage);
    }

    public perPageChange(perPage: number) {
        const skip = this.page * perPage;
        this.remoteService.getData(skip, perPage);
    }
}
