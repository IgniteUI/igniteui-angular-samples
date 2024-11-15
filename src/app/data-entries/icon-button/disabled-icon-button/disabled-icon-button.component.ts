
import { Component } from '@angular/core';
import { IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
    selector: 'app-disabled-icon-button',
    styleUrls: ['./disabled-icon-button.component.scss'],
    templateUrl: './disabled-icon-button.component.html',
    imports: [IgxIconButtonDirective, IgxIconComponent]
})
export class DisabledIconButtonComponent {}
