import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface User
{
    fullName: FormControl<string>;
    username: FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
}

@Component({
  selector: 'app-reactive-form-validation',
  templateUrl: './reactive-form-validation.component.html',
  styleUrls: ['./reactive-form-validation.component.scss']
})
export class ReactiveFormValidationComponent {
    public registrationForm = new FormGroup<User>({
        fullName: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
        username: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
        email: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
        password: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.minLength(8)] })
    });

    get email() {
        return this.registrationForm.get('email');
    }

    get password() {
        return this.registrationForm.get('password');
    }

    public onSubmit() {
        console.log(this.registrationForm.value);
        this.registrationForm.reset();
    }
}
