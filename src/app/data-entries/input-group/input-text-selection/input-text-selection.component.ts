import { Component } from '@angular/core';

@Component({
    selector: 'app-input-text-selection',
    templateUrl: './input-text-selection.component.html',
    styleUrls: ['./input-text-selection.component.scss'],
    standalone: false
})
export class InputTextSelectionComponent {

    public person;
    public isFocused;
    constructor() {
        this.person = {
            fullName: 'John Doe',
            email: 'jd@email.com'
        };
        this.isFocused = !!this.person.fullName;
    }

}
