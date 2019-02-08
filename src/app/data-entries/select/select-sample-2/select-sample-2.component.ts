import { Component, ViewChild } from "@angular/core";
import {
    AbsoluteScrollStrategy,
    IgxSelectComponent,
    OverlaySettings,
    SelectPositioningStrategy
} from "igniteui-angular";

@Component({
    selector: "select-sample-2",
    styleUrls: ["select-sample-2.component.scss"],
    templateUrl: "select-sample-2.component.html"
})
export class SelectSample2Component {
    @ViewChild(IgxSelectComponent)
    public igxSelect: IgxSelectComponent;

    public items: any[] = [
        { field: "Fruits", header: true },
        { field: "Apple" },
        { field: "Orange" },
        { field: "Banana", selected: true },
        { field: "Vegetables", header: true },
        { field: "Cucumber" },
        { field: "Potato", disabled: true },
        { field: "Pepper" }
    ];

    public customOverlaySettings: OverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        positionStrategy: new SelectPositioningStrategy(
            this.igxSelect
        ),
        scrollStrategy: new AbsoluteScrollStrategy()
    };
}
