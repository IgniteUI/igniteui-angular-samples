import { Component, OnInit } from '@angular/core';
import { IComboSelectionChangingEventArgs } from 'igniteui-angular';
import { localData } from './local-data';

@Component({
    selector: 'app-combo-single-selection',
    styleUrls: ['./combo-single-selection.component.scss'],
    templateUrl: './combo-single-selection.component.html'
})

export class ComboSingleSelectionComponent implements OnInit {
    public lData: any[];

    public ngOnInit() {
        this.lData = localData;
    }

    public singleSelection(event: IComboSelectionChangingEventArgs) {
      if (event.added.length) {
        event.newSelection = event.added;
      }
    }
}
