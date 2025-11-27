import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxFocusDirective, IgxTextSelectionDirective } from 'igniteui-angular/directives';

@Component({
    selector: 'app-input-text-selection',
    templateUrl: './input-text-selection.component.html',
    styleUrls: ['./input-text-selection.component.scss'],
    imports: [FormsModule, IgxInputGroupComponent, IgxInputDirective, IgxTextSelectionDirective, IgxLabelDirective, IgxFocusDirective]
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
