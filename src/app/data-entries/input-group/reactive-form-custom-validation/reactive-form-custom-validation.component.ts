import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

interface User
{
    email: FormControl<string>;
    password: FormControl<string>;
    repeatPassword: FormControl<string>;
}

interface ValidatorErrors
{
    localPart?: boolean;
    domain?: boolean;
    containsEmail?: boolean;
    mismatch?: boolean;
}

@Component({
    selector: 'app-reactive-form-custom-validation',
    templateUrl: './reactive-form-custom-validation.component.html',
    styleUrls: ['./reactive-form-custom-validation.component.scss'],
    standalone: false
})
export class ReactiveFormCustomValidationComponent {
    private pattern = `^(?=.*[A-Za-z])(?=.*\\d)(?=.*[~!@?#+$"'%^&:;*\\-_=.,<>])[A-Za-z\\d~!@?#+$"'%^&:;*\\-_=.,<>]+$`;
    public registrationForm: FormGroup<User>;
    public showPassword: boolean = false;
    public showRepeat: boolean = false;

    constructor(fb: FormBuilder) {
        this.registrationForm = fb.group({
            email: ['', {
                nonNullable: true,
                validators: [
                    Validators.required,
                    Validators.email,
                    this.emailValidator('infragistics')
                ]
            }],
            password: ['', {
                nonNullable: true,
                validators: [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.pattern(this.pattern)
                ]
            }],
            repeatPassword: ['', {
                nonNullable: true,
                validators: [Validators.required]
            }]
        },
        {
            validators: [this.passwordValidator()]
        });
    }

    public get email() {
        return this.registrationForm.get('email');
    }

    public get password() {
        return this.registrationForm.get('password');
    }

    public get repeatPassword() {
        return this.registrationForm.get('repeatPassword');
    }

    public get togglePasswordVisibility() {
        return this.showPassword ? 'visibility_off' : 'visibility';
    }

    public get toggleRepeatVisibility() {
        return this.showRepeat ? 'visibility_off' : 'visibility';
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
            const returnObj: ValidatorErrors = {};

            if (value && localPartRegex.test(value)) {
                returnObj.localPart = true;
            }

            if (value && domainRegex.test(value)) {
                returnObj.domain = true;
            }

            return returnObj;
        }
    }

    private passwordValidator(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const email = control.get('email');
            const password = control.get('password');
            const repeatPassword = control.get('repeatPassword');
            const returnObj: ValidatorErrors = {};

            if (email.value
                && password.value
                && password.value.toLowerCase().includes(email.value)) {
                password.setErrors({ ...password.errors, containsEmail: true });
                returnObj.containsEmail = true;
            }

            if (password
                && repeatPassword
                && password.value !== repeatPassword.value) {
                repeatPassword.setErrors({ ...repeatPassword.errors, mismatch: true });
                returnObj.mismatch = true;
            }

            if (!returnObj.containsEmail && password.errors?.containsEmail) {
                password.setValue(password.value);
            }

            if (!returnObj.mismatch && repeatPassword.errors?.mismatch) {
                repeatPassword.setValue(repeatPassword.value);
            }

            return returnObj;
        }
    }
}
