import { Component, OnInit, ViewChild } from '@angular/core';
import { AbsoluteScrollStrategy, ConnectedPositioningStrategy, HorizontalAlignment, OverlaySettings, PositionSettings, VerticalAlignment } from 'igniteui-angular/core';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { scaleInTop, scaleOutBottom } from 'igniteui-angular/animations';


@Component({
    selector: 'app-select-tailwind-styling',
    styleUrls: ['select-tailwind-styling.component.scss'],
    templateUrl: 'select-tailwind-styling.component.html',
    imports: [IgxSelectComponent, IgxLabelDirective, IgxSelectItemComponent]
})
export class SelectTailwindStylingComponent implements OnInit {
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
