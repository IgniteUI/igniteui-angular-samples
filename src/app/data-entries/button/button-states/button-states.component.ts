import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-states',
    styleUrls: ['./button-states.component.scss'],
    templateUrl: './button-states.component.html',
    imports: [IgxButtonDirective, IgxIconComponent]
})
export class ButtonStatesComponent { }
