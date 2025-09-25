import { Component } from '@angular/core';
import { IgxAvatarComponent, IgxTooltipTargetDirective, IgxOverlayOutletDirective, IgxTooltipDirective } from 'igniteui-angular';

@Component({
    selector: 'app-tooltip-tailwind-style',
    styleUrls: ['./tooltip-tailwind-style.component.scss'],
    templateUrl: './tooltip-tailwind-style.component.html',
    imports: [IgxAvatarComponent, IgxTooltipTargetDirective, IgxOverlayOutletDirective, IgxTooltipDirective]
})
export class TooltipTailwindStyleComponent { }
