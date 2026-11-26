import { afterNextRender, Component, inject, Injector, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { take } from 'rxjs';
import { HorizontalAlignment, PositionSettings, VerticalAlignment } from 'igniteui-angular/core';
import { IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular/radio';
import { IgxSwitchComponent } from 'igniteui-angular/switch';

type TooltipPlacement = 'top' | 'right' | 'left' | 'bottom';

@Component({
    selector: 'app-tooltip-overview',
    styleUrls: ['./tooltip-overview.component.scss'],
    templateUrl: './tooltip-overview.component.html',
    imports: [FormsModule, IgxRadioGroupDirective, IgxRadioComponent, IgxSwitchComponent, IgxTooltipTargetDirective, IgxTooltipDirective]
})
export class TooltipOverviewComponent {
    @ViewChild('target', { static: true })
    public target: IgxTooltipTargetDirective;

    @ViewChild('tooltip', { static: true })
    public tooltip: IgxTooltipDirective;

    public placements: { label: string; value: TooltipPlacement }[] = [
        { label: 'Top', value: 'top' },
        { label: 'Right', value: 'right' },
        { label: 'Left', value: 'left' },
        { label: 'Bottom', value: 'bottom' }
    ];

    public positions: Record<TooltipPlacement, PositionSettings> = {
        top: { horizontalDirection: HorizontalAlignment.Center, horizontalStartPoint: HorizontalAlignment.Center, verticalDirection: VerticalAlignment.Top, verticalStartPoint: VerticalAlignment.Top },
        right: { horizontalDirection: HorizontalAlignment.Right, horizontalStartPoint: HorizontalAlignment.Right, verticalDirection: VerticalAlignment.Middle, verticalStartPoint: VerticalAlignment.Middle },
        left: { horizontalDirection: HorizontalAlignment.Left, horizontalStartPoint: HorizontalAlignment.Left, verticalDirection: VerticalAlignment.Middle, verticalStartPoint: VerticalAlignment.Middle },
        bottom: { horizontalDirection: HorizontalAlignment.Center, horizontalStartPoint: HorizontalAlignment.Center, verticalDirection: VerticalAlignment.Bottom, verticalStartPoint: VerticalAlignment.Bottom }
    };

    public placement: TooltipPlacement = 'bottom';
    public closeButton = true;
    public arrow = true;

    private injector = inject(Injector);

    constructor() {
        afterNextRender(() => this.target.showTooltip());
    }

    public onPlacementChange(placement: TooltipPlacement): void {
        this.placement = placement;

        if (!this.target.tooltipHidden) {
            this.tooltip.closed.pipe(take(1)).subscribe(() => this.target.showTooltip());
            this.target.hideTooltip();
        }
    }

    public repositionTooltip(): void {
        afterNextRender(() => {
            if (!this.tooltip.collapsed) {
                this.tooltip.reposition();
            }
        }, { injector: this.injector });
    }
}
