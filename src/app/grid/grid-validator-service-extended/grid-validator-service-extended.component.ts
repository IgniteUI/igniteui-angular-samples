import { Component } from '@angular/core';
import { employeesData } from '../../data/employeesData';

@Component({
    selector: 'app-grid-validator-service-extended',
    styleUrls: ['./grid-validator-service-extended.component.scss'],
    templateUrl: './grid-validator-service-extended.component.html'
})
export class GridValidatorServiceExtendedComponent {
    public data: any[];
    public employeesData: any[];
    public rowEdit: boolean = true;

    constructor() {
        this.data = employeesData;
    }
}
