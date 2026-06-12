/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ColumnPinningPosition } from 'igniteui-angular/core';
import { CellType, IGridEditEventArgs, IGridFormGroupCreatedEventArgs, IPinningConfig, IgxCellEditorTemplateDirective, IgxCellTemplateDirective, IgxColumnComponent, IgxColumnMaxValidatorDirective, IgxColumnMinValidatorDirective, IgxColumnRequiredValidatorDirective } from 'igniteui-angular/grids/core';
import { IgxTreeGridComponent } from 'igniteui-angular/grids/tree-grid';
import { IgxSwitchComponent } from 'igniteui-angular/switch';
import { IgxSelectComponent, IgxSelectItemComponent } from 'igniteui-angular/select';
import { IgxButtonDirective, IgxFocusDirective, IgxTooltipDirective, IgxTooltipTargetDirective } from 'igniteui-angular/directives';
import { generateEmployeeDetailedFlatData } from '../data/employees-flat-detailed';
import { IgxPreventDocumentScrollDirective } from '../../directives/prevent-scroll.directive';


@Component({
    selector: 'app-tree-grid-validator-service-cross-field-component',
    styleUrls: ['tree-grid-validator-service-cross-field.component.scss'],
    templateUrl: 'tree-grid-validator-service-cross-field.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [IgxSwitchComponent, FormsModule, IgxTreeGridComponent, IgxPreventDocumentScrollDirective, IgxColumnComponent, IgxColumnRequiredValidatorDirective, IgxColumnMinValidatorDirective, IgxColumnMaxValidatorDirective, IgxCellEditorTemplateDirective, IgxSelectComponent, ReactiveFormsModule, IgxFocusDirective, IgxSelectItemComponent, IgxCellTemplateDirective, IgxTooltipTargetDirective, IgxTooltipDirective, IgxButtonDirective]
})
export class TreeGridValidatorServiceCrossFieldComponent implements OnInit {
    @ViewChild('treeGrid', { static: true })
    public treeGrid: IgxTreeGridComponent;

    public rowEdit: boolean = false;
    public pinningConfig: IPinningConfig = { columns: ColumnPinningPosition.End };

    public data: any[];
    public countryData: Map<string, Record<string, string>>;
    public countries = [];
    public cities = [];

    public ngOnInit(): void {
        this.data = generateEmployeeDetailedFlatData();
        this.countryData = new Map(this.data.map(i => [i.Country, {} as Record<string, string>]));
        this.data.forEach(rec => {
            const country = rec.Country;
            const city = rec.City;
            const countryCities = this.countryData.get(country);
            if (countryCities) {
                countryCities[city] = city;
            }
        });
        this.countries = [...new Set(this.data.map(x => x.Country))];
        this.cities = [...new Set(this.data.map(x => x.City))];
    }

    public editHandler(event: IGridEditEventArgs) {
        if (!event.valid) {
            event.cancel = true;
        }
    }

    public formCreateHandler(evt: IGridFormGroupCreatedEventArgs) {
        evt.formGroup.addValidators(this.rowValidator());
    }

    private rowValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const formGroup = control as FormGroup;
            const returnObject: ValidationErrors = {};

            const age = formGroup.get('Age');
            const hireDate = formGroup.get('HireDate');
            if((new Date().getFullYear() - new Date(hireDate?.value).getFullYear()) + 18 >= age?.value) {
                returnObject['ageLessHireDate'] = true;
            }

            const city = formGroup.get('City');
            const country = formGroup.get('Country');
            const validCities = this.countryData.get(country?.value);
            if (!validCities || !city?.value || !validCities[city.value]) {
                returnObject['invalidAddress'] = true;
            }

            return Object.keys(returnObject).length ? returnObject : null;
        };
    }

    public isRowValid(cell: CellType) {
        return !cell.row.validation?.errors && !cell.row.cells?.some(c => !!c.validation?.errors);
    }

    public stateMessage(cell: CellType) {
        const messages = [];

        const cellValidationErrors = cell.row.cells?.filter(x => !!x.validation?.errors);
        cellValidationErrors?.forEach(cell => {
            const cellErrors = cell.validation?.errors;
            if (cellErrors?.required) {
                messages.push(`The \`${cell.column.header}\` column is required.`);
            }
            if (cellErrors?.min) {
                messages.push(`A value of at least ${cellErrors.min.min} should be entered for \`${cell.column.header}\` column.`);
            }
            if (cellErrors?.max) {
                messages.push(`A value of at maximum ${cellErrors.max.max} should be entered for \`${cell.column.header}\` column.`);
            }
        });

        const rowErrors = cell.row.validation?.errors;
        if (rowErrors?.ageLessHireDate) {
            messages.push(`\`Age\` cannot be less than 18 when the person was hired.`);
        }
        if (rowErrors?.invalidAddress) {
            messages.push(`Selected \`City\` does not match the \`Country\`.`);
        }

        if (messages.length === 0 && this.isRowValid(cell)) {
            messages.push('OK');
        }

        return messages;
    }


    public commit() {
        const invalidTransactions = this.treeGrid.validation.getInvalid();
        if (invalidTransactions.length > 0 && !confirm('You\'re committing invalid transactions. Are you sure?')) {
            return;
        }

        this.treeGrid.transactions.commit(this.data);
        this.treeGrid.validation.clear();
    }
}
