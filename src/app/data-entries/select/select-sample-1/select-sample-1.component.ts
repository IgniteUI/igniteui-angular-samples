import { Component, ViewChild } from "@angular/core";
import {
    AbsoluteScrollStrategy,
    IgxSelectComponent,
    OverlaySettings,
    SelectPositioningStrategy
} from "igniteui-angular";

@Component({
    selector: "select-sample-1",
    styleUrls: ["select-sample-1.component.scss"],
    templateUrl: "select-sample-1.component.html"
})
export class SelectSample1Component {
    @ViewChild(IgxSelectComponent)
    public igxSelect: IgxSelectComponent;
    public items: string[] = ["Orange", "Apple", "Banana", "Mango"];

    public customOverlaySettings: OverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        positionStrategy: new SelectPositioningStrategy(
            this.igxSelect
        ),
        scrollStrategy: new AbsoluteScrollStrategy()
    };
}
