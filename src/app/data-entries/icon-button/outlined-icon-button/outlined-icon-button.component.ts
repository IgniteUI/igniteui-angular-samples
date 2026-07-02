import { Component } from '@angular/core';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-outlined-icon-button',
    styleUrls: ['./outlined-icon-button.component.scss'],
    templateUrl: './outlined-icon-button.component.html',
    imports: [IgxIconButtonDirective, IgxIconComponent]
})
export class OutlinedIconButtonComponent {}
