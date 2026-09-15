import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-contained',
    styleUrls: ['./button-contained.component.scss'],
    templateUrl: './button-contained.component.html',
    imports: [IgxButtonDirective, IgxIconComponent]
})
export class ButtonContainedComponent { }
