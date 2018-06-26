import { ChangeDetectorRef, Component, ViewChild } from "@angular/core";
import { IgxComboComponent } from "igniteui-angular";
import { RemoteService } from "../../grid/services/remote.service";
import { localData } from "./local-data";

@Component({
    providers: [RemoteService],
    selector: "app-combo",
    styleUrls: ["./combo-features.component.scss"],
    templateUrl: "./combo-features.component.html"
})
export class ComboFeatures {

    public prevRequest: any;

    @ViewChild("combo1", { read: IgxComboComponent })
    private combo1: IgxComboComponent;
    private lData: any[];
    private rData: any;

    private VALUE_KEY = "field";
    private GROUP_KEY = "region";

    private filterable = true;
    private customValues = true;
    private disabled = false;

    @ViewChild("combo2", { read: IgxComboComponent })
    private combo2: IgxComboComponent;

    constructor(private remoteService: RemoteService, public cdr: ChangeDetectorRef) {}

    public ngOnInit() {
        this.lData = localData;
        this.rData = this.remoteService.remoteData;
    }

    public ngAfterViewInit() {
        this.remoteService.getData(this.combo2.virtualizationState, (data) => {
            this.combo2.totalItemCount = data.Count;
        });
    }

    public handleAddition(event) { }

    public enableGroups(event) {
        this.combo1.groupKey = event.checked ? this.GROUP_KEY : "";
    }

    public dataLoading(evt) {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }

        this.prevRequest = this.remoteService.getData(this.combo2.virtualizationState, () => {
            this.cdr.detectChanges();
            this.combo2.triggerCheck();
        });
    }
}
