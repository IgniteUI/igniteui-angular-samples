import { Component } from '@angular/core';
import { IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
    selector: 'app-outlined-icon-button',
    styleUrls: ['./outlined-icon-button.component.scss'],
    templateUrl: './outlined-icon-button.component.html',
    imports: [IgxIconButtonDirective, IgxIconComponent]
})
export class OutlinedIconButtonComponent {}
