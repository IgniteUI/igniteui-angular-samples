import { afterNextRender, Component, QueryList, ViewChildren } from '@angular/core';
import { HorizontalAlignment, OverlaySettings, PositionSettings, VerticalAlignment } from 'igniteui-angular/core';
import { IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-tooltip-position',
    styleUrls: ['./tooltip-position.component.scss'],
    templateUrl: './tooltip-position.component.html',
    imports: [IgxTooltipTargetDirective, IgxTooltipDirective]
})
export class TooltipPositionComponent {
    @ViewChildren(IgxTooltipTargetDirective)
    public targets: QueryList<IgxTooltipTargetDirective>;

    public positions: Record<'top' | 'left' | 'right' | 'bottom', PositionSettings> = {
        top: { horizontalDirection: HorizontalAlignment.Center, horizontalStartPoint: HorizontalAlignment.Center, verticalDirection: VerticalAlignment.Top, verticalStartPoint: VerticalAlignment.Top },
        left: { horizontalDirection: HorizontalAlignment.Left, horizontalStartPoint: HorizontalAlignment.Left, verticalDirection: VerticalAlignment.Middle, verticalStartPoint: VerticalAlignment.Middle },
        right: { horizontalDirection: HorizontalAlignment.Right, horizontalStartPoint: HorizontalAlignment.Right, verticalDirection: VerticalAlignment.Middle, verticalStartPoint: VerticalAlignment.Middle },
        bottom: { horizontalDirection: HorizontalAlignment.Center, horizontalStartPoint: HorizontalAlignment.Center, verticalDirection: VerticalAlignment.Bottom, verticalStartPoint: VerticalAlignment.Bottom }
    };

    public overlaySettings: OverlaySettings = {
        closeOnEscape: false
    };

    constructor() {
        afterNextRender(() => this.targets.forEach((target) => target.showTooltip()));
    }
}
