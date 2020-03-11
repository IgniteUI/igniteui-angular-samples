import { Component, OnInit } from "@angular/core";
import { IgxToastPosition } from "igniteui-angular";

@Component({
    selector: "app-toast-style",
    styleUrls: ["./toast-style.component.scss"],
    templateUrl: "./toast-style.component.html"
})
export class ToastStyleComponent implements OnInit {
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
