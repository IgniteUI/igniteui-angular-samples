import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { IComboSelectionChangingEventArgs, IgxToastComponent, VerticalAlignment, IgxComboComponent } from 'igniteui-angular';
import { getHeroWeaponsData, IHeroWeapon } from '../../../data/heroData';

@Component({
    selector: 'app-combo-tailwind-styling',
    styleUrls: ['./combo-tailwind-styling.component.scss'],
    templateUrl: './combo-tailwind-styling.component.html',
    imports: [IgxComboComponent, IgxToastComponent]
})
export class ComboTailwindStylingComponent implements OnInit {
    elem = inject(ElementRef);

    @ViewChild('loadToast', { read: IgxToastComponent, static: true })
    public loadToast: IgxToastComponent;

    public weaponsData: IHeroWeapon[] = [];

    public ngOnInit() {
        this.weaponsData = getHeroWeaponsData();
    }

    public setWeaponsLimit(event: IComboSelectionChangingEventArgs) {
        this.loadToast.positionSettings.verticalDirection = VerticalAlignment.Middle;
        // this.loadToast.autoHide = true;

        if (event.newValue.length > 2) {
            event.cancel = true;
            this.loadToast.open('Choose only two items');
        }
    }
}
