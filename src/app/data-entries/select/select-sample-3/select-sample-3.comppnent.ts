import { Component, ViewChild } from "@angular/core";
import {
    AbsoluteScrollStrategy, IgxSelectComponent,
    OverlaySettings, SelectPositioningStrategy
} from 'igniteui-angular';

@Component({
    selector: "select-sample-3",
    styleUrls: ["select-sample-3.component.scss"],
    templateUrl: "select-sample-3.component.html"
})
export class SelectSample3Component {
    @ViewChild(IgxSelectComponent)
    public igxSelect: IgxSelectComponent;
    public items: string[] = ["Orange", "Apple", "Banana", "Mango", "Tomato"];
    public selected: string = "Apple";

    public customOverlaySettings: OverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        positionStrategy: new SelectPositioningStrategy(
            this.igxSelect
        ),
        scrollStrategy: new AbsoluteScrollStrategy()
    };
}
