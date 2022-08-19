import { Component, Directive, Input, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, ValidatorFn } from '@angular/forms';
import { IgxColumnValidator, IgxGridComponent } from 'igniteui-angular';
import { employeesData } from '../../data/employeesData';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = nameRe.test(control.value);
        return forbidden ? { forbiddenName: { value: control.value } } : null;
    };
}

@Directive({
    selector: '[forbiddenName]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true }]
})
export class ForbiddenValidatorDirective extends IgxColumnValidator {
    @Input('forbiddenName')
    public forbiddenNameString = '';

    public validate(control: AbstractControl): ValidationErrors | null {
        return this.forbiddenNameString ? forbiddenNameValidator(new RegExp(this.forbiddenNameString, 'i'))(control)
            : null;
    }
}

@Component({
    selector: 'app-grid-validator-service-extended',
    styleUrls: ['./grid-validator-service-extended.component.scss'],
    templateUrl: './grid-validator-service-extended.component.html'
})
export class GridValidatorServiceExtendedComponent {

    @ViewChild('grid1', { read: IgxGridComponent })
    public grid: IgxGridComponent;

    public data: any[];
    public employeesData: any[];
    public transactionData = JSON.parse(JSON.stringify(employeesData));

    constructor() {
        this.data = employeesData;
    }

    public formCreateHandler(formGroup: FormGroup) {
        const faxRecord = formGroup.get('fax');
        const createdOnRecord = formGroup.get('created_on');
        const lastActiveRecord = formGroup.get('last_activity');
        faxRecord.addValidators(this._testFax());
        createdOnRecord.addValidators(this._testDateRecord());
        lastActiveRecord.addValidators(this._testDateRecord(createdOnRecord.value));
    }

    /**
     * Bind this handler to `cellEdit` output of the grid
     * in order to cancel cell editing in case the submitted
     * value is invalid.
     * 
     * @param evt 
     */
    public cellEdit(evt) {
        if (!evt.isValid) {
            evt.cancel = true;
        }
    }

    public commit() {
        const invalidTransactions = this.grid.transactions.getInvalidTransactionLog();
        if (invalidTransactions.length > 0) {
            if (confirm('You\'re commiting invalid transactions. Are you sure?')) {
                this.grid.transactions.commit(this.transactionData);
            }
        } else {
            this.grid.transactions.commit(this.transactionData);
        }
    }

    private _testFax(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const match = this._regexValidationFunction(control.value, /\+\d{1}\-(?!0)(\d{3})\-(\d{3})\-(\d{4})\b/i);
            return !match ? { forbiddenFax: { value: control.value } } : null;
        }
    }

    private _regexValidationFunction(value: any, rgx: RegExp): boolean {
        const match = rgx?.test(value);
        return !!match;
    }

    private _testDateRecord(thresholdVal?: any): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const date = control.value;
            const exceedingThreshold = !!thresholdVal ? date < thresholdVal : false;
            return !exceedingThreshold ? date < new Date() ? null : { forbiddenDate: { value: control.value } } : { beyondThreshold: { value: control.value } };
        }
    }
}
