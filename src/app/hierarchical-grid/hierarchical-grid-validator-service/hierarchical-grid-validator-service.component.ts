import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxHierarchicalGridComponent } from 'igniteui-angular';
import { CUSTOMERS } from '../../data/hierarchical-data';

@Component({
    selector: 'app-hierarchical-grid-validator-service',
    styleUrls: ['./hierarchical-grid-validator-service.component.scss'],
    templateUrl: './hierarchical-grid-validator-service.component.html'
})
export class HierarchicalGridValidatorServiceComponent implements OnInit {

    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public rowEdit: boolean = false;

    public ngOnInit(): void {
        this.hierarchicalGrid.data = CUSTOMERS;
        for (const item of this.hierarchicalGrid.data) {
            const names = item.CompanyName.split(' ');
            item.FirstName = names[0];
            item.LastName = names[names.length - 1];
            item.FullAddress = `${item.Address}, ${item.City}, ${item.Country}`;
            item.PersonelDetails = `${item.ContactTitle}: ${item.ContactName}`;
            item.CompanysAnnualProfit = (100000 + (Math.random() * Math.floor(1000000))).toFixed(0);
        }
    }

}