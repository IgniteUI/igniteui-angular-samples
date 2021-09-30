import { Component } from '@angular/core';
// import { IgxStepperOrienatation } from 'igniteui-angular/lib/stepper/common';

@Component({
    selector: 'app-stepper-sample-2',
    styleUrls: ['./stepper-sample-2.component.scss'],
    templateUrl: './stepper-sample-2.component.html'
})
export class StepperSample2Component {
    public orientation = 'Horizontal';
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
            label: 'Horizontal', orientation: 'Horizontal',
            selected: this.orientation === 'Horizontal', togglable: true
        },
        {
            label: 'Vertical', orientation: 'Vertical',
            selected: this.orientation === 'Vertical', togglable: true
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
