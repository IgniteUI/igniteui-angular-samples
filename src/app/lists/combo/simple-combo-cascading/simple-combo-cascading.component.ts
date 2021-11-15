import { Component, OnInit } from '@angular/core';
import { ISimpleComboSelectionChangingEventArgs } from 'igniteui-angular';
import { City, Country, getCitiesByCountry, getCountries, Region } from '../../../data/cities15000-regions-countries';

@Component({
    selector: 'app-simple-combo-cascading',
    templateUrl: 'simple-combo-cascading.component.html',
    styleUrls: ['simple-combo-cascading.component.scss']
})
export class SimpleComboCascadingComponent implements OnInit {
    public selectedCountry: Country;
    public selectedRegion: Region;
    public selectedCity: City;
    public countriesData: Country[];
    public regionData: Region[] = [];
    public citiesData: City[] = [];
    ngOnInit(): void {
        this.countriesData = getCountries(['United States', 'Japan', 'United Kingdom']);
    }

    public countryChanging(e: ISimpleComboSelectionChangingEventArgs) {
        this.selectedCountry = e.newSelection as Country;
        this.regionData = getCitiesByCountry([this.selectedCountry?.name])
            .map(c => ({name: c.region, country: c.country}))
            .filter((v, i, a) => a.findIndex(r => r.name === v.name) === i);
        this.selectedRegion = null;
        this.selectedCity = null;
        this.citiesData = [];
    }

    public provinceChanging(e: ISimpleComboSelectionChangingEventArgs) {
        this.selectedRegion = e.newSelection as Region;
        this.citiesData = getCitiesByCountry([this.selectedCountry?.name])
            .filter(c => c.region === this.selectedRegion?.name);
        this.selectedCity = null;
    }
}
