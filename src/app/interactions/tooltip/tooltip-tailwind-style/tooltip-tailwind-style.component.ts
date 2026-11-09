import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { IgxOverlayOutletDirective } from 'igniteui-angular/core';

@Component({
    selector: 'app-tooltip-tailwind-style',
    styleUrls: ['./tooltip-tailwind-style.component.scss'],
    templateUrl: './tooltip-tailwind-style.component.html',
    imports: [IgxAvatarComponent, IgxTooltipTargetDirective, IgxOverlayOutletDirective, IgxTooltipDirective]
})
export class TooltipTailwindStyleComponent { }
