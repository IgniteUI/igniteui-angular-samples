import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

export interface User
{
    fullName: string;
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
    @ViewChild('registrationForm', { read: NgForm, static: true }) public registrationForm: NgForm;

    public user: User = {
        fullName: '',
        username: '',
        email: '',
        password: ''
    };

    public onSubmit() {
        console.log(this.user);
        this.registrationForm.reset();
    }
}
