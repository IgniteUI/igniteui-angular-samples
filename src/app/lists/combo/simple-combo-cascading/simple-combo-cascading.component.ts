import * as core from '@angular/core';
import { ISimpleComboSelectionChangingEventArgs } from 'igniteui-angular';
import { cities, City, Country, Region } from '../../../data/cities15000-regions-countries';

@core.Component({
    selector: 'app-simple-combo-cascading',
    templateUrl: 'simple-combo-cascading.component.html',
    styleUrls: ['simple-combo-cascading.component.scss']
})
export class SimpleComboCascadingComponent implements core.OnInit {
    public selectedCountry: Country;
    public selectedRegion: Region;
    public selectedCity: City;
    public countriesData: Country[];
    public regionData: Region[] = [];
    public citiesData: City[] = [];
    ngOnInit(): void {
        this.countriesData = cities
            .filter(c => c.population > 100000)
            .filter(c => c.country === 'United States' || c.country === 'Bulgaria' || c.country === 'Japan')
            .map(c => ({ name: c.country }))
            .filter((v, i, a) => a.findIndex(c => c.name === v.name) === i);
    }

    public countryChanging(e: ISimpleComboSelectionChangingEventArgs) {
        // TODO: remove cast to any once arguments are fixed
        this.selectedCountry = (e.newSelection as any) as Country;
        this.regionData = cities
            .filter(c => c.country === this.selectedCountry?.name)
            .map(c => ({name: c.region, country: c.country}))
            .filter((v, i, a) => a.findIndex(r => r.name === v.name) === i);
            this.selectedRegion = null;
            this.selectedCity = null;
            this.citiesData = [];
    }

    public provinceChanging(e: ISimpleComboSelectionChangingEventArgs) {
        // TODO: remove cast to any once arguments are fixed
        this.selectedRegion = (e.newSelection as any) as Region;
        this.citiesData = cities
            .filter(c => c.country === this.selectedRegion?.country && c.region === this.selectedRegion?.name);
        this.selectedCity = null;
    }
}
