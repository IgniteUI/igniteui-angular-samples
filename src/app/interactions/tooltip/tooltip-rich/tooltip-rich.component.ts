import { Component } from '@angular/core';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { IgxAvatarComponent } from 'igniteui-angular/avatar';

@Component({
    selector: 'app-tooltip-rich',
    styleUrls: ['./tooltip-rich.component.scss'],
    templateUrl: './tooltip-rich.component.html',
    imports: [IgxIconComponent, IgxTooltipTargetDirective, IgxTooltipDirective, IgxAvatarComponent]
})
export class TooltipRichComponent { }
