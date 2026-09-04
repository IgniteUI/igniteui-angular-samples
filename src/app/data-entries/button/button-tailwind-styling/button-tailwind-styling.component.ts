import { Component, ViewEncapsulation } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-tailwind-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./button-tailwind-styling.component.scss'],
    templateUrl: './button-tailwind-styling.component.html',
    imports: [IgxButtonDirective, IgxIconComponent]
})
export class ButtonTailwindStylingComponent { }
