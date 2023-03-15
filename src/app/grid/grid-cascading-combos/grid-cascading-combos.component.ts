import { Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IgxGridComponent, IgxLinearProgressBarComponent, IgxSimpleComboComponent, ISimpleComboSelectionChangingEventArgs } from 'igniteui-angular';
import { City, Country, getCitiesByCountry, getCountries, Region } from '../../data/cities15000-regions-countries';
import { DATA } from './data';

@Component({
    selector: 'grid-cascading-combos',
    templateUrl: './grid-cascading-combos.component.html',
    styleUrls: ['./grid-cascading-combos.component.scss']
})
export class GridCascadingCombosComponent implements OnInit {
    @ViewChildren(IgxSimpleComboComponent)
    public combos: QueryList<IgxSimpleComboComponent>;
    @ViewChildren(IgxLinearProgressBarComponent)
    public progressBars: QueryList<IgxLinearProgressBarComponent>;
    @ViewChild('grid1', { read: IgxGridComponent, static: true })
    public grid1: IgxGridComponent;

    public selectedCountry: Country;
    public selectedRegion: Region;
    public selectedCity: City;
    public countriesData: Country[];
    private loadingTime = 0;
    public data;

    public ngOnInit() {
        this.data = DATA;
        this.countriesData = getCountries([
            'United States',
            'Japan',
            'United Kingdom'
        ]);
    }

    public countryChanging(e: ISimpleComboSelectionChangingEventArgs, cell) {
        const ID = cell.row.data.ID;
        const nextRegionCombo = this.combos.filter(
            (combo) => combo.id === 'region-' + ID
        )[0];
        const nextCityCombo = this.combos.filter(
            (combo) => combo.id === 'city-' + ID
        )[0];
        this.clearOldData(cell, nextRegionCombo, nextCityCombo);
        this.selectedCountry = e.newSelection as Country;
        cell.update(e.newSelection ? e.newSelection : '');
        if (e.newSelection) {
            document.getElementById('region-progress-' + ID).style.visibility = 'visible';
            this.loadingTime = 2000;
        }
        setTimeout(() => {
            nextRegionCombo.data = getCitiesByCountry([this.selectedCountry?.name])
                .map((c) => ({ name: c.region, country: c.country }))
                .filter((v, i, a) => a.findIndex((r) => r.name === v.name) === i);
            document.getElementById('region-progress-' + ID).style.visibility = 'hidden';
        }, this.loadingTime);
        this.selectedRegion = null;
        this.selectedCity = null;
        this.loadingTime = 0;
    }

    public regionChanging(e: ISimpleComboSelectionChangingEventArgs, cell) {
        const nextComboID = 'city-' + cell.row.data.ID;
        const cityCombo = this.combos.filter(
            (combo) => combo.id === nextComboID
        )[0];
        this.clearOldData(cell, null, cityCombo);

        this.selectedRegion = e.newSelection as Region;
        cell.update(e.newSelection ? e.newSelection : '');
        if (e.newSelection) {
            document.getElementById(
                'city-progress-' + cell.row.data.ID
            ).style.visibility = 'visible';
            this.loadingTime = 2000;
        }
        setTimeout(() => {
            cityCombo.data = getCitiesByCountry([this.selectedCountry?.name]).filter(
                (c) => c.region === this.selectedRegion?.name
            );
            document.getElementById(
                'city-progress-' + cell.row.data.ID
            ).style.visibility = 'hidden';
        }, this.loadingTime);
        this.selectedCity = null;
        this.loadingTime = 0;
    }

    private clearOldData(cell, RegionCombo, CityCombo) {
        const nextCellIndex = cell.column.visibleIndex + 1;
        cell.row.cells[nextCellIndex].update('');

        if (CityCombo !== null) CityCombo.data = [];
        if (RegionCombo !== null) {
            RegionCombo.data = [];
            cell.row.cells[nextCellIndex + 1].update('');
        }
    }
}
