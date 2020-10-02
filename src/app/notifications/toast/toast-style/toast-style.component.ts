import { Component, OnInit } from "@angular/core";
import { IgxToastPosition } from "igniteui-angular";

@Component({
    selector: "app-toast-style",
    styleUrls: ["./toast-style.component.scss"],
    templateUrl: "./toast-style.component.html"
})
export class ToastStyleComponent implements OnInit {
    public toastPosition: IgxToastPosition = "bottom";

    constructor() { }

    public ngOnInit() {
    }

    public showToast(toast, position) {
        switch (position) {
            case "middle":
                this.toastPosition = "middle";
                break;
            case "top":
                this.toastPosition = "top";
                break;
            default:
                this.toastPosition = "bottom";
        }

        toast.show();
    }
}
