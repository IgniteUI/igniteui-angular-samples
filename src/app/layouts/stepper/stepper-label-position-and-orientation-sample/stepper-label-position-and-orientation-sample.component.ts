import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-stepper-label-position-and-orientation-sample',
    styleUrls: ['./stepper-label-position-and-orientation-sample.component.scss'],
    templateUrl: './stepper-label-position-and-orientation-sample.component.html'
})
export class StepperLabelPositionSampleComponent {
    public orientation = 'horizontal';
    public titlePosition = 'bottom';
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

    public stepperTitlePositions = [
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

    public toggleOrientation(event) {
        this.orientation = this.stepperOrientations[event.index].orientation;
    }

    public toggleTitlePosition(event) {
        this.titlePosition = this.stepperTitlePositions[event.index].titlePosition;
    }
}