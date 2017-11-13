import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SliderType } from 'igniteui-js-blocks/main';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {
    public sliderType: SliderType = SliderType.RANGE;

    public rangeValue = {
        lower: 30,
        upper: 60
    };

    public task: Task = new Task('Slider Title', 30);

    constructor() { }

    ngOnInit() {
    }

}

class Task {
    constructor (
        public title: string,
        public percentCompleted: number
    ) {
    }
}
