import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-checkbox-sample-2",
  styleUrls: ["./checkbox-sample-2.component.scss"],
  templateUrl: "./checkbox-sample-2.component.html"

})
export class CheckboxSample2Component implements OnInit {
  public tasks = [
    { done: true, description: "Research" },
    { done: true, description: "Implement" },
    { done: false, description: "Test" }
  ];

  constructor() { }

  public ngOnInit() {
  }

}
