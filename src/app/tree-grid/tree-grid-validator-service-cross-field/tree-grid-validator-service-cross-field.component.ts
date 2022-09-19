/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import {
    ColumnPinningPosition,
    IGridEditEventArgs,
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

    public editHandler(event: IGridEditEventArgs) {
        if (!event.valid) {
            event.cancel = true;
        }
    }

    public formCreateHandler(evt: IGridFormGroupCreatedEventArgs) {
        evt.formGroup.addValidators(this.rowValidator());
    }

    private rowValidator(): ValidatorFn {
        return (formGroup: FormGroup): ValidationErrors | null => {
            let returnObject = {};
            
            const age = formGroup.get('Age');
            const hireDate = formGroup.get('HireDate');
            if((new Date().getFullYear() - new Date(hireDate.value).getFullYear()) + 18 >= age.value) {
                returnObject['ageLessHireDate'] = true;
            }

            const city = formGroup.get('City');
            const country = formGroup.get('Country');
            const validCities = this.countryData.get(country.value);
            if (!validCities || !validCities[city.value]) {
                returnObject['invalidAddress'] = true;
            }

            return returnObject;
        };
    }

    public isRowValid(cell: IgxGridCell) {
        return !cell.row.validation.errors && !cell.row.cells.some(c => !!c.validation.errors);
    }

    public stateMessage(cell: IgxGridCell) {
        const messages = [];

        const cellValidationErrors = cell.row.cells.filter(x => !!x.validation.errors);
        cellValidationErrors.forEach(cell => {
            const cellErrors = cell.validation.errors;
            if (cellErrors?.required) {
                messages.push(`The \`${cell.column.header}\` column is required.`);
            }
            if (cellErrors?.min) {
                messages.push(`A value of at least ${cellErrors.min.min} should be entered for \`${cell.column.header}\` column.`);
            }
            if (cellErrors?.max) {
                messages.push(`A value of at maximum ${cellErrors.max.max} should be entered for \`${cell.column.header}\` column.`);
            }
        });

        const rowErrors = cell.row.validation.errors;
        if (rowErrors?.ageLessHireDate) {
            messages.push(`\`Age\` cannot be less than 18 when the person was hired.`);
        }
        if (rowErrors?.invalidAddress) {
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
