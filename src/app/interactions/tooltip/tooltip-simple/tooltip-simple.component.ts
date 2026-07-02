import { Component } from '@angular/core';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';
import { IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-tooltip-simple',
    styleUrls: ['./tooltip-simple.component.scss'],
    templateUrl: './tooltip-simple.component.html',
    imports: [IgxAvatarComponent, IgxTooltipTargetDirective, IgxTooltipDirective]
})
export class TooltipSimpleComponent { }
