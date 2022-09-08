/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import {
    ColumnPinningPosition,
    IgxGridCell,
    IgxTreeGridComponent,
    IPinningConfig
} from 'igniteui-angular';
import { IGridFormGroupCreatedEventArgs } from 'igniteui-angular/lib/grids/common/grid.interface';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';

@Component({
    selector: 'app-tree-grid-validator-service-cross-field-component',
    styleUrls: ['tree-grid-validator-service-cross-field.component.scss'],
    templateUrl: 'tree-grid-validator-service-cross-field.component.html'
})
export class TreeGridValidatorServiceCrossFieldComponent implements OnInit {
    @ViewChild('treeGrid', { static: true })
    public treeGrid: IgxTreeGridComponent;

    public rowEdit: boolean = false;
    public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };

    public data: any[];
    public countryData: Map<string, object>;
    public countries = [];
    public cities = [];

    public ngOnInit(): void {
        this.data = generateEmployeeDetailedFlatData();
        this.countryData = new Map(this.data.map(i => [i.Country, {}]));
        this.data.forEach(rec => {
            const country = rec.Country;
            const city = rec.City;
            this.countryData.get(country)[city] = city;
        });
        this.countries = [...new Set(this.data.map(x => x.Country))];
        this.cities = [...new Set(this.data.map(x => x.City))];
    }

    public formCreateHandler(evt: IGridFormGroupCreatedEventArgs) {
        evt.formGroup.addValidators(this.rowValidator());
    }

    private rowValidator(): ValidatorFn {
        return (formGroup: FormGroup): ValidationErrors | null => {
            let returnObject = {};
            
            const age = formGroup.get('Age');
            const hireDate = formGroup.get('HireDate');
            if(new Date().getFullYear() - new Date(hireDate.value).getFullYear() >= age.value) {
                returnObject['ageLessHireDate'] = true;
            }

            const city = formGroup.get('City');
            const country = formGroup.get('Country');
            const validCities = this.countryData.get(country.value);
            if (!validCities || !validCities[city.value]) {
                returnObject['invalidAddress'] = true;
            }

            return Object.entries(returnObject).length === 0 ? null : returnObject;
        };
    }

    public isRowValid(cell: IgxGridCell) {
        return !cell.row.errors && !cell.row.cells.some(c => !!c.errors);
    }

    public stateMessage(cell: IgxGridCell) {
        const messages = [];
        const row = cell.row;
        const cellValidationErrors = row.cells.filter(x => !!x.errors);
        cellValidationErrors.forEach(cell => {
            if (cell.errors) {
                if (cell.errors.required) {
                    messages.push(`The \`${cell.column.header}\` column is required.`);
                }
                if (cell.errors.min) {
                    messages.push(`A value of at least ${cell.errors.min.min} should be entered for \`${cell.column.header}\` column.`);
                }
            }
        });

        if (row.errors?.ageLessHireDate) {
            messages.push(`\`Age\` cannot be less than the hire duration.`);
        }
        if (row.errors?.invalidAddress) {
            messages.push(`Selected \`City\` does not match the \`Country\`.`);
        }

        if (messages.length === 0 && this.isRowValid(cell)) {
            messages.push('OK');
        }

        return messages;
    }

    
    public commit() {
        const invalidTransactions = this.treeGrid.validation.getInvalid();
        if (invalidTransactions.length > 0 && !confirm('You\'re committing invalid transactions. Are you sure?')) {
            return;
        } 

        this.treeGrid.transactions.commit(this.data);
        this.treeGrid.validation.clear();
    }
}
