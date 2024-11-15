import { Component } from '@angular/core';
import { IgxAvatarComponent, IgxTooltipTargetDirective, IgxOverlayOutletDirective, IgxTooltipDirective } from 'igniteui-angular';

@Component({
    selector: 'app-tooltip-style',
    styleUrls: ['./tooltip-style.component.scss'],
    templateUrl: './tooltip-style.component.html',
    imports: [IgxAvatarComponent, IgxTooltipTargetDirective, IgxOverlayOutletDirective, IgxTooltipDirective]
})
export class TooltipStyleComponent { }
