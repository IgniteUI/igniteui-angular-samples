
import { Component } from '@angular/core';
import { IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
    selector: 'app-contained-icon-button',
    styleUrls: ['./contained-icon-button.component.scss'],
    templateUrl: './contained-icon-button.component.html',
    imports: [IgxIconButtonDirective, IgxIconComponent]
})
export class ContainedIconButtonComponent { }
