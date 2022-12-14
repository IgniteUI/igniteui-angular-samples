import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export interface User
{
    email: FormControl<string>;
    password: FormControl<string>;
    repeatPassword: FormControl<string>;
}

@Component({
  selector: 'app-reactive-form-custom-validation',
  templateUrl: './reactive-form-custom-validation.component.html',
  styleUrls: ['./reactive-form-custom-validation.component.scss']
})
export class ReactiveFormCustomValidationComponent {
    private pattern = `^(?=.*[A-Za-z])(?=.*\\d)(?=.*[~!@?#+$"'%^&:;*\\-_=.,<>])[A-Za-z\\d~!@?#+$"'%^&:;*\\-_=.,<>]+$`;

    public registrationForm = new FormGroup<User>({
        email: new FormControl<string>('', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.email,
                this.emailValidator('infragistics')
            ]
        }),
        password: new FormControl<string>('', {
            nonNullable: true,
            validators: [
                Validators.required,
                Validators.minLength(8),
                Validators.pattern(this.pattern)
            ]
        }),
        repeatPassword: new FormControl<string>('', {
            nonNullable: true,
            validators: [Validators.required]
        })
    },
    {
        validators: [this.passwordValidator()]
    });


    get email() {
        return this.registrationForm.get('email');
    }

    get password() {
        return this.registrationForm.get('password');
    }

    get repeatPassword() {
        return this.registrationForm.get('repeatPassword');
    }

    public onSubmit() {
        console.log(this.registrationForm.value);
        this.registrationForm.reset();
    }

    private emailValidator(val: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const value = control.value?.toLowerCase();
            const localPartRegex = new RegExp(`(?<=(${val})).*[@]`);
            const domainRegex = new RegExp(`(?<=[@])(?=.*(${val}))`);

            const returnObj = {};

            if (value && localPartRegex.test(value)) {
                returnObj['localPart'] = true;
            }

            if (value && domainRegex.test(value)) {
                returnObj['domain'] = true;
            }

            return returnObj;
        }
    }

    private passwordValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const email = control.get('email');
            const password = control.get('password');
            const repeatPassword = control.get('repeatPassword');
            const returnObj = {};

            if (email.value &&
                password.value &&
                password.value.toLowerCase().includes(email.value)) {

                password.setErrors({ ...password.errors, containsEmail: true });

                returnObj['containsEmail'] = true;
            }

            if (password &&
                repeatPassword &&
                password.value !== repeatPassword.value) {

                repeatPassword.setErrors({ ...repeatPassword.errors, mismatch: true });

                returnObj['mismatch'] = true;
            }

            if (!returnObj['containsEmail'] &&
                password.errors?.containsEmail &&
                Object.keys(password.errors).length === 1) {

                password.setErrors(null);
            }

            if (!returnObj['mismatch'] &&
                repeatPassword.errors?.mismatch &&
                Object.keys(repeatPassword.errors).length === 1) {

                repeatPassword.setErrors(null);
            }

            return returnObj;
        }
    }
}
