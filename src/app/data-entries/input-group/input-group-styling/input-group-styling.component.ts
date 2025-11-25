import { Component } from '@angular/core';
import { IgxHintDirective, IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { THEME_TOKEN, ThemeToken } from 'igniteui-angular/core';

@Component({
    selector: 'app-input-group-style',
    templateUrl: 'input-group-styling.component.html',
    styleUrls: ['input-group-styling.component.scss'],
    imports: [IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxHintDirective],
    providers: [{provide: THEME_TOKEN, useFactory: () => new ThemeToken('indigo')}]
})
export class InputGroupStyleComponent { }
