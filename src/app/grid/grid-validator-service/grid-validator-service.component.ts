import { Component } from '@angular/core';
import { employeesData } from '../../data/employeesData';
import { athletesData } from '../../data/athletesData';

@Component({
    selector: 'app-grid-validator-service',
    styleUrls: ['./grid-validator-service.component.scss'],
    templateUrl: './grid-validator-service.component.html'
})
export class GridValidatorServiceComponent {
    public data: any[];
    public employeesData: any[];
    public rowEdit: boolean = true;

    constructor() {
        this.data = employeesData;
    }

    private generateReadableDate(timestamp: string): Date {
        let dateObj = new Date(timestamp);
        if (isNaN(dateObj.getTime())) {
            dateObj = new Date(timestamp.split(' ')[0]);
        }
        return dateObj;
    }
}
