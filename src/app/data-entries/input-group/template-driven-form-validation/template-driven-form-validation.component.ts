import { Component, ViewChild } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, IgxHintDirective, IgxIconComponent, IgxSuffixDirective, IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular';
import { NgIf } from '@angular/common';

interface User
{
    username: string;
    email: string;
    password: string;
}

@Component({
    selector: 'app-template-driven-form-validation',
    templateUrl: './template-driven-form-validation.component.html',
    styleUrls: ['./template-driven-form-validation.component.scss'],
    imports: [FormsModule, IgxInputGroupComponent, IgxLabelDirective, IgxInputDirective, NgIf, IgxHintDirective, IgxIconComponent, IgxSuffixDirective, IgxButtonDirective, IgxRippleDirective]
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
        return this.showPassword ? 'visibility_off' : 'visibility';
    }

    public onSubmit() {
        console.log(this.user);
        this.registrationForm.reset();
    }
}
