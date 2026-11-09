import { Component, ViewChild } from '@angular/core';
import { IgxComboComponent } from 'igniteui-angular/combo';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { CITIES, ICity } from './cities';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-combo-valuekey',
    templateUrl: 'combo-valuekey.component.html',
    styleUrls: ['combo-valuekey.component.scss'],
    imports: [IgxComboComponent, FormsModule, IgxButtonDirective]
})
export class ComboValueKeyComponent {
    @ViewChild('withValueKey', { read: IgxComboComponent })
    public comboValueKey: IgxComboComponent;

    public cities: ICity[] = CITIES;
    public selectedValueKey: string[] = ['UK01', 'BG01'];

    public selectFavorites() {
        this.comboValueKey.select(['UK01', 'BG01', 'JP01', 'DE01']);
    }
}
