
import { Component } from '@angular/core';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-contained-icon-button',
    styleUrls: ['./contained-icon-button.component.scss'],
    templateUrl: './contained-icon-button.component.html',
    imports: [IgxIconButtonDirective, IgxIconComponent]
})
export class ContainedIconButtonComponent { }
