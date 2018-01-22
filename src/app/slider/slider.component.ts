import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { SliderType } from "igniteui-js-blocks/main";

class Task {
    constructor(
        public title: string,
        public percentCompleted: number
    ) {
    }
}
@Component({
    selector: "app-slider",
    templateUrl: "./slider.component.html",
    styleUrls: ["./slider.component.css"],
    encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {
    public sliderType: SliderType = SliderType.RANGE;

    public rangeValue = {
        lower: 30,
        upper: 60
    };

    public task: Task = new Task("Slider Title", 30);

    public updateTask(event) {
        if (!isNaN(parseInt(event.value, 10))) {
            this.task.percentCompleted = event.value;
        } else {
            event.value = this.task.percentCompleted;
        }
    }

    constructor() { }

    public ngOnInit() {
    }

}
