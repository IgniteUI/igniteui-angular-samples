/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Directive, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IgxTreeGridComponent } from 'igniteui-angular';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';

export function minAgeValidator(age: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const isOfAge = age < control.value;
        return isOfAge ? null : { minAge: { value: control.value } } ;
    };
}

@Directive({
    selector: '[minAge]',
    providers: [{ provide: NG_VALIDATORS, useExisting: ForbiddenValidatorDirective, multi: true }]
})
export class ForbiddenValidatorDirective extends Validators {
    @Input('minAge')
    public minAgeValue: number;

    public validate(control: AbstractControl): ValidationErrors | null {
        return this.minAgeValue ? minAgeValidator(this.minAgeValue)(control)
            : null;
    }
}

@Component({
    selector: 'app-tree-grid-validator-service-extended-component',
    styleUrls: ['tree-grid-validator-service-extended.component.scss'],
    templateUrl: 'tree-grid-validator-service-extended.component.html'
})
export class TreeGridValidatorServiceExtendedComponent implements OnInit {
    @ViewChild('treeGrid', { static: true }) public treeGrid: IgxTreeGridComponent;

    public data: IEmployee[];

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
    }

    public formCreateHandler(formGroup: FormGroup) {
        const hireDateRecord = formGroup.get('HireDate');
        hireDateRecord.addValidators(this._testDateRecord())
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

    private _testDateRecord(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const date = control.value;
            return date < new Date() ? null : { forbiddenDate: { value: control.value } };
        }
    }
}
