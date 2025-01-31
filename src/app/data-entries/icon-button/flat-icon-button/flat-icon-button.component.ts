
import { Component } from '@angular/core';
import { IgxIconButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
    selector: 'app-flat-icon-button',
    styleUrls: ['./flat-icon-button.component.scss'],
    templateUrl: './flat-icon-button.component.html',
    imports: [IgxIconButtonDirective, IgxIconComponent]
})
export class FlatIconButtonComponent { }
