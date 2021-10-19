import { Component } from '@angular/core';

@Component({
    selector: 'app-stepper-stepstypes-sample',
    styleUrls: ['./stepper-stepstypes-sample.component.scss'],
    templateUrl: './stepper-stepstypes-sample.component.html'
})
export class StepperStepTypeSampleComponent {
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