
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxIconButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-icon-button-styling',
    styleUrls: ['./icon-button-styling.component.scss'],
    templateUrl: './icon-button-styling.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxIconButtonDirective, IgxRippleDirective, IgxIconComponent]
})
export class IconButtonStylingComponent { }
