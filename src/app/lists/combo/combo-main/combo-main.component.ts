import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { localData } from './local-data';
import { IgxComboComponent } from 'igniteui-angular/combo';

@Component({
    selector: 'app-combo-main',
    styleUrls: ['./combo-main.component.scss'],
    templateUrl: './combo-main.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxComboComponent]
})

export class ComboMainComponent implements OnInit {
    public lData: any[];

    public ngOnInit() {
        this.lData = localData;
    }
}
