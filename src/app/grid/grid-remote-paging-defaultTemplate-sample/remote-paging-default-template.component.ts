import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { GridPagingMode, IgxGridComponent, IPagingEventArgs } from "igniteui-angular";

import { Observable } from "rxjs";
import { RemotePagingService } from "../services/remotePagingService";

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [RemotePagingService],
    selector: "remote-paging-default-template",
    styleUrls: ["./remote-paging-default-template.component.scss"],
    templateUrl: "./remote-paging-default-template.component.html"
})
export class RemotePagingDefaultTemplateComponent implements OnInit, AfterViewInit, OnDestroy {

    public totalCount = 0;
    public page = 0;
    public perPage = 10;
    public data: Observable<any[]>;
    public mode = GridPagingMode.Remote;
    public isLoading = true;

    @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;

    private _dataLengthSubscriber;

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
