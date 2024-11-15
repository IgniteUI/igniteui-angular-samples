import { Component } from '@angular/core';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';

@Component({
    selector: 'app-buttons-style',
    styleUrls: ['./buttons-style.component.scss'],
    templateUrl: './buttons-style.component.html',
    imports: [IgxButtonDirective, IgxRippleDirective]
})
export class ButtonsStyleComponent { }
