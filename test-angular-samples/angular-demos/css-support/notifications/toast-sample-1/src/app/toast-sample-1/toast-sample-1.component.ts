import { Component, OnInit } from "@angular/core";
import { IgxToastPosition } from "igniteui-angular";

@Component({
    selector: "app-toast-sample-1",
    styleUrls: ["./toast-sample-1.component.css"],
    templateUrl: "./toast-sample-1.component.html"
})
export class ToastSample1Component implements OnInit {
    public toastPosition: IgxToastPosition = IgxToastPosition.Bottom;

    constructor() { }

    public ngOnInit() {
    }

    public showToast(toast, position) {
        switch (position) {
            case "middle":
                this.toastPosition = IgxToastPosition.Middle;
                break;
            case "top":
                this.toastPosition = IgxToastPosition.Top;
                break;
            default:
                this.toastPosition = IgxToastPosition.Bottom;
        }

        toast.show();
    }
}
