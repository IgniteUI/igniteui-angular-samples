import { Component } from "@angular/core";

@Component({
    selector: 'app-stepper-sample-3',
    styleUrls: ['./stepper-sample-3.component.scss'],
    templateUrl: './stepper-sample-3.component.html'
})
export class StepperSample3Component {
    public stepType = 'full';
    public stepTypes = [
        {
            label: 'Indicator', stepType: 'indicator',
            selected: this.stepType === 'indicator', togglable: true
        },
        {
            label: 'Title', stepType: 'title',
            selected: this.stepType === 'title', togglable: true
        },
        {
            label: 'Full', stepType: 'full',
            selected: this.stepType === 'full', togglable: true
        }
    ];

    public toggleStepType(event) {
        this.stepType = this.stepTypes[event.index].stepType;
    }
}