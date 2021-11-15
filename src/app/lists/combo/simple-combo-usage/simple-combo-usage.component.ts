import { Component, OnInit } from '@angular/core';
import { City, getCitiesByPopulation } from '../../../data/cities15000-regions-countries';

@Component({
    selector: 'app-simple-combo-usage',
    templateUrl: 'simple-combo-usage.component.html',
    styleUrls: ['simple-combo-usage.component.scss']
})
export class SimpleComboUsageComponent implements OnInit {
    public cities: City[];
    public selectedCity: number;
    ngOnInit(): void {
        this.cities = getCitiesByPopulation(10000000)
            .sort((a, b) => b.population - a.population);
        this.selectedCity = this.cities[0].id;
    }
}
