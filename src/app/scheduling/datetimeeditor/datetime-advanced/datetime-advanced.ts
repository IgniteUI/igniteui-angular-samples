import { Component } from '@angular/core';
import { DatePart, IgxInputGroupComponent, IgxInputDirective, IgxDateTimeEditorDirective, IgxSuffixDirective, IgxIconComponent } from 'igniteui-angular';
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
