import { Component, ViewEncapsulation } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./button-styling.component.scss'],
    templateUrl: './button-styling.component.html',
    imports: [IgxButtonDirective, IgxIconComponent]
})
export class ButtonStylingComponent { }
