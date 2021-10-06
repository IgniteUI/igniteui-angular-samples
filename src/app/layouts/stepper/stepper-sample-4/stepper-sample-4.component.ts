import { Component } from '@angular/core';

@Component({
    selector: 'app-stepper-sample-4',
    styleUrls: ['./stepper-sample-4.component.scss'],
    templateUrl: './stepper-sample-4.component.html'
})
export class StepperSample4Component {

    public activeStepChanging(evt) {
        evt.owner.steps[evt.oldIndex].completed = true;
    }
}
