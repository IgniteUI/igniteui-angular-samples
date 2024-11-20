import { Component, OnInit } from '@angular/core';
import { City, getCitiesByPopulation } from '../../../data/cities15000-regions-countries';
import { IgxSimpleComboComponent } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-simple-combo-usage',
    templateUrl: 'simple-combo-usage.component.html',
    styleUrls: ['simple-combo-usage.component.scss'],
    imports: [IgxSimpleComboComponent, FormsModule, NgIf]
})
export class SimpleComboUsageComponent implements OnInit {
    public cities: City[];
    public selectedCity: number;

    public ngOnInit(): void {
        this.cities = getCitiesByPopulation(10000000);
        this.selectedCity = this.cities[0].id;
    }
}
