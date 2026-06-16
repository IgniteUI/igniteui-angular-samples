
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-icon-button-overview',
    styleUrls: ['./icon-button-overview.component.scss'],
    templateUrl: './icon-button-overview.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent]
})
export class IconButtonOverviewComponent { }
