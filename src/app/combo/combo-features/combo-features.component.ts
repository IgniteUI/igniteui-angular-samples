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

    @ViewChild("combo1", { read: IgxComboComponent }) public combo1: IgxComboComponent;
    public lData: any[];
    public rData: any;

    public VALUE_KEY = "field";
    public GROUP_KEY = "region";

    public filterable = true;
    public customValues = true;
    public disabled = false;

    public ngOnInit() {
        this.lData = localData;
    }

    public handleAddition(event) { }

    public enableGroups(event) {
        this.combo1.groupKey = event.checked ? this.GROUP_KEY : "";
    }
}
