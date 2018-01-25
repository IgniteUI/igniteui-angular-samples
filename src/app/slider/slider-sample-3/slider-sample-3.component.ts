import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider-sample-3',
  templateUrl: './slider-sample-3.component.html',
  styleUrls: ['./slider-sample-3.component.css'],
})
export class SliderSample3Component implements OnInit {
  public task: Task = new Task(10);

  updateTask(event) {
    if (!isNaN(parseInt(event.value, 10))) {
      this.task.completion = event.value;
    } else {
      event.value = this.task.completion;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}

class Task {
  constructor(
    public completion: number
  ) {
  }
}
