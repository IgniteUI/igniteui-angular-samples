import { Component } from '@angular/core';
import { IgxButtonDirective, IgxRippleDirective, THEME_TOKEN, ThemeToken } from 'igniteui-angular';

@Component({
    selector: 'app-buttons-style',
    styleUrls: ['./buttons-style.component.scss'],
    templateUrl: './buttons-style.component.html',
    imports: [IgxButtonDirective, IgxRippleDirective],
    providers: [{provide: THEME_TOKEN, useFactory: () => new ThemeToken('bootstrap')}],
})
export class ButtonsStyleComponent {
    range = Array(6);
}
