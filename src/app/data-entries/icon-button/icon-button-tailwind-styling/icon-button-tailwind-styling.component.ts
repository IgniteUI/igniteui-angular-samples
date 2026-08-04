
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-icon-button-tailwind-styling',
    styleUrls: ['./icon-button-tailwind-styling.component.scss'],
    templateUrl: './icon-button-tailwind-styling.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxIconButtonDirective, IgxIconComponent]
})
export class IconButtonTailwindStylingComponent { }
