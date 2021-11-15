import { Component, OnInit } from '@angular/core';
import { City, getCitiesByPopulation } from '../../../data/cities15000-regions-countries';

@Component({
    selector: 'app-simple-combo-styling',
    templateUrl: 'simple-combo-styling.component.html',
    styleUrls: ['simple-combo-styling.component.scss']
})
export class SimpleComboStylingComponent implements OnInit {
    public cities: City[];
    ngOnInit(): void {
        this.cities = getCitiesByPopulation(10000000);
    }
}
