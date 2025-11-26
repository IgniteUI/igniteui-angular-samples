import { Component } from '@angular/core';
import { IgxIconComponent, IgxTooltipTargetDirective, IgxTooltipDirective, IgxAvatarComponent } from 'igniteui-angular';

@Component({
    selector: 'app-tooltip-rich',
    styleUrls: ['./tooltip-rich.component.scss'],
    templateUrl: './tooltip-rich.component.html',
    imports: [IgxIconComponent, IgxTooltipTargetDirective, IgxTooltipDirective, IgxAvatarComponent]
})
export class TooltipRichComponent { }
