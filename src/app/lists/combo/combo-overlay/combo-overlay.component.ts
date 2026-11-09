import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OverlaySettings } from 'igniteui-angular/core';
import { IgxComboComponent } from 'igniteui-angular/combo';
import { IgxLabelDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-combo-overlay',
    templateUrl: 'combo-overlay.component.html',
    styleUrls: ['combo-overlay.component.scss'],
    imports: [IgxComboComponent, IgxLabelDirective, FormsModule]
})
export class ComboOverlayComponent {
    public people = [
        { name: 'Ana Petrova', department: 'Engineering' },
        { name: 'Marc Lee', department: 'Engineering' },
        { name: 'Priya Nair', department: 'Engineering' },
        { name: 'Tom Becker', department: 'Engineering' },
        { name: 'Yuki Sato', department: 'Engineering' },
        { name: 'Daniel Kim', department: 'Finance' },
        { name: 'Elena Popescu', department: 'Finance' },
        { name: 'Grace Okafor', department: 'Finance' },
        { name: 'Hugo Martin', department: 'Marketing' },
        { name: 'Isabel Costa', department: 'Marketing' },
        { name: 'Lena Fischer', department: 'Marketing' },
        { name: 'Jonas Berg', department: 'Sales' },
        { name: 'Omar Haddad', department: 'Sales' },
        { name: 'Sofia Rossi', department: 'Sales' }
    ];

    public selectedPeople = ['Ana Petrova', 'Marc Lee'];

    /* Merged over the combo's own settings, so the list still opens below the combo.
       A modal overlay dims the page behind the list, and a click outside closes it. */
    public overlaySettings: OverlaySettings = {
        modal: true,
        closeOnOutsideClick: true
    };
}
