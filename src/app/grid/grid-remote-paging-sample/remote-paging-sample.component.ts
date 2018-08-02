import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { IgxGridComponent } from "igniteui-angular";
import { Observable, Subject, Subscriber } from "rxjs";
import { RemoteService } from "../services/remote.service";

@Component({
    providers: [RemoteService],
    selector: "remote-paging-grid-sample",
    styleUrls: ["./remote-paging-sample.component.scss"],
    templateUrl: "remote-paging-sample.component.html"
})
export class RemotePagingGridSample implements OnInit, AfterViewInit {
    public data: Observable<any[]>;

    constructor(private remoteService: RemoteService) {}

    public ngOnInit() {
        this.data = this.remoteService.remoteData;
    }

    public ngAfterViewInit() {
        this.remoteService.getData();
    }
}
