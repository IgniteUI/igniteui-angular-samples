import { Component, Input, OnInit } from "@angular/core";
import { IgxToastPosition } from "igniteui-angular/main";

@Component({
    selector: "app-toast",
    styleUrls: ["./toast.component.css"],
    templateUrl: "./toast.component.html"
})
export class ToastComponent implements OnInit {

    @Input()
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
