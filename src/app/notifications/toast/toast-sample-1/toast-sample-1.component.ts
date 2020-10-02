import { Component, OnInit } from "@angular/core";
import { IgxToastPosition } from "igniteui-angular";

@Component({
    selector: "app-toast-sample-1",
    styleUrls: ["./toast-sample-1.component.scss"],
    templateUrl: "./toast-sample-1.component.html"
})
export class ToastSample1Component implements OnInit {
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
