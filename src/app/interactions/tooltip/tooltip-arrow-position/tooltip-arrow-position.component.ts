import { afterNextRender, Component, QueryList, ViewChildren } from '@angular/core';
import { HorizontalAlignment, OverlaySettings, PositionSettings, VerticalAlignment } from 'igniteui-angular/core';
import { IgxTooltipTargetDirective } from 'igniteui-angular/directives';

type TooltipPlacement =
    | 'top' | 'top-start' | 'top-end'
    | 'left' | 'left-start' | 'left-end'
    | 'right' | 'right-start' | 'right-end'
    | 'bottom' | 'bottom-start' | 'bottom-end';

const { Left, Center, Right } = HorizontalAlignment;
const { Top, Middle, Bottom } = VerticalAlignment;

@Component({
    selector: 'app-tooltip-arrow-position',
    styleUrls: ['./tooltip-arrow-position.component.scss'],
    templateUrl: './tooltip-arrow-position.component.html',
    imports: [IgxTooltipTargetDirective]
})
export class TooltipArrowPositionComponent {
    @ViewChildren(IgxTooltipTargetDirective)
    public targets: QueryList<IgxTooltipTargetDirective>;

    public placements: { label: string; value: TooltipPlacement }[] = [
        { label: 'Arrow Top', value: 'top' },
        { label: 'Arrow Top Start', value: 'top-start' },
        { label: 'Arrow Top End', value: 'top-end' },
        { label: 'Arrow Left', value: 'left' },
        { label: 'Arrow Left Start', value: 'left-start' },
        { label: 'Arrow Left End', value: 'left-end' },
        { label: 'Arrow Right', value: 'right' },
        { label: 'Arrow Right Start', value: 'right-start' },
        { label: 'Arrow Right End', value: 'right-end' },
        { label: 'Arrow Bottom', value: 'bottom' },
        { label: 'Arrow Bottom Start', value: 'bottom-start' },
        { label: 'Arrow Bottom End', value: 'bottom-end' }
    ];

    public positions: Record<TooltipPlacement, PositionSettings> = {
        'top': { horizontalDirection: Center, horizontalStartPoint: Center, verticalDirection: Top, verticalStartPoint: Top },
        'top-start': { horizontalDirection: Right, horizontalStartPoint: Left, verticalDirection: Top, verticalStartPoint: Top },
        'top-end': { horizontalDirection: Left, horizontalStartPoint: Right, verticalDirection: Top, verticalStartPoint: Top },
        'left': { horizontalDirection: Left, horizontalStartPoint: Left, verticalDirection: Middle, verticalStartPoint: Middle },
        'left-start': { horizontalDirection: Left, horizontalStartPoint: Left, verticalDirection: Bottom, verticalStartPoint: Top },
        'left-end': { horizontalDirection: Left, horizontalStartPoint: Left, verticalDirection: Top, verticalStartPoint: Bottom },
        'right': { horizontalDirection: Right, horizontalStartPoint: Right, verticalDirection: Middle, verticalStartPoint: Middle },
        'right-start': { horizontalDirection: Right, horizontalStartPoint: Right, verticalDirection: Bottom, verticalStartPoint: Top },
        'right-end': { horizontalDirection: Right, horizontalStartPoint: Right, verticalDirection: Top, verticalStartPoint: Bottom },
        'bottom': { horizontalDirection: Center, horizontalStartPoint: Center, verticalDirection: Bottom, verticalStartPoint: Bottom },
        'bottom-start': { horizontalDirection: Right, horizontalStartPoint: Left, verticalDirection: Bottom, verticalStartPoint: Bottom },
        'bottom-end': { horizontalDirection: Left, horizontalStartPoint: Right, verticalDirection: Bottom, verticalStartPoint: Bottom }
    };

    public overlaySettings: OverlaySettings = {
        closeOnEscape: false
    };

    constructor() {
        afterNextRender(() => this.targets.forEach((target) => target.showTooltip()));
    }
}
