import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { IgxOverlayOutletDirective } from 'igniteui-angular/core';

@Component({
    selector: 'app-tooltip-style',
    styleUrls: ['./tooltip-style.component.scss'],
    templateUrl: './tooltip-style.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxAvatarComponent, IgxTooltipTargetDirective, IgxOverlayOutletDirective, IgxTooltipDirective]
})
export class TooltipStyleComponent { }
