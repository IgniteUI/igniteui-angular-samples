import { Component, ViewChild } from "@angular/core";
import { IgxSelectComponent } from "igniteui-angular";

@Component({
    selector: "select-sample-3",
    styleUrls: ["select-sample-3.component.css"],
    templateUrl: "select-sample-3.component.html"
})
export class SelectSample3Component {
    @ViewChild(IgxSelectComponent, { static: true })
    public igxSelect: IgxSelectComponent;

    public items: string[] = ["Orange", "Apple", "Banana", "Mango"];
    public selected: string = "Apple";

    public selectBanana() {
        this.igxSelect.selectItem(this.igxSelect.items[2]);
    }

    public setToNull() {
        this.igxSelect.value = null;
        this.selected = null;
    }
}
