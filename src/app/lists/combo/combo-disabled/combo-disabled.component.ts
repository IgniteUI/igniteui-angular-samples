import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxComboComponent } from 'igniteui-angular/combo';
import { IgxInputGroupType } from 'igniteui-angular/input-group';

interface Country {
    id: string;
    name: string;
    region: string;
}

interface DisabledRow {
    label: string;
    type: IgxInputGroupType;
    value: string[];
}

@Component({
    selector: 'app-combo-disabled',
    styleUrls: ['./combo-disabled.component.scss'],
    templateUrl: './combo-disabled.component.html',
    imports: [IgxComboComponent, FormsModule]
})
export class ComboDisabledComponent {
    public countries: Country[] = [
        { id: 'BY', name: 'Belarus', region: 'Europe' },
        { id: 'BE', name: 'Belgium', region: 'Europe' },
        { id: 'BG', name: 'Bulgaria', region: 'Europe' }
    ];

    public rows: DisabledRow[] = [
        { label: 'Idle', type: 'border', value: [] },
        { label: 'Filled', type: 'border', value: ['BY', 'BE'] },
        { label: 'Idle', type: 'box', value: [] },
        { label: 'Filled', type: 'box', value: ['BY', 'BE'] }
    ];
}
