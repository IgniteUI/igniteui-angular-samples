import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IgxHintDirective, IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxSuffixDirective } from 'igniteui-angular/input-group';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';


interface User
{
    username: FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
}

@Component({
    selector: 'app-reactive-form-validation',
    templateUrl: './reactive-form-validation.component.html',
    styleUrls: ['./reactive-form-validation.component.scss'],
    imports: [FormsModule, ReactiveFormsModule, IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxHintDirective, IgxIconComponent, IgxSuffixDirective, IgxButtonDirective, IgxRippleDirective]
})
export class ReactiveFormValidationComponent {
    public registrationForm: FormGroup<User>;
    public showPassword: boolean = false;

    constructor() {
        const fb = inject(FormBuilder);

        this.registrationForm = fb.group({
            username: ['', { nonNullable: true, validators: [Validators.required] }],
            email: ['', { nonNullable: true, validators: [Validators.required, Validators.email] }],
            password: ['', { nonNullable: true, validators: [Validators.required, Validators.minLength(8)] }]
        });
    }

    public get email() {
        return this.registrationForm.get('email');
    }

    public get password() {
        return this.registrationForm.get('password');
    }

    public get togglePasswordVisibility() {
        return this.showPassword ? 'visibility_off' : 'visibility';
    }

    public onSubmit() {
        console.log(this.registrationForm.value);
        this.registrationForm.reset();
    }
}
