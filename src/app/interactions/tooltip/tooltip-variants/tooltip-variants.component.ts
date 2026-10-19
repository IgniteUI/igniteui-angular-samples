import { afterNextRender, Component, QueryList, ViewChildren } from '@angular/core';
import { HorizontalAlignment, PositionSettings, VerticalAlignment } from 'igniteui-angular/core';
import { IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-tooltip-variants',
    styleUrls: ['./tooltip-variants.component.scss'],
    templateUrl: './tooltip-variants.component.html',
    imports: [IgxTooltipTargetDirective, IgxTooltipDirective]
})
export class TooltipVariantsComponent {
    @ViewChildren(IgxTooltipTargetDirective)
    public targets: QueryList<IgxTooltipTargetDirective>;

    public positionSettings: PositionSettings = {
        horizontalDirection: HorizontalAlignment.Center,
        horizontalStartPoint: HorizontalAlignment.Center,
        verticalDirection: VerticalAlignment.Top,
        verticalStartPoint: VerticalAlignment.Top
    };

    constructor() {
        afterNextRender(() => this.targets.forEach((target) => target.showTooltip()));
    }
}
