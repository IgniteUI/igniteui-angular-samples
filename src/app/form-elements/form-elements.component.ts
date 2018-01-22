import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-form-elements",
  styleUrls: ["./form-elements.component.css"],
  templateUrl: "./form-elements.component.html"
})
export class FormElementsComponent implements OnInit {

  public user: any;

  constructor() {
    this.user = {
        firstName: "John",
        lastName: "Doe",
        password: "1337s3cr3t"
    };
  }

  public ngOnInit() {
  }

}
