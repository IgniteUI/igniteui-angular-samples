import { Component, OnInit } from '@angular/core';
import { ISimpleComboSelectionChangingEventArgs, IgxSimpleComboComponent, IgxLinearProgressBarComponent } from 'igniteui-angular';
import { City, Country, getCitiesByCountry, getCountries, Region } from '../../../data/cities15000-regions-countries';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-simple-combo-cascading',
    templateUrl: 'simple-combo-cascading.component.html',
    styleUrls: ['simple-combo-cascading.component.scss'],
    imports: [IgxSimpleComboComponent, FormsModule, NgIf, IgxLinearProgressBarComponent]
})
export class SimpleComboCascadingComponent implements OnInit {
    public selectedCountry: Country;
    public selectedRegion: Region;
    public selectedCity: City;
    public countriesData: Country[];
    public regionData: Region[] = [];
    public citiesData: City[] = [];
    public isLoadingRegions: boolean = false;
    public isLoadingCities: boolean = false;
    private loadingTime = 0;

    public ngOnInit(): void {
        this.countriesData = getCountries(['United States', 'Japan', 'United Kingdom']);
    }

    public countryChanging(e: ISimpleComboSelectionChangingEventArgs) {
        this.selectedCountry = e.newValue as Country;
        if (e.newValue){
            this.regionData = [];
            this.isLoadingRegions = true;
            this.loadingTime = 2000;
        } else {
            this.selectedRegion = undefined;
            this.selectedCity = undefined;
        }
        setTimeout(() => {
            this.regionData = getCitiesByCountry([this.selectedCountry?.name])
            .map(c => ({name: c.region, country: c.country}))
            .filter((v, i, a) => a.findIndex(r => r.name === v.name) === i);
            this.isLoadingRegions = false;
        }, this.loadingTime)
        this.citiesData = [];
        this.loadingTime = 0;
    }

    public regionChanging(e: ISimpleComboSelectionChangingEventArgs) {
        this.selectedRegion = e.newValue as Region;
        if (e.newValue){
            this.citiesData = [];
            this.isLoadingCities = true;
            this.loadingTime = 2000;
        } else {
            this.selectedCity = undefined;
        }
        setTimeout(() => {
            this.citiesData = getCitiesByCountry([this.selectedCountry?.name])
            .filter(c => c.region === this.selectedRegion?.name);
            this.isLoadingCities = false;
        }, this.loadingTime)
        this.loadingTime = 0;
    }
}
