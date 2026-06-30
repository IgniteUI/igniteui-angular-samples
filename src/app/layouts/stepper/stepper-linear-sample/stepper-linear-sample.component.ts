import { Component } from '@angular/core';
import { IButtonGroupEventArgs, IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxStepActiveIndicatorDirective, IgxStepComponent, IgxStepContentDirective, IgxStepSubtitleDirective, IgxStepTitleDirective, IgxStepperComponent } from 'igniteui-angular/stepper';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective } from 'igniteui-angular/input-group';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxRadioComponent, IgxRadioGroupDirective } from 'igniteui-angular/radio';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-stepper-linear-sample',
    styleUrls: ['./stepper-linear-sample.component.scss'],
    templateUrl: './stepper-linear-sample.component.html',
    imports: [IgxButtonGroupComponent, IgxStepperComponent, IgxStepActiveIndicatorDirective, IgxIconComponent, IgxStepComponent, IgxStepTitleDirective, IgxStepContentDirective, FormsModule, IgxInputGroupComponent, IgxInputDirective, IgxLabelDirective, IgxButtonDirective, IgxStepSubtitleDirective, IgxRadioGroupDirective, IgxRadioComponent]
})
export class StepperLinearSampleComponent {
    public linear = false;

    public user: any = {
        fullName: '',
        email: '',
        city: '',
        street: '',
        city2: '',
        street2: '',
        payment: ''
    };

    public paymentTypes: string[] = [
        'PayPal (n@mail.com; 18/02/2021)',
        'Visa (**** **** **** 1234; 12/23)',
        'MasterCard (**** **** **** 5678; 12/24)'
    ];

    public modes: any[] = [
        {
            label: 'Linear', linear: true,
            selected: this.linear === true, togglable: true
        },
        {
            label: 'Non Linear', linear: false,
            selected: this.linear === false, togglable: true
        }
    ];

    public toggleModes(event: IButtonGroupEventArgs): void {
        this.linear = this.modes[event.index].linear;
    }
}
