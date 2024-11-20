import { Component, OnInit } from '@angular/core';
import { EMPLOYEE_FLAT_AVATARS_DATA } from '../data/employees-flat-avatars';

@Component({
    selector: 'app-tree-grid-style',
    styleUrls: ['./tree-grid-style.component.scss'],
    templateUrl: './tree-grid-style.component.html',
    standalone: false
})
export class TreeGridStyleComponent implements OnInit {

    public data: any[];

    public ngOnInit() {
        this.data = EMPLOYEE_FLAT_AVATARS_DATA();
    }
}
