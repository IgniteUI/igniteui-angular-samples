import { Component } from '@angular/core';
import { IgxColumnComponent } from 'igniteui-angular';
import { SINGERS } from '../../data/singersData';

@Component({
    selector: 'app-hierarchical-grid-styling',
    styleUrls: ['./hierarchical-grid-styling.component.scss'],
    templateUrl: 'hierarchical-grid-styling.component.html'
})

export class HGridStylingComponent {
    public localdata;
    public col: IgxColumnComponent;
    public pWidth: string;
    public nWidth: string;

    constructor() {
        this.localdata = SINGERS;
    }

    public onResize(event) {
        this.col = event.column;
        this.pWidth = event.prevWidth;
        this.nWidth = event.newWidth;
    }

    public formatter = (a) => a;
}
