import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-outlined',
    styleUrls: ['./button-outlined.component.scss'],
    templateUrl: './button-outlined.component.html',
    imports: [IgxButtonDirective, IgxIconComponent]
})
export class ButtonOutlinedComponent { }
