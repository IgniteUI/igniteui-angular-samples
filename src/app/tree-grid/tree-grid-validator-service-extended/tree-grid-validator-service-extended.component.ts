/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Directive, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, ValidatorFn } from '@angular/forms';
import {
    IgxColumnValidator,
    IgxTreeGridComponent
} from 'igniteui-angular';
import { generateEmployeeFlatData, IEmployee } from '../data/employees-flat';

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

    private _testDateRecord(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const date = control.value;
            return date < new Date() ? null : { forbiddenDate: { value: control.value } };
        }
    }
}
