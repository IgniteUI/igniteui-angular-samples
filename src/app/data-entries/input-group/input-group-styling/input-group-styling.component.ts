import { Component } from '@angular/core';
import { IgxHintDirective, IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-input-group-style',
    templateUrl: 'input-group-styling.component.html',
    styleUrls: ['input-group-styling.component.scss'],
    imports: [IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxHintDirective]
})
export class InputGroupStyleComponent { }
