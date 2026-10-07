import { Component, ViewEncapsulation } from '@angular/core';
import { PositionSettings } from 'igniteui-angular/core';
import { IgxButtonDirective, IgxIconButtonDirective, IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

interface ToolbarAction {
    icon: string;
    label: string;
}

@Component({
    selector: 'app-icon-styling-sample',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./icon-styling-sample.component.scss'],
    templateUrl: './icon-styling-sample.component.html',
    imports: [IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxTooltipDirective, IgxTooltipTargetDirective]
})
export class IconStylingSampleComponent {
    public actions: ToolbarAction[] = [
        { icon: 'edit', label: 'Edit' },
        { icon: 'content_copy', label: 'Copy' },
        { icon: 'share', label: 'Share' },
        { icon: 'delete', label: 'Delete' }
    ];

    public tooltipPosition: PositionSettings = { offset: 25 };
}
