import { Component, Directive, Input, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IgxGridComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent, IgxColumnRequiredValidatorDirective, IgxColumnEmailValidatorDirective, IgxCellValidationErrorDirective, IgxColumnMinValidatorDirective, IgxButtonDirective, IGridFormGroupCreatedEventArgs } from 'igniteui-angular';
import { employeesData } from '../../data/employeesData';
import { NgTemplateOutlet, DatePipe } from '@angular/common';

export function phoneFormatValidator(phoneReg: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const match = phoneReg.test(control.value);
        return match ? null : { phoneFormat: { value: control.value } } ;
    }
}

@Directive({
    selector: '[phoneFormat]',
    providers: [{ provide: NG_VALIDATORS, useExisting: PhoneFormatDirective, multi: true }]
})
export class PhoneFormatDirective extends Validators {
    @Input('phoneFormat')
    public phoneFormatString = '';

    public validate(control: AbstractControl): ValidationErrors | null {
        return this.phoneFormatString ? phoneFormatValidator(new RegExp(this.phoneFormatString, 'i'))(control)
            : null;
    }
}

@Component({
    selector: 'app-grid-validator-service-extended',
    styleUrls: ['./grid-validator-service-extended.component.scss'],
    templateUrl: './grid-validator-service-extended.component.html',
    imports: [IgxGridComponent, IgxColumnComponent, IgxCellTemplateDirective, IgxAvatarComponent, IgxColumnRequiredValidatorDirective, IgxColumnEmailValidatorDirective, PhoneFormatDirective, IgxCellValidationErrorDirective, NgTemplateOutlet, IgxColumnMinValidatorDirective, IgxButtonDirective, DatePipe]
})
export class GridValidatorServiceExtendedComponent {

    @ViewChild('grid1', { read: IgxGridComponent })
    public grid: IgxGridComponent;

    public data = employeesData;

    public formCreateHandler(formGroupArgs: IGridFormGroupCreatedEventArgs) {
        const createdOnRecord = formGroupArgs.formGroup.get('created_on');
        const lastActiveRecord = formGroupArgs.formGroup.get('last_activity');
        createdOnRecord.addValidators(this.futureDateValidator());
        lastActiveRecord.addValidators([this.pastDateValidator(), this.futureDateValidator()]);
    }

    public commit() {
        const invalidTransactions = this.grid.validation.getInvalid();
        if (invalidTransactions.length > 0 && !confirm('You\'re committing invalid transactions. Are you sure?')) {
            return;
        }

        this.grid.transactions.commit(this.data);
        this.grid.validation.clear();
    }

    public undo() {
        /* exit edit mode and commit changes */
        this.grid.endEdit(true);
        this.grid.transactions.undo();
    }

    public redo() {
        /* exit edit mode and commit changes */
        this.grid.endEdit(true);
        this.grid.transactions.redo();
    }

    public futureDateValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const date = control.value;
            if(date > new Date()){
                return { futureDate: { value: control.value } };
            }
            return null;
        }
    }

    public pastDateValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const date = control.value;
            let pastDate = new Date('Nov 5 2010');
            if(pastDate){
                return pastDate < date ? null : { pastDate: { value: control.value } }
            } else return null;
        }
    }
}
