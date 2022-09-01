import { Component, Directive, Input, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ok } from 'assert';
import { IgxGridCell, IgxGridComponent, IgxGridRow } from 'igniteui-angular';
import { IgxGridCellComponent } from 'igniteui-angular/lib/grids/cell.component';
import { IgxCell } from 'igniteui-angular/lib/grids/common/crud.service';
import { employeesData } from '../../data/employeesData';

export function calculateDealsRatio(dealsWon, dealsLost) {
    if (dealsLost === 0) return dealsWon + 1;
    return Math.round(dealsWon / dealsLost * 100) / 100;
}

export function employeeValidator(minDealsRatio: number, formGroup: AbstractControl): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        let returnObject = {};
        const createdOnRecord = formGroup.get('created_on');
        const lastActiveRecord = formGroup.get('last_activity');
        const winControl = formGroup.get('deals_won');
        const loseControl = formGroup.get('deals_lost');
        const actualSalesControl = formGroup.get('actual_sales');

        // Validate dates
        const curDate = new Date();
        if (createdOnRecord.value > curDate) {
            // The created on date shouldn't be greater than current date.
            returnObject = { ...returnObject, ...{ createdInvalid: { value: createdOnRecord.value } }};
        }
        if (lastActiveRecord.value > curDate) {
            // The last active date shouldn't be greater than current date.
            returnObject = { ...returnObject, ...{ lastActiveInvalid: { value: lastActiveRecord.value } }};
        }
        if (createdOnRecord.value > lastActiveRecord.value) {
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
        if (dealsRatio < minDealsRatio) {
            returnObject = { ...returnObject, ...{ dealsRatio: { value: dealsRatio } }};
        }
        
        return Object.entries(returnObject).length == 0 ? null : returnObject;
    };
}

@Directive({
    selector: '[employeeValid]',
    providers: [{ provide: NG_VALIDATORS, useExisting: DealsRatioDirective, multi: true }]
})
export class DealsRatioDirective extends Validators {
    @Input('employeeValid')
    public minDealsRatio = 0;

    public validate(control: AbstractControl): ValidationErrors | null {
        const formGroup = control.parent;

        return employeeValidator(this.minDealsRatio, formGroup)(control);
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

    public minDealsRatio = 0;
    public data: any[];
    public employeesData: any[];
    public transactionData = JSON.parse(JSON.stringify(employeesData));

    constructor() {
        this.data = employeesData;
    }

    public formCreateHandler(formGroup: FormGroup) {
        const createdOnRecord = formGroup.get('created_on');
        const lastActiveRecord = formGroup.get('last_activity');
        const rowValid = formGroup.get('row_valid');
        const dealsLost = formGroup.get('deals_lost');
        const dealsWon = formGroup.get('deals_won');
        const actualSales = formGroup.get('actual_sales');
        createdOnRecord.addValidators(this.testDateRecord());
        lastActiveRecord.addValidators(this.testDateRecord());

        // Subscribe to change on cells that are cross validated to show error even while editing.
        // Can be omitted for performance optimization on rowEditDone only.
        createdOnRecord.statusChanges.subscribe(() => {
            rowValid.updateValueAndValidity();
        });
        lastActiveRecord.statusChanges.subscribe(() => {
            rowValid.updateValueAndValidity();
        });
        dealsLost.statusChanges.subscribe(() => {
            rowValid.updateValueAndValidity();
        });
        dealsWon.statusChanges.subscribe(() => {
            rowValid.updateValueAndValidity();
        });
        actualSales.statusChanges.subscribe(() => {
            rowValid.updateValueAndValidity();
        });
    }

    /**
     * Bind this handler to `cellEdit` output of the grid
     * in order to cancel cell editing in case the submitted
     * value is invalid.
     *
     * @param evt
     */

    public cellEdit(evt) {
        if (!evt.valid) {
            evt.cancel = true;
        }
    }

    public commit() {
        const invalidTransactions = this.grid.validation.getInvalid();
        if (invalidTransactions.length > 0) {
            if (confirm('You\'re commiting invalid transactions. Are you sure?')) {
                this.grid.validation.clear();
            }
        } else {
            this.grid.validation.clear();
        }
    }

    private testDateRecord(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const date = control.value;
            if(date > new Date()){
                return { beyondThreshold: { value: control.value } };
            }
            return null;
        }
    }

    public getValidRow(cell: IgxGridCell) {
        const formGroup = this.grid.validation.getFormGroup(cell.id.rowID);
        if (formGroup) {
            return !formGroup.get('row_valid').invalid;
        }
        return true;
    }

    public editEnterHandler(event) {
        this.grid.validation.markAsTouched(event.rowID, 'row_valid');
    }
}
