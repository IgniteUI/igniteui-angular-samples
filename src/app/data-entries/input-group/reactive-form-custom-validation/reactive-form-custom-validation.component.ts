import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export interface User
{
    username: FormControl<string>;
}

@Component({
  selector: 'app-reactive-form-custom-validation',
  templateUrl: './reactive-form-custom-validation.component.html',
  styleUrls: ['./reactive-form-custom-validation.component.scss']
})
export class ReactiveFormCustomValidationComponent {
    public registrationForm = new FormGroup<User>({
        username: new FormControl<string>('', { nonNullable: true, validators: [this.usernameValidator('infragistics')] })
    });

    get username() {
        return this.registrationForm.get('username');
    }

    private usernameValidator(val: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (control.value?.toLowerCase() === val) {
                return { username: true };
            }

            return null;
        }
    }
}
