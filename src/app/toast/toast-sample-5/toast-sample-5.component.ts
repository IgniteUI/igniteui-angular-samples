import { Component, OnInit } from "@angular/core";
import { IgxToastPosition } from "igniteui-angular/main";

@Component({
  selector: "app-toast-sample-5",
  styleUrls: ["./toast-sample-5.component.scss"],
  templateUrl: "./toast-sample-5.component.html"
})
export class ToastSample5Component implements OnInit {
  public toastPosition: IgxToastPosition;

  constructor() { }

  public ngOnInit() {
  }

  public show(toast) {
    this.toastPosition = IgxToastPosition.Top;
    toast.show();
  }
}
