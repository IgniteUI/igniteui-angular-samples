import { Component, Directive, Input, ViewChild } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { IgxHierarchicalGridComponent, IgxRowIslandComponent } from 'igniteui-angular';
import { IGridFormGroupCreatedEventArgs } from 'igniteui-angular/lib/grids/common/grid.interface';
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

export function unique(value, index, self) {
    return self.findIndex(v => v.CustomerID === value.CustomerID) === index;
}

@Component({
    selector: 'app-hierarchical-grid-validator-service-extended',
    styleUrls: ['./hierarchical-grid-validator-service-extended.component.scss'],
    templateUrl: './hierarchical-grid-validator-service-extended.component.html'
})
export class HierarchicalGridValidatorServiceExtendedComponent {

    @ViewChild('hierarchicalGrid', { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;
    @ViewChild('childGrid', { static: true })
    private childGrid: IgxRowIslandComponent;

    public data = CUSTOMERS.filter(unique);

    public formCreateHandler(formGroupArgs: IGridFormGroupCreatedEventArgs) {
        const orderDateRecord = formGroupArgs.formGroup.get('OrderDate');
        const requiredDateRecord = formGroupArgs.formGroup.get('RequiredDate');
        const shippedDateRecord = formGroupArgs.formGroup.get('ShippedDate');

        orderDateRecord?.addValidators(this.futureDateValidator());
        requiredDateRecord?.addValidators([this.futureDateValidator(), this.pastDateValidator()]);
        shippedDateRecord?.addValidators([this.futureDateValidator(), this.pastDateValidator()]);
    }

    public get hasTransactions(): boolean {
        return this.hierarchicalGrid.transactions.getAggregatedChanges(false).length > 0 || this.hasChildTransactions;
    }

    public get hasChildTransactions(): boolean {
         return this.childGrid.gridAPI.getChildGrids()
             .find(c => c.transactions.getAggregatedChanges(false).length > 0) !== undefined;
    }

    public commit() {
        const invalidParentTransactions = this.hierarchicalGrid.validation.getInvalid();
        let invalidChildTransactions = [];
        this.childGrid.gridAPI.getChildGrids().forEach((grid) => {
            invalidChildTransactions = [... invalidChildTransactions, ...grid.validation.getInvalid()];
        });
        const invalidTransactions = [...invalidParentTransactions, ...invalidChildTransactions];
        if (invalidTransactions.length > 0 && !confirm('You\'re committing invalid transactions. Are you sure?')) {
            return;
        }

        this.hierarchicalGrid.transactions.commit(this.data);
        this.childGrid.gridAPI.getChildGrids().forEach((grid) => {
            grid.transactions.commit(grid.data);
            grid.validation.clear();
        });
        this.hierarchicalGrid.validation.clear();
    }

    public undo(grid: any) {
        /* exit edit mode and commit changes */
        grid.endEdit(true);
        grid.transactions.undo();
    }

    public redo(grid: any) {
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
