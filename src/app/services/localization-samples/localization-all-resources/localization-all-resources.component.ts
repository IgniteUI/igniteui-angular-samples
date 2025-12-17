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
    IGridResourceStrings,
    registerI18n,
    setCurrentI18n
} from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import {
    IgxResourceStringsBG, IgxResourceStringsCS, IgxResourceStringsDA, IgxResourceStringsDE,
    IgxResourceStringsES, IgxResourceStringsFR, IgxResourceStringsHU, IgxResourceStringsIT,
    IgxResourceStringsJA, IgxResourceStringsKO, IgxResourceStringsNB, IgxResourceStringsNL,
    IgxResourceStringsPL, IgxResourceStringsPT, IgxResourceStringsRO, IgxResourceStringsSV,
    IgxResourceStringsTR, IgxResourceStringsZHHANS, IgxResourceStringsZHHANT
 } from 'igniteui-angular-i18n';

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
        registerI18n(IgxResourceStringsBG, 'bg');
        registerI18n(IgxResourceStringsCS, 'cs');
        registerI18n(IgxResourceStringsDA, 'da');
        registerI18n(IgxResourceStringsDE, 'de');
        registerI18n(IgxResourceStringsES, 'es');
        registerI18n(IgxResourceStringsFR, 'fr');
        registerI18n(IgxResourceStringsHU, 'hu');
        registerI18n(IgxResourceStringsIT, 'it');
        registerI18n(IgxResourceStringsJA, 'ja');
        registerI18n(IgxResourceStringsKO, 'ko');
        registerI18n(IgxResourceStringsNB, 'nb');
        registerI18n(IgxResourceStringsNL, 'nl');
        registerI18n(IgxResourceStringsPL, 'pl');
        registerI18n(IgxResourceStringsPT, 'pt');
        registerI18n(IgxResourceStringsRO, 'ro');
        registerI18n(IgxResourceStringsSV, 'sv');
        registerI18n(IgxResourceStringsTR, 'tr');
        registerI18n(IgxResourceStringsZHHANS, 'zh-Hans');
        registerI18n(IgxResourceStringsZHHANT, 'zh-Hant');
        registerI18n(this.partialCustomHindi, 'hi');

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
    }

    public updateLocale() {
        setCurrentI18n(this.locale);
    }
}
