import { Component, QueryList, ViewChild, ViewChildren } from "@angular/core";
import { IgxButtonDirective, IgxTooltipDirective, TooltipPositionStrategy } from 'igniteui-angular/directives';
import { HorizontalAlignment, OverlaySettings, PositionSettings, VerticalAlignment } from 'igniteui-angular/core';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: "app-tooltip-placement",
    styleUrls: ["./tooltip-placement.component.scss"],
    templateUrl: "./tooltip-placement.component.html",
    imports: [IgxButtonDirective, IgxTooltipDirective, IgxIconComponent]
})
export class TooltipPlacementComponent {
    @ViewChildren(IgxTooltipDirective)
    public tooltips!: QueryList<IgxTooltipDirective>;

    @ViewChild(IgxButtonDirective, { static: true })
    public button!: IgxButtonDirective;

    public positions = Array.from(PositionsMap.keys());

    public showPositions() {
        this.tooltips.forEach((tooltip, index) => {
            const position = PositionsMap.get(this.positions[index]);
            const overlaySettings: OverlaySettings = {
                target: this.button.nativeElement,
                positionStrategy: new TooltipPositionStrategy(position),
                modal: false,
                closeOnOutsideClick: false,
                closeOnEscape: true,
                excludeFromOutsideClick: [this.button.nativeElement]
            };
            tooltip.open(overlaySettings);
        });
    }
}

export const PositionsMap = new Map<string, PositionSettings>([
    ['top', {
        horizontalDirection: HorizontalAlignment.Center,
        horizontalStartPoint: HorizontalAlignment.Center,
        verticalDirection: VerticalAlignment.Top,
        verticalStartPoint: VerticalAlignment.Top
    }],
    ['top-start', {
        horizontalDirection: HorizontalAlignment.Right,
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalDirection: VerticalAlignment.Top,
        verticalStartPoint: VerticalAlignment.Top
    }],
    ['top-end', {
        horizontalDirection: HorizontalAlignment.Left,
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalDirection: VerticalAlignment.Top,
        verticalStartPoint: VerticalAlignment.Top
    }],
    ['bottom', {
        horizontalDirection: HorizontalAlignment.Center,
        horizontalStartPoint: HorizontalAlignment.Center,
        verticalDirection: VerticalAlignment.Bottom,
        verticalStartPoint: VerticalAlignment.Bottom
    }],
    ['bottom-start', {
        horizontalDirection: HorizontalAlignment.Right,
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalDirection: VerticalAlignment.Bottom,
        verticalStartPoint: VerticalAlignment.Bottom
    }],
    ['bottom-end', {
        horizontalDirection: HorizontalAlignment.Left,
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalDirection: VerticalAlignment.Bottom,
        verticalStartPoint: VerticalAlignment.Bottom
    }],
    ['right', {
        horizontalDirection: HorizontalAlignment.Right,
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalDirection: VerticalAlignment.Middle,
        verticalStartPoint: VerticalAlignment.Middle
    }],
    ['right-start', {
        horizontalDirection: HorizontalAlignment.Right,
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalDirection: VerticalAlignment.Bottom,
        verticalStartPoint: VerticalAlignment.Top
    }],
    ['right-end', {
        horizontalDirection: HorizontalAlignment.Right,
        horizontalStartPoint: HorizontalAlignment.Right,
        verticalDirection: VerticalAlignment.Top,
        verticalStartPoint: VerticalAlignment.Bottom
    }],
    ['left', {
        horizontalDirection: HorizontalAlignment.Left,
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalDirection: VerticalAlignment.Middle,
        verticalStartPoint: VerticalAlignment.Middle
    }],
    ['left-start', {
        horizontalDirection: HorizontalAlignment.Left,
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalDirection: VerticalAlignment.Bottom,
        verticalStartPoint: VerticalAlignment.Top
    }],
    ['left-end', {
        horizontalDirection: HorizontalAlignment.Left,
        horizontalStartPoint: HorizontalAlignment.Left,
        verticalDirection: VerticalAlignment.Top,
        verticalStartPoint: VerticalAlignment.Bottom
    }]
]);
