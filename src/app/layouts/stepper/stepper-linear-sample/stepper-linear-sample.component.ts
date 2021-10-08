import { Component } from '@angular/core';
// import { IgxStepperOrienatation } from 'igniteui-angular/lib/stepper/common';

@Component({
    selector: 'app-stepper-linear-sample',
    styleUrls: ['./stepper-linear-sample.component.scss'],
    templateUrl: './stepper-linear-sample.component.html'
})
export class StepperLinearSampleComponent {
    public orientation = 'horizontal';
    public linear = false;

    public user = {
        fullName: '',
        email: '',
        city: '',
        street: '',
        city2: '',
        street2: '',
        payment: ''
    };

    public paymentTypes = [
        'PayPal (n@mail.com; 18/02/2021)',
        'Visa (**** **** **** 1234; 12/23)',
        'MasterCard (**** **** **** 5678; 12/24)'
    ];

    public stepperOrientations = [
        {
            label: 'Horizontal', orientation: 'horizontal',
            selected: this.orientation === 'horizontal', togglable: true
        },
        {
            label: 'Vertical', orientation: 'vertical',
            selected: this.orientation === 'vertical', togglable: true
        }
    ];

    public modes = [
        {
            label: 'Linear', linear: true,
            selected: this.linear === true, togglable: true
        },
        {
            label: 'Non Linear', linear: false,
            selected: this.linear === false, togglable: true
        }
    ];

    public toggleOrientation(event) {
        this.orientation = this.stepperOrientations[event.index].orientation;
    }

    public toggleModes(event) {
        this.linear = this.modes[event.index].linear;
    }
}
