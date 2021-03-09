import { Component } from '@angular/core';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
    selector: 'datetime-basic',
    styleUrls: ['./datetime-basic.component.scss'],
    templateUrl: './datetime-basic.component.html'
})
export class DateTimeBasicComponent {
    public date = new Date();
}
