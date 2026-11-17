import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxSimpleComboComponent } from 'igniteui-angular/simple-combo';
import { IgxInputGroupType } from 'igniteui-angular/input-group';

interface Country {
    id: string;
    name: string;
    region: string;
}

interface DisabledRow {
    label: string;
    type: IgxInputGroupType;
    value?: string;
}

@Component({
    selector: 'app-simple-combo-disabled',
    styleUrls: ['./simple-combo-disabled.component.scss'],
    templateUrl: './simple-combo-disabled.component.html',
    imports: [IgxSimpleComboComponent, FormsModule]
})
export class SimpleComboDisabledComponent {
    public countries: Country[] = [
        { id: 'BY', name: 'Belarus', region: 'Europe' },
        { id: 'BE', name: 'Belgium', region: 'Europe' },
        { id: 'BG', name: 'Bulgaria', region: 'Europe' }
    ];

    public rows: DisabledRow[] = [
        { label: 'Idle', type: 'border', value: undefined },
        { label: 'Filled', type: 'border', value: 'BY' },
        { label: 'Idle', type: 'box', value: undefined },
        { label: 'Filled', type: 'box', value: 'BY' }
    ];
}
