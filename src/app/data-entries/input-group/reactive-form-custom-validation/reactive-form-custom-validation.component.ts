import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

export interface User
{
    username: FormControl<string>;
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
        username: new FormControl<string>('', {
            nonNullable: true,
            validators: [
                Validators.required,
                this.usernameValidator('infragistics')
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
        validators: [this.passwordValidator(), this.matchPasswordsValidator()]
    });


    get username() {
        return this.registrationForm.get('username');
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

    private usernameValidator(val: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (control.value?.toLowerCase().includes(val)) {
                return { username: true };
            }

            return null;
        }
    }

    private passwordValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const username = control.get('username');
            const password = control.get('password');

            if (username.value &&
                password.value &&
                password.value.toLowerCase().includes(username.value)) {

                const errors = { ...password.errors };
                errors.password = true;
                password.setErrors(errors);

                return { password: true };
            }

            if (password.errors) {

                if (password.errors.password) {
                    delete password.errors.password;
                }

                if (!Object.keys(password.errors).length) {
                    password.setErrors(null);
                }
            }

            return null;
        }
    }

    private matchPasswordsValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const password = control.get('password');
            const repeatPassword = control.get('repeatPassword');

            if (password &&
                repeatPassword &&
                password.value !== repeatPassword.value) {

                const errors = { ...repeatPassword.errors };
                errors.match = true;
                repeatPassword.setErrors(errors);

                return { match: true };
            }

            if (repeatPassword.errors) {

                if (repeatPassword.errors.match) {
                    delete repeatPassword.errors.match;
                }

                if (!Object.keys(repeatPassword.errors).length) {
                    repeatPassword.setErrors(null);
                }
            }

            return null;
        }
    }
}
