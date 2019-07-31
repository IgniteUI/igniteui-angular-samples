import { Component } from "@angular/core";

@Component({
    // tslint:disable-next-line:component-selector
    selector: "app-expansion-styling",
    styleUrls: ["./expansion-styling.component.scss"],
    templateUrl: "./expansion-styling.component.html"
})
export class ExpansionPanelStylingComponent {

    public user = {
        email: "",
        fullName: "",
        phone: undefined
    };
}
