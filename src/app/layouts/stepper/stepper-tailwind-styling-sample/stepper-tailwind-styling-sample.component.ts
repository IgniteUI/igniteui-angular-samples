import { Component, ViewChild } from '@angular/core';
import { IgxStepperComponent, IStepChangingEventArgs, IgxStepActiveIndicatorDirective, IgxIconComponent, IgxStepCompletedIndicatorDirective, IgxStepComponent, IgxStepTitleDirective, IgxStepSubtitleDirective, IgxStepContentDirective, IgxButtonDirective } from 'igniteui-angular';

@Component({
    selector: 'app-stepper-tailwind-styling-sample',
    styleUrls: ['./stepper-tailwind-styling-sample.component.scss'],
    templateUrl: './stepper-tailwind-styling-sample.component.html',
    imports: [IgxStepperComponent, IgxStepActiveIndicatorDirective, IgxIconComponent, IgxStepCompletedIndicatorDirective, IgxStepComponent, IgxStepTitleDirective, IgxStepSubtitleDirective, IgxStepContentDirective, IgxButtonDirective]
})
export class StepperTailwindStylingSampleComponent {
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
