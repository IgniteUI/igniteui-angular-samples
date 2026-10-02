import { Component } from '@angular/core';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';

@Component({
    selector: 'app-button-flat',
    styleUrls: ['./button-flat.component.scss'],
    templateUrl: './button-flat.component.html',
    imports: [IgxButtonDirective, IgxIconComponent]
})
export class ButtonFlatComponent { }
