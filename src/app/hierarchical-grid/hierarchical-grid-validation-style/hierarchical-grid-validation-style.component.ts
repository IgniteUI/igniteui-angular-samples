import { Component, OnInit } from '@angular/core';
import { SINGERS } from '../../data/singersData';
import { Singer } from '../models';

@Component({
    selector: 'app-hierarchical-grid-validation-style',
    styleUrls: ['./hierarchical-grid-validation-style.component.scss'],
    templateUrl: 'hierarchical-grid-validation-style.component.html'
})

export class HGridValidationStyleComponent {
    public localData: Singer[];

    constructor() {
        this.localData = SINGERS;
    }

    public formatter = (a) => a;
}
