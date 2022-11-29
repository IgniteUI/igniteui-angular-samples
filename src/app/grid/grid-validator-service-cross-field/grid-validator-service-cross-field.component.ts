import { Component, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { CellType, IgxGridComponent, IGridEditEventArgs } from 'igniteui-angular';
import { IGridFormGroupCreatedEventArgs } from 'igniteui-angular/lib/grids/common/grid.interface';
import { employeesData } from '../../data/employeesData';

@Component({
    selector: 'app-grid-validator-service-cross-field',
    styleUrls: ['./grid-validator-service-cross-field.component.scss'],
    templateUrl: './grid-validator-service-cross-field.component.html'
})
export class GridValidatorServiceCrossFieldComponent {

    @ViewChild('grid1', { read: IgxGridComponent })
    public grid: IgxGridComponent;
    public transactionData = JSON.parse(JSON.stringify(employeesData));
    public rowEdit: boolean = true;

    public formCreateHandler(evt: IGridFormGroupCreatedEventArgs) {
        const createdOnRecord = evt.formGroup.get('created_on');
        const lastActiveRecord = evt.formGroup.get('last_activity');
        createdOnRecord.addValidators(this.futureDateValidator());
        lastActiveRecord.addValidators(this.futureDateValidator());
        evt.formGroup.addValidators(this.rowValidator());
    }

    public editHandler(event: IGridEditEventArgs) {
        if (!event.valid) {
            event.cancel = true;
        }
    }

    public commit() {
        const invalidTransactions = this.grid.validation.getInvalid();
        if (invalidTransactions.length > 0 && !confirm('You\'re committing invalid transactions. Are you sure?')) {
            return;
        } 

        this.grid.transactions.commit(this.transactionData);
        this.grid.validation.clear();
    }

    public calculateDealsRatio(dealsWon, dealsLost) {
        if (dealsLost === 0) return dealsWon + 1;
        return Math.round(dealsWon / dealsLost * 100) / 100;
    }

    public getDealsRatio(cell: CellType) {
        const dealsWon = cell.row.cells.find(c => c.column.field === 'deals_won');
        const dealsLost = cell.row.cells.find(c => c.column.field === 'deals_lost');
        const dealsWonValue = dealsWon.editValue != null ? dealsWon.editValue : dealsWon.value;
        const dealsLostValue = dealsLost.editValue != null ? dealsLost.editValue : dealsLost.value;
        return this.calculateDealsRatio(dealsWonValue, dealsLostValue);
    }

    private futureDateValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const date = control.value;
            if(date > new Date()){
                return { beyondThreshold: { value: control.value } };
            }
            return null;
        }
    }

    private rowValidator(): ValidatorFn {
        return (formGroup: FormGroup): ValidationErrors | null => {
            let returnObject = {};
            const createdOnRecord = formGroup.get('created_on');
            const lastActiveRecord = formGroup.get('last_activity');
            const winControl = formGroup.get('deals_won');
            const loseControl = formGroup.get('deals_lost');
            const actualSalesControl = formGroup.get('actual_sales');
    
            // Validate dates
            const curDate = new Date();
            if (new Date(createdOnRecord.value) > curDate) {
                // The created on date shouldn't be greater than current date.
                returnObject['createdInvalid'] =  true;
            }
            if (new Date(lastActiveRecord.value) > curDate) {
                // The last active date shouldn't be greater than current date.
                returnObject['lastActiveInvalid'] = true;
            }
            if (new Date(createdOnRecord.value) > new Date(lastActiveRecord.value)) {
                // The created on date shouldn't be greater than last active date.
                returnObject['createdLastActiveInvalid'] = true;
            }
            
            // Validate deals
            const dealsRatio = this.calculateDealsRatio(winControl.value, loseControl.value);
            if (actualSalesControl.value === 0 && dealsRatio > 0) {
                returnObject['salesZero'] = true;
            }
            if (actualSalesControl.value > 0 && dealsRatio === 0) {
                returnObject['salesNotZero'] = true;
            }
            
            return returnObject;
        };
    }

    public isRowValid(cell: CellType) {
        return !cell.row.validation.errors && !cell.row.cells.some(c => !!c.validation.errors);
    }

    public stateMessage(cell: CellType) {
        const messages = [];

        const cellValidationErrors = cell.row.cells.filter(x => !!x.validation.errors);
        cellValidationErrors.forEach(cell => {
            const cellErrors = cell.validation.errors;
            if (cellErrors?.required) {
                messages.push(`The \`${cell.column.header}\` column is required.`);
            }
            if (cellErrors?.min) {
                messages.push(`A value of at least ${cellErrors.min.min} should be entered for \`${cell.column.header}\` column.`);
            }
            if (cellErrors?.email) {
                messages.push(`Please enter a valid email for \`${cell.column.header}\` column.`);
            }
        });

        const rowErrors = cell.row.validation.errors;
        if (rowErrors?.createdInvalid) {
            messages.push(`The \`Date of Registration\` date cannot be in the future.`);
        }
        if (rowErrors?.lastActiveInvalid) {
            messages.push(`The \`Last Active\` date cannot be in the future.`);
        }
        if (rowErrors?.createdLastActiveInvalid) {
            messages.push(`The \`Date of Registration\` cannot be greater than the \`Last Active\` date.`);
        }
        if (rowErrors?.salesZero) {
            messages.push(`The \`Actual Sales\` cannot be 0 when the deals ratio is greater than 0.`);
        }
        if (rowErrors?.salesNotZero) {
            messages.push(`The \`Actual Sales\` cannot be greater than 0 when the deals ratio is 0.`);
        }

        if (messages.length === 0 && this.isRowValid(cell)) {
            messages.push('OK');
        }

        return messages;
    }
}
