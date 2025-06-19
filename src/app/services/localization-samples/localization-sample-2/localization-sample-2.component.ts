import { Component, OnInit } from '@angular/core';
import { GridResourceStringsEN, TimePickerResourceStringsEN, changei18n, IgxGridComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxTimePickerComponent, IgxLabelDirective } from 'igniteui-angular';
import { DATA } from '../../../data/nwindData';
import { IgxPreventDocumentScrollDirective } from '../../../directives/prevent-scroll.directive';
import { CurrencyPipe } from '@angular/common';

@Component({
    selector: 'app-localization-sample-2',
    styleUrls: ['./localization-sample-2.component.scss'],
    templateUrl: 'localization-sample-2.component.html',
    imports: [IgxGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxCellTemplateDirective, IgxTimePickerComponent, IgxLabelDirective, CurrencyPipe]
})

export class LocalizationSample2Component implements OnInit {

    public data: any[];

    constructor() {}

    public ngOnInit(): void {
        this.data = DATA;

        const currentRS = {
            ...GridResourceStringsEN,
            ...TimePickerResourceStringsEN
        };

        for (const key of Object.keys(currentRS)) {
            if (currentRS[key].indexOf('[Localized]') === -1) {
                currentRS[key] = '[Localized] ' + currentRS[key];
            }
        }

        changei18n(currentRS);
    }
}
