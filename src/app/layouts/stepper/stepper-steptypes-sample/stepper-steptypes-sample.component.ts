import { Component } from '@angular/core';
import { IButtonGroupEventArgs, IgxButtonGroupComponent } from 'igniteui-angular/button-group';
import { IgxStepComponent, IgxStepTitleDirective, IgxStepType, IgxStepperComponent } from 'igniteui-angular/stepper';

@Component({
    selector: 'app-stepper-steptypes-sample',
    styleUrls: ['./stepper-steptypes-sample.component.scss'],
    templateUrl: './stepper-steptypes-sample.component.html',
    imports: [IgxButtonGroupComponent, IgxStepperComponent, IgxStepComponent, IgxStepTitleDirective]
})
export class StepperStepTypesSampleComponent {
    public stepType: IgxStepType = 'full';
    public stepTypes: any[] = [
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

    public toggleStepType(event: IButtonGroupEventArgs): void {
        this.stepType = this.stepTypes[event.index].stepType;
    }
}
