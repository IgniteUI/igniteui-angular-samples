import { Component, ViewChild } from "@angular/core";

@Component({
    selector: "app-input-group-sample-5",
    styleUrls: ["./input-group-sample-5.component.scss"],
    templateUrl: "./input-group-sample-5.component.html"
})
export class InputGroupSample5Component {
    @ViewChild("input1") public searchInput: any;

    public clearSearchInput() {
        this.searchInput.value = "";
    }
}
