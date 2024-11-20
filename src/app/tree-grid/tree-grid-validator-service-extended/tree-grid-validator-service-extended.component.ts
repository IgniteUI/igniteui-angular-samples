/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Directive, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IgxTreeGridComponent, IgxColumnComponent, IgxColumnMinValidatorDirective, IgxColumnRequiredValidatorDirective, IgxColumnMaxValidatorDirective, IgxCellValidationErrorDirective, IgxButtonDirective } from 'igniteui-angular';
import { IGridFormGroupCreatedEventArgs } from 'igniteui-angular/lib/grids/common/grid.interface';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';
import { NgTemplateOutlet, NgIf } from '@angular/common';

export function phoneFormatValidator(phoneReg: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const match = phoneReg.test(control.value);
        return match ? null : { phoneFormat: { value: control.value } } ;
    }
}

@Directive({
    selector: '[phoneFormat]',
    providers: [{ provide: NG_VALIDATORS, useExisting: TGridPhoneFormatDirective, multi: true }]
})
export class TGridPhoneFormatDirective extends Validators {
    @Input('phoneFormat')
    public phoneFormatString = '';

    public validate(control: AbstractControl): ValidationErrors | null {
        return this.phoneFormatString ? phoneFormatValidator(new RegExp(this.phoneFormatString, 'i'))(control)
            : null;
    }
}

@Component({
    selector: 'app-tree-grid-validator-service-extended-component',
    styleUrls: ['tree-grid-validator-service-extended.component.scss'],
    templateUrl: 'tree-grid-validator-service-extended.component.html',
    imports: [IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnMinValidatorDirective, IgxColumnRequiredValidatorDirective, IgxColumnMaxValidatorDirective, TGridPhoneFormatDirective, IgxCellValidationErrorDirective, NgTemplateOutlet, NgIf, IgxButtonDirective]
})
export class TreeGridValidatorServiceExtendedComponent implements OnInit {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;

    public data: IEmployee[];

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }

    public formCreateHandler(formGroupArgs: IGridFormGroupCreatedEventArgs) {
        const hireDateRecord = formGroupArgs.formGroup.get('HireDate');
        hireDateRecord.addValidators([this.futureDateValidator(), this.pastDateValidator()]);
    }

    public commit() {
        const invalidTransactions = this.treeGrid.validation.getInvalid();
        if (invalidTransactions.length > 0 && !confirm('You\'re committing invalid transactions. Are you sure?')) {
            return;
        }

        this.treeGrid.transactions.commit(this.data);
        this.treeGrid.validation.clear();
    }

    public undo() {
        /* exit edit mode and commit changes */
        this.treeGrid.endEdit(true);
        this.treeGrid.transactions.undo();
    }

    public redo() {
        /* exit edit mode and commit changes */
        this.treeGrid.endEdit(true);
        this.treeGrid.transactions.redo();
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
            let pastDate = new Date('Sept 1 2004');
            if(pastDate){
                return pastDate < date ? null : { pastDate: { value: control.value } }
            } else return null;
        }
    }
}
