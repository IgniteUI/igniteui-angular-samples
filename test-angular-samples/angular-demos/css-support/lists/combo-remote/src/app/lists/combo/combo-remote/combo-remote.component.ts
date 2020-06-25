import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { IgxComboComponent, IgxToastComponent, IgxToastPosition } from "igniteui-angular";
import { RemoteService } from "../../../grid/services/remote.service";

@Component({
    providers: [RemoteService],
    selector: "app-combo-remote",
    styleUrls: ["./combo-remote.component.css"],
    templateUrl: "./combo-remote.component.html"
})
export class ComboRemoteComponent implements OnInit {

    public prevRequest: any;
    public rData: any;
    @ViewChild("loadingToast", { read: IgxToastComponent, static: true }) public loadingToast: IgxToastComponent;
    @ViewChild("remoteCombo", { read: IgxComboComponent, static: true }) public remoteCombo: IgxComboComponent;

    constructor(private remoteService: RemoteService, public cdr: ChangeDetectorRef) { }

    public ngOnInit() {
        this.rData = this.remoteService.remoteData;
    }

    public ngAfterViewInit() {
        const initSize = { startIndex: 0, chunkSize: Math.ceil(250 / this.remoteCombo.itemHeight)};
        this.remoteService.getData(initSize,
            null, (data) => {
            this.remoteCombo.totalItemCount = data["@odata.count"];
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
            this.remoteCombo.virtualizationState,
            null,
            (data) => {
              this.remoteCombo.totalItemCount = data["@odata.count"];
              this.loadingToast.hide();
              this.cdr.detectChanges();
        });
    }

    public searchInput(searchText) {
        this.remoteService.getData(this.remoteCombo.virtualizationState, searchText, (data) => {
            this.remoteCombo.totalItemCount = data["@odata.count"];
        });
    }
}
