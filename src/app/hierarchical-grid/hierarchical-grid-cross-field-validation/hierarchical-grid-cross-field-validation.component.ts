import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { IgxGridCell, IgxHierarchicalGridComponent } from 'igniteui-angular';
import { IGridFormGroupCreatedEventArgs } from 'igniteui-angular/lib/grids/common/grid.interface';
import { CUSTOMERS } from '../../data/hierarchical-data';

@Component({
    selector: 'hierarchical-grid-cross-field-validation',
    styleUrls: ['./hierarchical-grid-cross-field-validation.component.scss'],
    templateUrl: 'hierarchical-grid-cross-field-validation.component.html'
})

export class HierarchicalGridValidatorServiceCrossCellComponent implements OnInit {
    public localdata;
    public countryData: Map<string, object>;
    public countries = [];
    public cities = [];

    @ViewChild('hierarchicalGrid', { read: IgxHierarchicalGridComponent })
    public grid: IgxHierarchicalGridComponent;

    constructor() {

    }
    public ngOnInit(): void {
        this.localdata = CUSTOMERS;
        this.countryData = new Map(this.localdata.map(i => [i.Country, {}]));
        this.localdata.forEach(rec => {
            const country = rec.Country;
            const city = rec.City;
            this.countryData.get(country)[city] = city;
        });
        this.countries = [...new Set(this.localdata.map(x => x.Country))];
        this.cities = [...new Set(this.localdata.map(x => x.City))];
    }

    public formCreateCustomerHandler(event: IGridFormGroupCreatedEventArgs) {
        const formGroup = event.formGroup;
        formGroup.addValidators(this.addressValidator());
    }

    public formCreateOrderHandler(event: IGridFormGroupCreatedEventArgs) {
        const formGroup = event.formGroup;
        formGroup.addValidators(this.dateValidator());
    }

    public addressValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const formGroup = control;
            let returnObject = {};
            const city = formGroup.get('City');
            const country = formGroup.get('Country');
            const validCities = this.countryData.get(country.value);
            if (!validCities || !validCities[city.value]) {
                returnObject['invalidAddress'] = true;
            }
            return returnObject;
        }
    }

    public dateValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const formGroup = control;
            let returnObject = {};
            const orderDate = formGroup.get('OrderDate').value;
            const shippedDate = formGroup.get('ShippedDate').value;
            if (new Date(shippedDate) < new Date(orderDate)) {
                returnObject['invalidRange'] = true;
            }
            return returnObject;
        }
    }

    public isRowValid(cell: IgxGridCell) {
        const hasErrors = !!cell.row.errors || cell.row.cells.some(x => !!x.errors);
        return !hasErrors;
    }

    public stateMessage(cell: IgxGridCell) {
        const messages = [];
        const row = cell.row;
        if  (row.errors?.invalidAddress) {
            messages.push('The address information is invalid. City does not match the Country.');
        }
        if  (row.errors?.invalidRange) {
            messages.push('The ShippedDate cannot be before the OrderDate.');
        }
        const cellValidationErrors = row.cells.filter(x => !!x.errors);
        if (cellValidationErrors && cellValidationErrors.length > 0) {
            const fields = cellValidationErrors.map(x => x.column.field).join(',');
            messages.push('The following fields are required: ' + fields);
        }

        if (messages.length === 0) {
            // no errors
            return ['Valid'];
        }
        return messages;
    }

    public commit(grid: IgxHierarchicalGridComponent) {
        const invalidTransactions = grid.validation.getInvalid();
        if (invalidTransactions.length > 0 && !confirm('You\'re commiting invalid transactions. Are you sure?')) {
            return;
        }

        grid.transactions.commit(this.localdata);
        grid.validation.clear();
    }
}
