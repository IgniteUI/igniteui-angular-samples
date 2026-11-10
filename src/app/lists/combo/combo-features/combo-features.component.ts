import { Component, OnInit } from '@angular/core';
import { IgxComboComponent } from 'igniteui-angular/combo';
import { IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { localData } from './local-data';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-combo',
    styleUrls: ['./combo-features.component.scss'],
    templateUrl: './combo-features.component.html',
    imports: [IgxComboComponent, IgxLabelDirective, IgxSwitchComponent, FormsModule]
})
export class ComboFeaturesComponent implements OnInit{
    public lData: any[];
    public disableFiltering = false;
    public showSearchCaseIcon = false;
    public customValues = false;
    public grouping = false;
    public disabled = false;
    public selection: string[] = [];

    public ngOnInit() {
        this.lData = localData;
    }
}
