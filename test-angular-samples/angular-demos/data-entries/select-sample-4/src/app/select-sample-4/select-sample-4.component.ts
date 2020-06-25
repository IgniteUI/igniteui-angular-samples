import { Component, OnInit, ViewChild } from "@angular/core";
import {
    AbsoluteScrollStrategy, ConnectedPositioningStrategy,
    HorizontalAlignment, IgxSelectComponent, OverlaySettings,
    PositionSettings, scaleInTop, scaleOutBottom, VerticalAlignment
} from "igniteui-angular";

@Component({
    selector: "select-sample-4",
    styleUrls: ["select-sample-4.component.scss"],
    templateUrl: "select-sample-4.component.html"
})
export class SelectSample4Component implements OnInit {
    @ViewChild(IgxSelectComponent, { static: true })
    public igxSelect: IgxSelectComponent;
    public items: string[] = ["Orange", "Apple", "Banana"];
    public customOverlaySettings: OverlaySettings;

    public ngOnInit(): void {
        const positionSettings: PositionSettings = {
            closeAnimation: scaleOutBottom,
            horizontalDirection: HorizontalAlignment.Right,
            horizontalStartPoint: HorizontalAlignment.Left,
            openAnimation: scaleInTop,
            target: this.igxSelect.inputGroup.element.nativeElement,
            verticalDirection: VerticalAlignment.Bottom,
            verticalStartPoint: VerticalAlignment.Bottom
        };
        this.customOverlaySettings = {
            positionStrategy: new ConnectedPositioningStrategy(
                positionSettings
            ),
            scrollStrategy: new AbsoluteScrollStrategy()
        };
    }
}
