import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IComboSelectionChangeEventArgs, IgxToastComponent } from 'igniteui-angular';
import { getHeroWeaponsData, IHeroWeapon } from '../../../data/heroData';

@Component({
    selector: 'app-combo',
    styleUrls: ['./combo-styling.component.scss'],
    templateUrl: './combo-styling.component.html'
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class ComboStyling implements OnInit {
    @ViewChild('loadToast', { read: IgxToastComponent, static: true })
    public loadToast: IgxToastComponent;

    public weaponsData: IHeroWeapon[] = [];

    constructor(public elem: ElementRef) {
    }

    public ngOnInit() {
        this.weaponsData = getHeroWeaponsData();
    }

    public setWeaponsLimit(event: IComboSelectionChangeEventArgs) {
        this.loadToast.position = 'middle';
        // this.loadToast.autoHide = true;

        if (event.newSelection.length > 2) {
            event.cancel = true;
            this.loadToast.show('Choose only two items');
        }
    }
}
