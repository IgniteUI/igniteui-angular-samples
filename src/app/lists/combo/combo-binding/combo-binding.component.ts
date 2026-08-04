import { Component, ViewChild } from '@angular/core';
import { IgxComboComponent } from 'igniteui-angular/combo';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxCardComponent, IgxCardHeaderComponent, IgxCardHeaderSubtitleDirective, IgxCardHeaderTitleDirective } from 'igniteui-angular/card';
import { CITIES, ICity } from './cities';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-combo-binding',
    templateUrl: 'combo-binding.component.html',
    styleUrls: ['combo-binding.component.scss'],
    imports: [IgxComboComponent, FormsModule, IgxButtonDirective, IgxCardComponent, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardHeaderSubtitleDirective]
})
export class ComboBindingComponent {
    @ViewChild('noValueKey', { read: IgxComboComponent })
    public comboNoValueKey: IgxComboComponent;

    public cities: ICity[] = CITIES;
    public selectedNoValueKey: ICity[] = [this.cities[4], this.cities[0]];

    public selectFavorites() {
        const selectedItems: ICity[] = this.cities.filter((e: ICity) => ['UK01', 'BG01', 'JP01', 'DE01'].indexOf(e.id) > -1);
        this.comboNoValueKey.select(selectedItems);
    }
}
