
import { Component } from '@angular/core';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-disabled-icon-button',
    styleUrls: ['./disabled-icon-button.component.scss'],
    templateUrl: './disabled-icon-button.component.html',
    imports: [IgxIconButtonDirective, IgxIconComponent]
})
export class DisabledIconButtonComponent {}
