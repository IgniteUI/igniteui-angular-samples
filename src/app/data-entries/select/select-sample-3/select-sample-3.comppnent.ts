import { Component, ViewChild } from "@angular/core";
import { IgxSelectComponent } from 'igniteui-angular';

@Component({
    selector: "select-sample-3",
    styleUrls: ["select-sample-3.component.scss"],
    templateUrl: "select-sample-3.component.html"
})
export class SelectSample3Component {
    @ViewChild(IgxSelectComponent)
    public igxSelect: IgxSelectComponent;

    public items: string[] = ["Orange", "Apple", "Banana", "Mango"];
    public selected: string = "Apple";

    public selectBanana() {
        this.igxSelect.selectItem(this.igxSelect.items[2]);
    }

    public selectNull() {
        this.igxSelect.selectItem(null);
    }
}
