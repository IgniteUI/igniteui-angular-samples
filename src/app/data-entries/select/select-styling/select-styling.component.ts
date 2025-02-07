import { Component, OnInit, ViewChild } from '@angular/core';
import { AbsoluteScrollStrategy, ConnectedPositioningStrategy, HorizontalAlignment, IgxSelectComponent, OverlaySettings, PositionSettings, VerticalAlignment, IgxLabelDirective, IgxSelectItemComponent } from 'igniteui-angular';
import { scaleInTop, scaleOutBottom } from 'igniteui-angular/animations';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-select-styling',
    styleUrls: ['select-styling.component.scss'],
    templateUrl: 'select-styling.component.html',
    imports: [IgxSelectComponent, IgxLabelDirective, NgFor, IgxSelectItemComponent]
})
export class SelectStylingComponent implements OnInit {
    @ViewChild(IgxSelectComponent, { static: true })
    public igxSelect: IgxSelectComponent;
    public items: string[] = ['Orange', 'Apple', 'Banana'];
    public customOverlaySettings: OverlaySettings;

    public ngOnInit(): void {
        const positionSettings: PositionSettings = {
            closeAnimation: scaleOutBottom,
            horizontalDirection: HorizontalAlignment.Right,
            horizontalStartPoint: HorizontalAlignment.Left,
            openAnimation: scaleInTop,
            verticalDirection: VerticalAlignment.Bottom,
            verticalStartPoint: VerticalAlignment.Bottom
        };
        this.customOverlaySettings = {
            target: this.igxSelect.inputGroup.element.nativeElement,
            positionStrategy: new ConnectedPositioningStrategy(
                positionSettings
            ),
            scrollStrategy: new AbsoluteScrollStrategy()
        };
    }
}
