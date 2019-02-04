import { Component, ViewChild } from "@angular/core";
import {
    AbsoluteScrollStrategy,
    IgxSelectComponent,
    OverlaySettings
    // SelectPositioningStrategy
// tslint:disable-next-line:no-implicit-dependencies
} from "igniteui-angular";

@Component({
    selector: "select-sample-1",
    styleUrls: ["select-sample-1.component.scss"],
    templateUrl: "select-sample-1.component.html"
})
export class SelectSample1Component {
    @ViewChild(IgxSelectComponent)
    public igxSelect: IgxSelectComponent;
    public items: any[] = [];

    public customOverlaySettings: OverlaySettings = {
        closeOnOutsideClick: true,
        modal: false,
        // positionStrategy: new SelectPositioningStrategy(
        //     this.igxSelect
        // ),
        scrollStrategy: new AbsoluteScrollStrategy()
    };
    public ngOnInit() {
        for (let i = 1; i < 10; i++) {
            const item = { field: "opt" + i };
            this.items.push(item);
        }
    }
}
