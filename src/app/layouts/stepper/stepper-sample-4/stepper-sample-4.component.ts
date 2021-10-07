import { Component, ViewChild } from '@angular/core';
import { IgxStepperComponent } from 'igniteui-angular';

@Component({
    selector: 'app-stepper-sample-4',
    styleUrls: ['./stepper-sample-4.component.scss'],
    templateUrl: './stepper-sample-4.component.html'
})
export class StepperSample4Component {
    @ViewChild('stepper', { read: IgxStepperComponent })
    public stepper: IgxStepperComponent;

    public activeStepChanging(evt) {
        this.stepper.steps.forEach(step => {
            if (step.index >= evt.oldIndex && step.index < evt.newIndex) {
                step.completed = true;
            }
        });
    }

    public reset() {
        this.stepper.steps.forEach(step => step.completed = false);
        this.stepper.reset();
    }
}
