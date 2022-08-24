import { Component, Directive, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, ValidatorFn } from '@angular/forms';
import { IgxColumnValidator, IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { CUSTOMERS } from '../../data/hierarchical-data';
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

    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    public ngOnInit(): void {
        this.hierarchicalGrid.data = CUSTOMERS;
        for (const item of this.hierarchicalGrid.data) {
            const names = item.CompanyName.split(' ');
            item.FirstName = names[0];
            item.LastName = names[names.length - 1];
            item.FullAddress = `${item.Address}, ${item.City}, ${item.Country}`;
            item.PersonelDetails = `${item.ContactTitle}: ${item.ContactName}`;
            item.CompanysAnnualProfit = (100000 + (Math.random() * Math.floor(1000000))).toFixed(0);
        }
    }

    public formCreateHandler(formGroup: FormGroup) {
        const orderDateRecord = formGroup.get('OrderDate');
        const requiredDateRecord = formGroup.get('RequiredDate');
        const shippedDateRecord = formGroup.get('ShippedDate');

        orderDateRecord.addValidators(this._testDateRecord());
        requiredDateRecord.addValidators(this._testDateRecord(orderDateRecord?.value));
        shippedDateRecord.addValidators(this._testDateRecord(orderDateRecord?.value));
    }

    private _testDateRecord(thresholdVal?: any): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const date = control.value;
            const exceedingThreshold = !!thresholdVal ? date < thresholdVal : false;
            if (!exceedingThreshold) {
                return date < new Date() ? null : { invalidDate: { value: control.value } };
            }
            return { beyondThreshold: { value: control.value } };
        }
    }

}