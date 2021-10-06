import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-stepper-sample-1',
    styleUrls: ['./stepper-sample-1.component.scss'],
    templateUrl: './stepper-sample-1.component.html'
})
export class StepperSample1Component {
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
