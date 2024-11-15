import { Component } from '@angular/core';
import { EMPLOYEE_FLAT_AVATARS_DATA } from '../data/employees-flat-avatars';

@Component({
    selector: 'app-tree-grid-toolbar-style',
    styleUrls: ['./tree-grid-toolbar-style.component.scss'],
    templateUrl: './tree-grid-toolbar-style.component.html',
    standalone: false
})
export class TreeGridToolbarStyleComponent {

    public data: any[];

    constructor() {
        this.data = EMPLOYEE_FLAT_AVATARS_DATA();
    }
}
