import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { RemoteService } from "../../grid/services/remote.service";
import { localData } from "./local-data";

@Component({
    providers: [RemoteService],
    selector: "app-combo-template",
    styleUrls: ["./combo-template.component.scss"],
    templateUrl: "./combo-template.component.html"
})
export class ComboTemplateComponent implements OnInit {
    public lData: any[];

    constructor(public cdr: ChangeDetectorRef) {}

    public ngOnInit() {
        this.lData = localData;
    }
}
