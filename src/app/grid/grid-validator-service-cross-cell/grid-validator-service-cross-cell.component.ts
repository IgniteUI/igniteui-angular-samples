import { Component, Directive, Input, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ok } from 'assert';
import { IgxGridCell, IgxGridComponent, IgxGridRow } from 'igniteui-angular';
import { IgxGridCellComponent } from 'igniteui-angular/lib/grids/cell.component';
import { IgxCell } from 'igniteui-angular/lib/grids/common/crud.service';
import { IGridFormGroupCreatedEventArgs } from 'igniteui-angular/lib/grids/common/grid.interface';
import { forEach } from 'jszip';
import { employeesData } from '../../data/employeesData';

export function calculateDealsRatio(dealsWon, dealsLost) {
    if (dealsLost === 0) return dealsWon + 1;
    return Math.round(dealsWon / dealsLost * 100) / 100;
}

export function employeeValidator(formGroup: FormGroup): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        let returnObject = formGroup.valid ? {} :  { columnErrors: []};

         // Get single cell errors for grid columns
        if (!formGroup.valid) {
            Object.keys(formGroup.controls).forEach(controlKey => {
                const formControl = formGroup.get(controlKey);
                if (formControl.invalid && formControl.errors) {
                    returnObject.columnErrors.push({column: controlKey, errors: formControl.errors });
                }
            });
        }

        // Cross cell validation
        const createdOnRecord = formGroup.get('created_on');
        const lastActiveRecord = formGroup.get('last_activity');
        const winControl = formGroup.get('deals_won');
        const loseControl = formGroup.get('deals_lost');
        const actualSalesControl = formGroup.get('actual_sales');

        // Validate dates
        const curDate = new Date();
        if (new Date(createdOnRecord.value) > curDate) {
            // The created on date shouldn't be greater than current date.
            returnObject = { ...returnObject, ...{ createdInvalid: { value: createdOnRecord.value } }};
        }
        if (new Date(lastActiveRecord.value) > curDate) {
            // The last active date shouldn't be greater than current date.
            returnObject = { ...returnObject, ...{ lastActiveInvalid: { value: lastActiveRecord.value } }};
        }
        if (new Date(createdOnRecord.value) > new Date(lastActiveRecord.value)) {
            // The created on date shouldn't be greater than last active date.
            returnObject = { ...returnObject, ...{ createdLastActiveInvalid: { value: createdOnRecord.value } }};
        }
        
        // Validate deals
        const dealsRatio = calculateDealsRatio(winControl.value, loseControl.value);
        if (actualSalesControl.value === 0 && dealsRatio > 0) {
            returnObject = { ...returnObject, ...{ salesZero: { value: actualSalesControl.value } }};
        }
        if (actualSalesControl.value > 0 && dealsRatio == 0 ) {
            returnObject = { ...returnObject, ...{ salesNotZero: { value: actualSalesControl.value } }};
        }
        
        return Object.entries(returnObject).length === 0 ? null : returnObject;
    };
}

@Directive({
    selector: '[validEmployee]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ValidEmployeeDirective, multi: true }]
})
export class ValidEmployeeDirective extends Validators {
    public validate(control: AbstractControl): ValidationErrors | null {
        const formGroup = control.parent as FormGroup;
        return employeeValidator(formGroup)(control);
    }
}

@Component({
    selector: 'app-grid-validator-service-cross-cell',
    styleUrls: ['./grid-validator-service-cross-cell.component.scss'],
    templateUrl: './grid-validator-service-cross-cell.component.html'
})
export class GridValidatorServiceCrossCellComponent {

    @ViewChild('grid1', { read: IgxGridComponent })
    public grid: IgxGridComponent;
    public columns = new Map([
        [ 'name', { header: 'Name' }],
        [ 'company', { header: 'Company' }],
        [ 'country', { header: 'Country' }],
        [ 'city', { header: 'City' }], 
        [ 'email', { header: 'Email' }],
        [ 'created_on', { header: 'Date of Registration' }],
        [ 'last_activity', { header: 'Last Active' }],
        [ 'estimated_sales', { header: 'Estimated Sales' }],
        [ 'actual_sales', { header: 'Actual Sales' }],
        [ 'deals_lost', { header: 'Deals Lost' }],
        [ 'deals_won', { header: 'Deals Won' }],
        [ 'deals_ratio', { header: 'Deals Ratio' }]
    ]);

    public minDealsRatio = 0;
    public transactionData = JSON.parse(JSON.stringify(employeesData));

    constructor() {
    }

    public formCreateHandler(evt: IGridFormGroupCreatedEventArgs) {
        const createdOnRecord = evt.formGroup.get('created_on');
        const lastActiveRecord = evt.formGroup.get('last_activity');
        createdOnRecord.addValidators(this.futureDateValidator());
        lastActiveRecord.addValidators(this.futureDateValidator());
    }

    public commit() {
        const invalidTransactions = this.grid.validation.getInvalid();
        if (invalidTransactions.length > 0 && !confirm('You\'re commiting invalid transactions. Are you sure?')) {
            return;
        } 

        this.grid.transactions.commit(this.transactionData);
        this.grid.validation.clear();
    }

    public getDealsRatio(cell: IgxGridCell) {
        const formGroup = this.grid.validation.getFormGroup(cell.id.rowID);
        if (formGroup) {
            // This will update the value runtime during edit of any of the related columns
            return calculateDealsRatio(formGroup.get('deals_won').value, formGroup.get('deals_lost').value);
        }
        return calculateDealsRatio(cell.row.data['deals_won'], cell.row.data['deals_lost']);
    }

    private futureDateValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const date = control.value;
            if(date > new Date()){
                return { beyondThreshold: { value: control.value } };
            }
            return null;
        }
    }

    public isRowValid(rowID: string) {
        const formGroup = this.grid.validation.getFormGroup(rowID);
        if (formGroup) {
            return !formGroup.get('row_valid').invalid;
        }
        return true;
    }

    public editEnterHandler(event) {
        // To trigger the validator for the row valid cell, we need to mark it as touch
        this.grid.validation.markAsTouched(event.rowID, 'row_valid');
    }

    public editEndHandler(event) {
        // If the edit is ended(canceled or confirmed), we need to trigger the validator row valid cell again
        this.grid.validation.getFormGroup(event.rowID).get('row_valid').updateValueAndValidity();
    }

    public getColumnHeader(columnField: string): string {
        return this.columns.get(columnField).header;
    }
}
