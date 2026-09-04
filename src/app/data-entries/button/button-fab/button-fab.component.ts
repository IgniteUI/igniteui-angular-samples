import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-fab',
    styleUrls: ['./button-fab.component.scss'],
    templateUrl: './button-fab.component.html',
    imports: [IgxButtonDirective, IgxIconComponent]
})
export class ButtonFabComponent { }
