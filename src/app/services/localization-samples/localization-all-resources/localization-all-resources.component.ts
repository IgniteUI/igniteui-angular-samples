/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeBG from '@angular/common/locales/bg';
import localeCS from '@angular/common/locales/cs';
import localeDA from '@angular/common/locales/da';
import localeDE from '@angular/common/locales/de';
import localeEN from '@angular/common/locales/en';
import localeES from '@angular/common/locales/es';
import localeFR from '@angular/common/locales/fr';
import localeHU from '@angular/common/locales/hu';
import localeIT from '@angular/common/locales/it';
import localeJA from '@angular/common/locales/ja';
import localeKO from '@angular/common/locales/ko';
import localeNB from '@angular/common/locales/nb';
import localeNL from '@angular/common/locales/nl';
import localePL from '@angular/common/locales/pl';
import localePT from '@angular/common/locales/pt';
import localeRO from '@angular/common/locales/ro';
import localeSV from '@angular/common/locales/sv';
import localeTR from '@angular/common/locales/tr';
import localeHI from '@angular/common/locales/hi';
import localeHans from '@angular/common/locales/zh-Hans';
import localeHant from '@angular/common/locales/zh-Hant';
import { DATA } from '../../../data/nwindData';
import { IgxGridComponent } from 'igniteui-angular/grids/grid';
import { GridResourceStringsEN, IGridResourceStrings } from 'igniteui-angular/core';
import { IgxColumnComponent, IgxGridToolbarComponent, IgxGridToolbarTitleComponent } from 'igniteui-angular/grids/core';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import {
    IgxResourceStringsBG, IgxResourceStringsCS, IgxResourceStringsDA, IgxResourceStringsDE,
    IgxResourceStringsES, IgxResourceStringsFR, IgxResourceStringsHU, IgxResourceStringsIT,
    IgxResourceStringsJA, IgxResourceStringsKO, IgxResourceStringsNB, IgxResourceStringsNL, IgxResourceStringsPL,
    IgxResourceStringsPT, IgxResourceStringsRO, IgxResourceStringsSV, IgxResourceStringsTR,
    IgxResourceStringsZHHANS, IgxResourceStringsZHHANT
} from 'igniteui-angular-i18n';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-localization-all-resources',
    styleUrls: ['./localization-all-resources.component.scss'],
    templateUrl: 'localization-all-resources.component.html',
    imports: [IgxGridComponent, IgxGridToolbarComponent, IgxGridToolbarTitleComponent, IgxSelectComponent, FormsModule, IgxSelectItemComponent, IgxColumnComponent]
})
export class LocalizationAllResourcesComponent implements OnInit {
    @ViewChild('grid', { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;
    public data: any[];
    public locale: string;
    public locales: { type: string, resource: object }[];
    public selectLocales = [
        'HI', 'BG', 'CS', 'DA', 'DE', 'EN', 'ES', 'FR', 'HU', 'IT', 'JA', 'KO', 'NB', 'NL',
        'PL', 'PT', 'RO', 'SV', 'TR', 'zh-Hans', 'zh-Hant'
    ];
    public partialCustomHindi: IGridResourceStrings;

    constructor() { }
    public ngOnInit(): void {
        registerLocaleData(localeBG);
        registerLocaleData(localeCS);
        registerLocaleData(localeDA);
        registerLocaleData(localeDE);
        registerLocaleData(localeEN);
        registerLocaleData(localeES);
        registerLocaleData(localeFR);
        registerLocaleData(localeHU);
        registerLocaleData(localeIT);
        registerLocaleData(localeJA);
        registerLocaleData(localeKO);
        registerLocaleData(localeNB);
        registerLocaleData(localeNL);
        registerLocaleData(localePL);
        registerLocaleData(localePT);
        registerLocaleData(localeRO);
        registerLocaleData(localeSV);
        registerLocaleData(localeTR);
        registerLocaleData(localeHI);
        registerLocaleData(localeHans);
        registerLocaleData(localeHant);

        this.data = DATA;

        // Creating a custom locale (HI) for specific grid strings.
        // Similarly can localize all needed strings in a separate IgxResourceStringsHI file (feel free to contribute)
        this.partialCustomHindi = {
            igx_grid_summary_count: 'गणना',
            igx_grid_summary_min: 'न्यून',
            igx_grid_summary_max: 'अधिक',
            igx_grid_summary_sum: 'योग',
            igx_grid_summary_average: 'औसत'
        };

        this.locales = [
            { type: 'BG', resource: IgxResourceStringsBG },
            { type: 'CS', resource: IgxResourceStringsCS },
            { type: 'DA', resource: IgxResourceStringsDA },
            { type: 'DE', resource: IgxResourceStringsDE },
            { type: 'ES', resource: IgxResourceStringsES },
            { type: 'FR', resource: IgxResourceStringsFR },
            { type: 'HU', resource: IgxResourceStringsHU },
            { type: 'IT', resource: IgxResourceStringsIT },
            { type: 'JA', resource: IgxResourceStringsJA },
            { type: 'KO', resource: IgxResourceStringsKO },
            { type: 'EN', resource: GridResourceStringsEN },
            { type: 'HI', resource: this.partialCustomHindi },
            { type: 'NB', resource: IgxResourceStringsNB },
            { type: 'NL', resource: IgxResourceStringsNL },
            { type: 'PL', resource: IgxResourceStringsPL },
            { type: 'PT', resource: IgxResourceStringsPT },
            { type: 'RO', resource: IgxResourceStringsRO },
            { type: 'SV', resource: IgxResourceStringsSV },
            { type: 'TR', resource: IgxResourceStringsTR },
            { type: 'zh-Hans', resource: IgxResourceStringsZHHANS },
            { type: 'zh-Hant', resource: IgxResourceStringsZHHANT }
        ];
        this.locale = 'EN';
    }

    public updateLocale() {
        const newLocale = this.locales.find(x => x.type === this.locale).resource;
        this.grid.resourceStrings = newLocale;
    }
}
