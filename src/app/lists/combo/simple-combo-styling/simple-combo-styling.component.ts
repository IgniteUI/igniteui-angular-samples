import * as core from '@angular/core';
import { City, getCitiesByPopulation } from '../../../data/cities15000-regions-countries';

@core.Component({
    selector: 'app-simple-combo-styling',
    templateUrl: 'simple-combo-styling.component.html',
    styleUrls: ['simple-combo-styling.component.scss']
})
export class SimpleComboStylingComponent implements core.OnInit {
    public cities: City[];
    ngOnInit(): void {
        this.cities = getCitiesByPopulation(10000000);
    }
}
