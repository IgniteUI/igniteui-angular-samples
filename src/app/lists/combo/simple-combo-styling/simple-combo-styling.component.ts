import { Component, ElementRef, OnInit, inject } from '@angular/core';
import { City, getCitiesByPopulation } from '../../../data/cities15000-regions-countries';
import { IgxSimpleComboComponent } from 'igniteui-angular/simple-combo';

@Component({
    selector: 'app-simple-combo-styling',
    templateUrl: 'simple-combo-styling.component.html',
    styleUrls: ['simple-combo-styling.component.scss'],
    imports: [IgxSimpleComboComponent]
})
export class SimpleComboStylingComponent implements OnInit {
    element = inject(ElementRef);

    public cities: City[];

    ngOnInit(): void {
        this.cities = getCitiesByPopulation(10000000);
    }
}
