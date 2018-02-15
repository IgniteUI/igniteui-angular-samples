import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "app-label-input",
  styleUrls: ["./label-input.component.css"],
  templateUrl: "./label-input.component.html"
})
export class LabelInputComponent implements OnInit {

  public user: any;

  constructor() {
    this.user = {
        email: "johnDoe@mail.com",
        firstName: "John",
        lastName: "Doe",
        password: "1337s3cr3t"
    };
  }

  public ngOnInit() {
  }

}
