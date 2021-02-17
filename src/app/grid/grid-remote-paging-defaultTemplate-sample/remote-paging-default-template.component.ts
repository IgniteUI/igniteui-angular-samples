import { AfterViewInit, Component, ContentChild, OnDestroy, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from "@angular/core";
import { GridPagingMode, IgxGridComponent, IgxPaginatorComponent } from "igniteui-angular";
import { IPagingEventArgs } from "igniteui-angular/lib/paginator/interfaces";
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
    @ViewChild("grid1", { static: true }) public grid1: IgxGridComponent;
    @ViewChild("customPager", { read: TemplateRef, static: true }) public remotePager: TemplateRef<any>;

    private _dataLengthSubscriber;

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
        this.grid1.isLoading = true;
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
