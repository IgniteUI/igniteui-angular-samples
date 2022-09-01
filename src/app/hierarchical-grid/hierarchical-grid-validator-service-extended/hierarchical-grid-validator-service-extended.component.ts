import { Component, Directive, Input, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IgxHierarchicalGridComponent } from 'igniteui-angular';
import { CUSTOMERS } from '../../data/hierarchical-data';

export function phoneFormatValidator(phoneReg: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const match = phoneReg.test(control.value);
        return match ? null : { phoneFormat: { value: control.value } } ;
    }
}

@Directive({
    selector: '[phoneFormat]',
    providers: [{ provide: NG_VALIDATORS, useExisting: HGridPhoneFormatDirective, multi: true }]
})
export class HGridPhoneFormatDirective extends Validators {
    @Input('phoneFormat')
    public phoneFormatString = '';

    public validate(control: AbstractControl): ValidationErrors | null {
        return this.phoneFormatString ? phoneFormatValidator(new RegExp(this.phoneFormatString, 'i'))(control)
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
    public data:any;

    public ngOnInit(): void {
        this.data = CUSTOMERS;
        this.hierarchicalGrid.data = this.data;
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

        orderDateRecord.addValidators(this.futureDateValidator());
        requiredDateRecord.addValidators(this.pastDateValidator());
        shippedDateRecord.addValidators(this.pastDateValidator());
    }

    public commit() {
        const invalidTransactions = this.hierarchicalGrid.validation.getInvalid();
        if (invalidTransactions.length > 0) {
            if (confirm('You\'re commiting invalid transactions. Are you sure?')) {
                this.hierarchicalGrid.transactions.commit(this.data);
            }
        } else {
            this.hierarchicalGrid.validation.clear();
        }
    }

    public undo(grid: IgxHierarchicalGridComponent) {
        /* exit edit mode and commit changes */
        grid.endEdit(true);
        grid.transactions.undo();
    }

    public redo(grid: IgxHierarchicalGridComponent) {
        /* exit edit mode and commit changes */
        grid.endEdit(true);
        grid.transactions.redo();
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
