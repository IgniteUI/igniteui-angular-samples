import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxDatePickerComponent, IgxPickerToggleComponent, IgxSuffixDirective, IgxIconComponent, IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';

export interface registrationFormGroup
{
  fName: FormControl<string>;
  lName: FormControl<string>;
  email: FormControl<string>;
  number?: FormControl<number|null>;
  company?: FormControl<string|null>;
  birthDate?: FormControl<string|null>;
  password: FormControl<string>;
}

@Component({
    selector: 'app-typed-form',
    templateUrl: './typed-form.component.html',
    styleUrls: ['./typed-form.component.scss'],
    imports: [FormsModule, ReactiveFormsModule, IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxDatePickerComponent, IgxPickerToggleComponent, IgxSuffixDirective, IgxIconComponent, IgxButtonDirective, IgxRippleDirective]
})
export class TypedFormComponent {
    public minDate = new Date();
    public maxDate = new Date(new Date(this.minDate.getFullYear(), this.minDate.getMonth(), this.minDate.getDate()));

    registerForm = new FormGroup<registrationFormGroup>({
        fName: new FormControl<string>('', { nonNullable: true }),
        lName: new FormControl<string>('', { nonNullable: true }),
        email: new FormControl<string>('', { nonNullable: true}),
        number: new FormControl<number>(null, { nonNullable: false}),
        company: new FormControl<string>('', { nonNullable: false}),
        birthDate: new FormControl<string>('', { nonNullable: false}),
        password: new FormControl<string>('', { nonNullable: false})
    });

    constructor() { }

    public onSubmit() {
        console.log(this.registerForm.value);
        this.registerForm.reset();
    }
}
