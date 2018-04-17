import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-dialog-sample-2",
    styleUrls: ["./dialog-sample-2.component.scss"],
    templateUrl: "./dialog-sample-2.component.html"
})
export class DialogSample2Component implements OnInit {

    constructor() { }

    public onDialogOKSelected(event) {
        event.dialog.close();
    }

    public ngOnInit() { }

}
