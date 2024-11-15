import { Component } from '@angular/core';
import { IButtonGroupEventArgs, IgxStepperOrientation, IgxStepperTitlePosition } from 'igniteui-angular';

@Component({
    selector: 'app-stepper-label-position-and-orientation-sample',
    styleUrls: ['./stepper-label-position-and-orientation-sample.component.scss'],
    templateUrl: './stepper-label-position-and-orientation-sample.component.html',
    standalone: false
})
export class StepperLabelPositionAndOrientationSampleComponent {
    public orientation: IgxStepperOrientation = 'horizontal';
    public titlePosition: IgxStepperTitlePosition = 'bottom';
    public stepperOrientations: any[] = [
        {
            label: 'Horizontal', orientation: 'horizontal',
            selected: this.orientation === 'horizontal', togglable: true
        },
        {
            label: 'Vertical', orientation: 'vertical',
            selected: this.orientation === 'vertical', togglable: true
        }
    ];

    public stepperTitlePositions: any[] = [
        {
            label: 'Bottom', titlePosition: 'bottom',
            selected: this.titlePosition === 'bottom', togglable: true
        },
        {
            label: 'Top', titlePosition: 'top',
            selected: this.titlePosition === 'top', togglable: true
        },
        {
            label: 'End', titlePosition: 'end',
            selected: this.titlePosition === 'end', togglable: true
        },
        {
            label: 'Start', titlePosition: 'start',
            selected: this.titlePosition === 'start', togglable: true
        }
    ];

    public toggleOrientation(event: IButtonGroupEventArgs): void {
        this.orientation = this.stepperOrientations[event.index].orientation;
    }

    public toggleTitlePosition(event: IButtonGroupEventArgs): void {
        this.titlePosition = this.stepperTitlePositions[event.index].titlePosition;
    }
}
