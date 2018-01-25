import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-slider-sample-3",
  styleUrls: ["./slider-sample-3.component.css"],
  templateUrl: "./slider-sample-3.component.html"
})
export class SliderSample3Component implements OnInit {
  public task: Task = new Task(10);

  constructor() { }

  public updateTask(event) {
    if (!isNaN(parseInt(event.value, 10))) {
      this.task.completion = event.value;
    } else {
      event.value = this.task.completion;
    }
  }

  public ngOnInit() {
  }

}

class Task {
  constructor(
    public completion: number
  ) {
  }
}
