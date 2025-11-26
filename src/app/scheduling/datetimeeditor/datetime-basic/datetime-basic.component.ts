import { Component } from '@angular/core';
import { IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxDateTimeEditorDirective, IgxTextSelectionDirective } from 'igniteui-angular';

@Component({
    selector: 'app-datetime-basic',
    styleUrls: ['./datetime-basic.component.scss'],
    templateUrl: './datetime-basic.component.html',
    imports: [IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxDateTimeEditorDirective, IgxTextSelectionDirective]
})
export class DateTimeBasicComponent {
    public date = new Date();
}
