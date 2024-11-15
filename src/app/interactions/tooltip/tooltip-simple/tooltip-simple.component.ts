import { Component } from '@angular/core';
import { IgxAvatarComponent, IgxTooltipTargetDirective, IgxTooltipDirective } from 'igniteui-angular';

@Component({
    selector: 'app-tooltip-simple',
    styleUrls: ['./tooltip-simple.component.scss'],
    templateUrl: './tooltip-simple.component.html',
    imports: [IgxAvatarComponent, IgxTooltipTargetDirective, IgxTooltipDirective]
})
export class TooltipSimpleComponent { }
