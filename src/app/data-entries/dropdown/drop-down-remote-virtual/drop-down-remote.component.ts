import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { IForOfState, IgxDropDownComponent, IgxToastComponent, IgxToastPosition } from "igniteui-angular";
import { Subject, Subscription } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { RemoteService } from "../../../grid/services/remote.service";

// tslint:disable:object-literal-sort-keys
@Component({
    providers: [RemoteService],
    selector: "app-drop-down-remote",
    templateUrl: "./drop-down-remote.component.html",
    styleUrls: ["./drop-down-remote.component.scss"]
})
export class DropDownRemoteComponent implements OnInit, OnDestroy {
    @ViewChild("loadingToast", { read: IgxToastComponent })
    public loadingToast: IgxToastComponent;
    @ViewChild("remoteDropDown", { read: IgxDropDownComponent })
    public remoteDropDown: IgxDropDownComponent;
    public itemHeight = 48;
    public itemsMaxHeight = 320;
    public prevRequest: Subscription;
    public rData: any;
    private destroy$ = new Subject();
    constructor(private remoteService: RemoteService, public cdr: ChangeDetectorRef) { }

    public ngAfterViewInit() {
        const initialState: IForOfState = {
            startIndex: 0, chunkSize: Math.floor(this.itemsMaxHeight / this.itemHeight) + 1
        };
        this.remoteService.getData(initialState, null, (data) => {
            this.remoteDropDown.virtDir.totalItemCount = data["@odata.count"];
        });
        this.remoteDropDown.virtDir.onChunkPreload.pipe(takeUntil(this.destroy$)).subscribe((data) => {
            this.dataLoading(data);
        });
    }

    public dataLoading(evt) {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }
        this.loadingToast.message = "Loading Remote Data...";
        this.loadingToast.position = IgxToastPosition.Middle;
        this.loadingToast.autoHide = false;
        this.loadingToast.show();
        this.cdr.detectChanges();
        this.prevRequest = this.remoteService.getData(
            evt,
            null,
            (data) => {
                this.remoteDropDown.virtDir.totalItemCount = data["@odata.count"];
                this.loadingToast.hide();
                this.cdr.detectChanges();
            });
    }

    public ngOnInit() {
        this.rData = this.remoteService.remoteData;
    }

    public ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
