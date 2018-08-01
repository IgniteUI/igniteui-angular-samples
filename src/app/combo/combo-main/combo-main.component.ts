import { ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { IgxComboComponent } from "igniteui-angular";
import { localData } from "./local-data";

@Component({
    selector: "app-combo-main",
    styleUrls: ["./combo-main.component.scss"],
    templateUrl: "./combo-main.component.html"
})

export class ComboMainComponent implements OnInit {
    @ViewChild("featuresCombo", { read: IgxComboComponent }) public featuresCombo: IgxComboComponent;
    public lData: any[];

    public VALUE_KEY = "field";
    public GROUP_KEY = "region";

    public filterable = true;
    public customValues = true;
    public disabled = false;

    constructor(public cdr: ChangeDetectorRef) {}

    public handleAddition(event) { }

    public enableGroups(event) {
        this.featuresCombo.groupKey = event.checked ? this.GROUP_KEY : "";
    }

    public ngOnInit() {
        this.lData = localData;
    }
}
