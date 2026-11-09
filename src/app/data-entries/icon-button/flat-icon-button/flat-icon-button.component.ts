
import { Component } from '@angular/core';
import { IgxIconButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-flat-icon-button',
    styleUrls: ['./flat-icon-button.component.scss'],
    templateUrl: './flat-icon-button.component.html',
    imports: [IgxIconButtonDirective, IgxIconComponent]
})
export class FlatIconButtonComponent { }
