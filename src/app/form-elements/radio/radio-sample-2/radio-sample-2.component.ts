import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-radio-sample-2",
  styleUrls: ["./radio-sample-2.component.css"],
  templateUrl: "./radio-sample-2.component.html"
})
export class RadioSample2Component implements OnInit {

public title = "Select Background";

public colors = ["Yellow", "Red", "Green", "Transparent"];

public selectedColor: string = this.colors[3];

constructor() { }

public ngOnInit() {
  }

}
