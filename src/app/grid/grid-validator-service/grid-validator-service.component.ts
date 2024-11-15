import { Component } from '@angular/core';
import { employeesData } from '../../data/employeesData';

@Component({
    selector: 'app-grid-validator-service',
    styleUrls: ['./grid-validator-service.component.scss'],
    templateUrl: './grid-validator-service.component.html',
    standalone: false
})
export class GridValidatorServiceComponent {
    public data: any[];
    public employeesData: any[];
    public rowEdit: boolean = true;

    constructor() {
        this.data = employeesData;
    }
}
