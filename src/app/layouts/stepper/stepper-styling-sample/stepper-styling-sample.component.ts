import { Component, ViewChild } from '@angular/core';
import { IgxStepperComponent, IStepChangingEventArgs } from 'igniteui-angular';

@Component({
    selector: 'app-stepper-styling-sample',
    styleUrls: ['./stepper-styling-sample.component.scss'],
    templateUrl: './stepper-styling-sample.component.html',
    standalone: false
})
export class StepperStylingSampleComponent {
    @ViewChild('stepper', { read: IgxStepperComponent })
    public stepper: IgxStepperComponent;

    public activeStepChanging(evt: IStepChangingEventArgs): void {
        this.stepper.steps.forEach(step => {
            if (step.index >= evt.oldIndex && step.index < evt.newIndex) {
                step.completed = true;
            }
        });
    }

    public reset(): void {
        this.stepper.steps.forEach(step => step.completed = false);
        this.stepper.reset();
    }
}
