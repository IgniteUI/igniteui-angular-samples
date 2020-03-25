import { Component, OnInit } from "@angular/core";
import {
    IgxDateTimeEditorDirective,
    IgxDateTimeEditorEventArgs,
    IgxInputGroupModule
} from "igniteui-angular";

@Component({
    selector: "datetime-basic",
    styleUrls: ["./datetime-basic.component.scss"],
    templateUrl: "./datetime-basic.component.html"
})
export class DateТimeBasicComponent implements OnInit {
    public date = new Date();

    public ngOnInit(): void {

    }
}
