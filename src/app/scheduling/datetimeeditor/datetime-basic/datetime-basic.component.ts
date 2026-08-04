import { Component } from '@angular/core';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxDateTimeEditorDirective, IgxTextSelectionDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-datetime-basic',
    styleUrls: ['./datetime-basic.component.scss'],
    templateUrl: './datetime-basic.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxDateTimeEditorDirective, IgxTextSelectionDirective]
})
export class DateTimeBasicComponent {
    public date = new Date();
}
