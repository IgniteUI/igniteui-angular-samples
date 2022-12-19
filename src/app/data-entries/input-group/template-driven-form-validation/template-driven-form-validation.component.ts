import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

interface User
{
    username: string;
    email: string;
    password: string;
}

@Component({
  selector: 'app-template-driven-form-validation',
  templateUrl: './template-driven-form-validation.component.html',
  styleUrls: ['./template-driven-form-validation.component.scss']
})
export class TemplateDrivenFormValidationComponent {
    @ViewChild(NgForm, { static: true })
    public registrationForm: NgForm;

    public showPassword: boolean = false;

    public user: User = {
        username: '',
        email: '',
        password: ''
    };

    public get togglePasswordVisibility() {
        return this.showPassword ? 'visibility' : 'visibility_off';
    }

    public onSubmit() {
        console.log(this.user);
        this.registrationForm.reset();
    }
}
