import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { registerLocaleData } from "@angular/common";
import localeEN from '@angular/common/locales/en';
import localeDE from '@angular/common/locales/de';
import localeES from '@angular/common/locales/es';
import localeFR from '@angular/common/locales/fr';
import localeIT from '@angular/common/locales/it';
import localeJA from '@angular/common/locales/ja';
import localeKO from '@angular/common/locales/ko';
import localeHans from '@angular/common/locales/zh-Hans';
import localeHant from '@angular/common/locales/zh-Hant';
import { DATA } from "../../data/nwindData";
import { IgxGridComponent, IResourceStrings, changei18n, getCurrentResourceStrings } from "igniteui-angular";
// igniteui-angular-i18n package resource strings
import {
    IgxResourceStringsDE, IgxResourceStringsES, IgxResourceStringsFR, IgxResourceStringsIT,
    IgxResourceStringsJA, IgxResourceStringsKO, IgxResourceStringsZHHANS, IgxResourceStringsZHHANT
} from "igniteui-angular-i18n";

@Component({
    selector: "localization-all-resources",
    styleUrls: ["./localization-all-resources.component.scss"],
    templateUrl: "localization-all-resources.component.html"
})

export class LocalizationAllResourcesComponent implements OnInit, OnDestroy {
    @ViewChild("grid", { read: IgxGridComponent, static: true })
    public grid: IgxGridComponent;
    public data: any[];
    public locale: string;
    public locales: { type: string, resource: object }[];
    public selectLocales = ["EN", "DE", "ES", "FR", "IT", "JA", "KO", "zh-Hans", "zh-Hant"];
    public cashedLocalizationEN: IResourceStrings;

    constructor() { }
    public ngOnInit(): void {
        registerLocaleData(localeEN);
        registerLocaleData(localeDE);
        registerLocaleData(localeES);
        registerLocaleData(localeFR);
        registerLocaleData(localeIT);
        registerLocaleData(localeJA);
        registerLocaleData(localeKO);
        registerLocaleData(localeHans);
        registerLocaleData(localeHant);
        this.data = DATA;
        this.cashedLocalizationEN = Object.assign({}, getCurrentResourceStrings());

        this.locales = [
            { type: "DE", resource: IgxResourceStringsDE },
            { type: "ES", resource: IgxResourceStringsES },
            { type: "FR", resource: IgxResourceStringsFR },
            { type: "IT", resource: IgxResourceStringsIT },
            { type: "JA", resource: IgxResourceStringsJA },
            { type: "KO", resource: IgxResourceStringsKO },
            { type: "zh-Hans", resource: IgxResourceStringsZHHANS },
            { type: "zh-Hant", resource: IgxResourceStringsZHHANT },
            { type: "EN", resource: this.cashedLocalizationEN }
        ];

        this.locale = "EN";
    }

    public updateLocale() {
        const newLocale = this.locales.find(x => x.type === this.locale).resource;
        changei18n(newLocale);
    }

    // Required only for Infragistics documentation page
    public ngOnDestroy(): void {
        changei18n(this.cashedLocalizationEN);
    }
}
