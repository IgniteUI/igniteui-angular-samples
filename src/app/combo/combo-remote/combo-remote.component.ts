import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { IgxComboComponent, IgxToastComponent, IgxToastPosition } from "igniteui-angular";
import { RemoteService } from "../../grid/services/remote.service";

@Component({
    providers: [RemoteService],
    selector: "app-combo-remote",
    styleUrls: ["./combo-remote.component.scss"],
    templateUrl: "./combo-remote.component.html"
})
export class ComboRemoteComponent implements OnInit {

    public prevRequest: any;
    @ViewChild("loadingToast", { read: IgxToastComponent }) public loadingToast: IgxToastComponent;
    public rData: any;
    @ViewChild("remoteCombo", { read: IgxComboComponent }) public remoteCombo: IgxComboComponent;

    constructor(private remoteService: RemoteService, public cdr: ChangeDetectorRef) { }

    public ngOnInit() {
        this.rData = this.remoteService.remoteData;
    }

    public ngAfterViewInit() {
        this.remoteService.getData(this.remoteCombo.virtualizationState, null, (data) => {
            this.remoteCombo.totalItemCount = data.Count;
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
        this.prevRequest = this.remoteService.getData(this.remoteCombo.virtualizationState,
            this.remoteCombo.searchValue, () => {
                this.remoteCombo.triggerCheck();
                this.loadingToast.hide();
                this.cdr.detectChanges();
            });
    }

    public searchInput(searchText) {
        this.remoteService.getData(this.remoteCombo.virtualizationState, searchText, (data) => {
            this.remoteCombo.totalItemCount = searchText ? data.Results.length : data.Count;
        });
    }
}
