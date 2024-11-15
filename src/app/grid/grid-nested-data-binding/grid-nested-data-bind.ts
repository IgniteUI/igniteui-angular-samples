import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {EMPLOYEE_DATA} from '../../data/nested-employee-data';

@Component({
    selector: 'app-grid-nested-data-bind',
    styleUrls: ['./grid-nested-data-bind.scss'],
    templateUrl: './grid-nested-data-bind.html',
    standalone: false
})

export class GridNestedDataBindComponent implements OnInit{
    public data;
    constructor(private cdr: ChangeDetectorRef){}

    public ngOnInit() {
        this.data = EMPLOYEE_DATA;
        this.cdr.detectChanges();
    }
}
