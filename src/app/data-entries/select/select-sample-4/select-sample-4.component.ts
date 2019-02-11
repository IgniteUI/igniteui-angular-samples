import { Component, OnInit, ViewChild } from "@angular/core";
import {
    AbsoluteScrollStrategy, ConnectedPositioningStrategy,
    HorizontalAlignment, IgxSelectComponent, OverlaySettings,
    PositionSettings, slideInLeft, slideOutRight, VerticalAlignment
} from 'igniteui-angular';

@Component({
    selector: "select-sample-4",
    styleUrls: ["select-sample-4.component.scss"],
    templateUrl: "select-sample-4.component.html"
})
export class SelectSample4Component implements OnInit {
    @ViewChild(IgxSelectComponent)
    public igxSelect: IgxSelectComponent;
    public items: string[] = ["Orange", "Apple", "Banana"];
    public customOverlaySettings: OverlaySettings;

    public ngOnInit(): void {
        const positionSettings: PositionSettings = {
            closeAnimation: slideOutRight,
            horizontalDirection: HorizontalAlignment.Right,
            horizontalStartPoint: HorizontalAlignment.Left,
            openAnimation: slideInLeft,
            target: this.igxSelect.inputGroup.element.nativeElement,
            verticalDirection: VerticalAlignment.Bottom,
            verticalStartPoint: VerticalAlignment.Bottom
        };
        this.customOverlaySettings = {
            closeOnOutsideClick: false,
            modal: true,
            positionStrategy: new ConnectedPositioningStrategy(
                positionSettings
            ),
            scrollStrategy: new AbsoluteScrollStrategy()
        };
    }
}
