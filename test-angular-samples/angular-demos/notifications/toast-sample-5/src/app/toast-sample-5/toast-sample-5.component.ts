import { Component } from "@angular/core";
import { IgxToastPosition } from "igniteui-angular";

@Component({
  selector: "app-toast-sample-5",
  styleUrls: ["./toast-sample-5.component.scss"],
  templateUrl: "./toast-sample-5.component.html"
})

export class ToastSample5Component {
  public toastPosition: IgxToastPosition = IgxToastPosition.Bottom;

  public show(toast) {
    this.toastPosition = IgxToastPosition.Top;
    toast.show();
  }
}
