import { Component, ViewChild } from "@angular/core";
import { IgxInputDirective } from "igniteui-angular";
import { BaseInputGroupSampleComponent } from "../base-input.component";

@Component({
    selector: "app-input-group-sample-5",
    styleUrls: ["./input-group-sample-5.component.scss"],
    templateUrl: "./input-group-sample-5.component.html"
})
export class InputGroupSample5Component extends BaseInputGroupSampleComponent {
    @ViewChild("input1", { read: IgxInputDirective, static: true }) public searchInput: IgxInputDirective;

    public clearSearchInput() {
        this.searchInput.value = "";
    }
}
