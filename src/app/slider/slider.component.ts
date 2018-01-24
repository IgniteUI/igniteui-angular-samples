import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { SliderType } from "igniteui-angular/main";

class Task {
    constructor(
        public title: string,
        public percentCompleted: number
    ) {
    }
}
@Component({
    encapsulation: ViewEncapsulation.None,
    selector: "app-slider",
    styleUrls: ["./slider.component.css"],
    templateUrl: "./slider.component.html"
})
export class SliderComponent implements OnInit {
    public sliderType: SliderType = SliderType.RANGE;

    public rangeValue = {
        lower: 30,
        upper: 60
    };

    public task: Task = new Task("Slider Title", 30);

    constructor() { }

    public updateTask(event) {
        if (!isNaN(parseInt(event.value, 10))) {
            this.task.percentCompleted = event.value;
        } else {
            event.value = this.task.percentCompleted;
        }
    }

    public ngOnInit() {
    }

}
