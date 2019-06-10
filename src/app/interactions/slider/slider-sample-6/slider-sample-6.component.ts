import { Component } from '@angular/core';
import { SliderType } from 'igniteui-angular';

@Component({
    selector: "app-slider-sample-6",
    styleUrls: ["./slider-sample-6.component.scss"],
    templateUrl: "./slider-sample-6.component.html"
})
export class SliderSample6Component {
    public type: SliderType = SliderType.RANGE;

    public labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
}
