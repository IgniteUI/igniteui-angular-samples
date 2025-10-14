/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/member-delimiter-style */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { DATA } from '../../../data/nwindData';
import {
    IgxGridComponent,
    IgxGridToolbarComponent,
    IgxGridToolbarTitleComponent,
    IgxSelectComponent,
    IgxSelectItemComponent,
    IgxColumnComponent,
    registerI18n,
    setCurrentI18n
} from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import {
    IGridResourceStrings,
    ResourceStringsEN, ResourceStringsBG, ResourceStringsCS, ResourceStringsDA, ResourceStringsDE,
    ResourceStringsES, ResourceStringsFR, ResourceStringsHU, ResourceStringsIT,
    ResourceStringsJA, ResourceStringsKO, ResourceStringsNB, ResourceStringsNL,
    ResourceStringsPL, ResourceStringsPT, ResourceStringsRO, ResourceStringsSV,
    ResourceStringsTR, ResourceStringsZHHANS, ResourceStringsZHHANT
 } from 'igniteui-i18n-resources';

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
        registerI18n(ResourceStringsEN, 'en');
        registerI18n(ResourceStringsBG, 'bg');
        registerI18n(ResourceStringsCS, 'cs');
        registerI18n(ResourceStringsDA, 'da');
        registerI18n(ResourceStringsDE, 'de');
        registerI18n(ResourceStringsES, 'es');
        registerI18n(ResourceStringsFR, 'fr');
        registerI18n(ResourceStringsHU, 'hu');
        registerI18n(ResourceStringsIT, 'it');
        registerI18n(ResourceStringsJA, 'ja');
        registerI18n(ResourceStringsKO, 'ko');
        registerI18n(ResourceStringsNB, 'nb');
        registerI18n(ResourceStringsNL, 'nl');
        registerI18n(ResourceStringsPL, 'pl');
        registerI18n(ResourceStringsPT, 'pt');
        registerI18n(ResourceStringsRO, 'ro');
        registerI18n(ResourceStringsSV, 'sv');
        registerI18n(ResourceStringsTR, 'tr');
        registerI18n(ResourceStringsZHHANS, 'zh-Hans');
        registerI18n(ResourceStringsZHHANT, 'zh-Hant');
        registerI18n(this.partialCustomHindi, 'hi');

        this.data = DATA;

        // Creating a custom locale (HI) for specific grid strings.
        // Similarly can localize all needed strings in a separate IgxResourceStringsHI file (feel free to contribute)
        this.partialCustomHindi = {
            grid_summary_count: 'गणना',
            grid_summary_min: 'न्यून',
            grid_summary_max: 'अधिक',
            grid_summary_sum: 'योग',
            grid_summary_average: 'औसत'
        };
    }

    public updateLocale() {
        setCurrentI18n(this.locale);
    }
}
