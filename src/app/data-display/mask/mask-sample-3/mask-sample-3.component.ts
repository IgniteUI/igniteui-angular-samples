import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mask-sample-3",
  styleUrls: ["./mask-sample-3.component.scss"],
  templateUrl: "./mask-sample-3.component.html"
})
export class MaskSample3Component implements OnInit {
  public socialSecurityNumber: string = "123-45-6789";
  public includeLiterals: boolean = true;

  constructor() { }

  public clear() {
    this.socialSecurityNumber = "";
  }

  public ngOnInit() {
  }
}
