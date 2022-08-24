import { Component, Directive, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, ValidatorFn } from '@angular/forms';
import { IgxColumnValidator, IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { SINGERS } from '../../data/singersData';
import { Singer } from '../models';
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
    selector: 'app-hierarchical-grid-validator-service-extended',
    styleUrls: ['./hierarchical-grid-validator-service-extended.component.scss'],
    templateUrl: './hierarchical-grid-validator-service-extended.component.html'
})
export class HierarchicalGridValidatorServiceExtendedComponent implements OnInit {
    @ViewChild('childGrid', { static: true })
    private childGrid: IgxRowIslandComponent;

    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public data: Singer[];

    public rowEdit: boolean = false;

    constructor() { }

    public ngOnInit(): void {
        this.data = SINGERS;
    }

    public formatter = a => a;

    public formCreateHandler(formGroup: FormGroup) {
        const debutRecord = formGroup.get('Debut');
        const launchDateRecord = formGroup.get('LaunchDate');
        debutRecord?.addValidators(this._validateDate());
        launchDateRecord?.addValidators(this._validateDate(debutRecord));
    }

    private _validateDate(debutRecord?: AbstractControl): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (typeof control.value === 'number') {
                if (control.value >= 1870 && control.value <= new Date().getFullYear()) {
                    return null;
                } else {
                    return { invalidYear: { value: control.value } };
                }
            }
            if (control.value instanceof Date) {
                if (control.value <= new Date()) {
                    return null;
                } else {
                    return { invalidAlbumYr: { value: control.value } };
                }
            }
        };
    }

}