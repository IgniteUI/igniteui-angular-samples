import { Component } from '@angular/core';
import { DatePart } from 'igniteui-angular/core';
import { IgxInputDirective, IgxInputGroupComponent, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxDateTimeEditorDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-datetime-advanced',
    styleUrls: ['./datetime-advanced.scss'],
    templateUrl: './datetime-advanced.html',
    imports: [IgxInputGroupComponent, FormsModule, IgxInputDirective, IgxDateTimeEditorDirective, IgxSuffixDirective, IgxIconComponent]
})

export class DateTimeAdvancedComponent {
    public date = new Date((new Date()).setHours(9, 0, 0, 0));
    public datePart: typeof DatePart = DatePart;
}
