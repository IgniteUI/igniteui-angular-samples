import { Component, Directive, Input, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IgxGridCell, IgxGridComponent, IgxGridRow } from 'igniteui-angular';
import { IgxGridCellComponent } from 'igniteui-angular/lib/grids/cell.component';
import { IgxCell } from 'igniteui-angular/lib/grids/common/crud.service';
import { employeesData } from '../../data/employeesData';

export function calculateDealsRatio(dealsWon, dealsLost) {
    if (dealsLost === 0) return dealsWon + 1;
    return Math.round(dealsWon / dealsLost * 100) / 100;
}

export function dealsRatioValidator(minDealsRatio, dealsRatio, estimatedSale): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (estimatedSale === 0 && dealsRatio > 0) {
            return { estimatedSalesZero: { value: control.value } };
        }
        return dealsRatio > minDealsRatio ? null : { dealsRatio: { value: control.value } };
    };
}


@Directive({
    selector: '[dealsRatio]',
    providers: [{ provide: NG_VALIDATORS, useExisting: DealsRatioDirective, multi: true }]
})
export class DealsRatioDirective extends Validators {
    @Input('dealsRatio')
    public minDealsRatio = 0;

    public validate(control: AbstractControl): ValidationErrors | null {
        const formGroup = control.parent;
        const winControl = formGroup.get('deals_won');
        const loseControl = formGroup.get('deals_lost');
        const estimatedControl = formGroup.get('estimated_sales');
        return dealsRatioValidator(this.minDealsRatio, calculateDealsRatio(winControl.value, loseControl.value), estimatedControl.value)(control);
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
        const dealsRatio = formGroup.get('deals_ratio');
        const dealsLost = formGroup.get('deals_lost');
        const dealsWon = formGroup.get('deals_won');
        const estimatedSales = formGroup.get('estimated_sales');
        createdOnRecord.addValidators(this._testDateRecord());
        lastActiveRecord.addValidators(this._testDateRecord(createdOnRecord.value));
        dealsLost.statusChanges.subscribe(() => {
            dealsRatio.updateValueAndValidity();
        });
        dealsWon.statusChanges.subscribe(() => {
            dealsRatio.updateValueAndValidity();
        });
        estimatedSales.statusChanges.subscribe(() => {
            dealsRatio.updateValueAndValidity();
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

    public _testDateRecord(thresholdVal?: any): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const date = control.value;
            if(date > new Date()){
                return { beyondThreshold: { value: control.value } };
            }
            if(thresholdVal){
                return thresholdVal < date ? null : { priorThreshold: { value: control.value } }
            }
            return null;
        }
    }

    public getDealsRatio(cell: IgxGridCell) {
        const formGroup = this.grid.validation.getFormGroup(cell.id.rowID);
        if (formGroup) {
            return calculateDealsRatio(formGroup.get('deals_won').value, formGroup.get('deals_lost').value);
        }
        return calculateDealsRatio(cell.row.data['deals_won'], cell.row.data['deals_lost']);
    }

    public editEnterHandler(event) {
        this.grid.validation.markAsTouched(event.rowID, 'deals_ratio');
    }
}
