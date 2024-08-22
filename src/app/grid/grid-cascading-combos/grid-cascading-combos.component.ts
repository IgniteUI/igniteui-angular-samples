import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { IgxSimpleComboComponent, ISimpleComboSelectionChangingEventArgs } from 'igniteui-angular';
import { Country, getCitiesByCountry, getCountries } from '../../data/cities15000-regions-countries';
import { DATA } from '../../data/data';

@Component({
    selector: 'grid-cascading-combos',
    templateUrl: './grid-cascading-combos.component.html',
    styleUrls: ['./grid-cascading-combos.component.scss']
})
export class GridCascadingCombosComponent implements OnInit {
    @ViewChildren(IgxSimpleComboComponent)
    public combos: QueryList<IgxSimpleComboComponent>;

    public selectedCountryName: string;
    public selectedRegionName: string;
    public selectedCityId: number;
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
        cell.row.data.loadingRegion = true;
        const nextRegionCombo = this.combos.filter(
            (combo) => combo.id === 'region-' + ID
        )[0];
        const nextCityCombo = this.combos.filter(
            (combo) => combo.id === 'city-' + ID
        )[0];
        this.clearOldData(cell, nextRegionCombo, nextCityCombo);
        this.selectedCountryName = e.newValue;
        cell.update(e.newValue ? e.newValue : '');
        if (e.newValue) {
            this.loadingTime = 2000;
        }
        setTimeout(() => {
            nextRegionCombo.data = getCitiesByCountry([this.selectedCountryName])
                .map((c) => ({ name: c.region, country: c.country }))
                .filter((v, i, a) => a.findIndex((r) => r.name === v.name) === i);
            cell.row.data.loadingRegion = false;
        }, this.loadingTime);
        this.selectedRegionName = null;
        this.selectedCityId = null;
        this.loadingTime = 0;
    }

    public regionChanging(e: ISimpleComboSelectionChangingEventArgs, cell) {
        const nextComboID = 'city-' + cell.row.data.ID;
        cell.row.data.loadingCity = true;
        const cityCombo = this.combos.filter(
            (combo) => combo.id === nextComboID
        )[0];
        this.clearOldData(cell, null, cityCombo);

        this.selectedRegionName = e.newValue;
        cell.update(e.newValue ? e.newValue : '');
        if (e.newValue) {
            this.loadingTime = 2000;
        }
        setTimeout(() => {
            cityCombo.data = getCitiesByCountry([this.selectedCountryName]).filter(
                (c) => c.region === this.selectedRegionName
            );
            cell.row.data.loadingCity = false;
        }, this.loadingTime);
        this.selectedCityId = null;
        this.loadingTime = 0;
    }
    public cityChanging(e: ISimpleComboSelectionChangingEventArgs, cell) {
        cell.update(e.newValue);
        this.selectedCityId = e.newValue;
    }

    private clearOldData(cell, RegionCombo, CityCombo) {
        const nextCellIndex = cell.column.visibleIndex + 1;
        cell.row.cells[nextCellIndex].update('');

        if (CityCombo !== null) {
            CityCombo.data = [];
        }
        if (RegionCombo !== null) {
            RegionCombo.data = [];
            cell.row.cells[nextCellIndex + 1].update('');
        }
    }
}
