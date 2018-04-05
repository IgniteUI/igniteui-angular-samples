import { Component } from "@angular/core";

@Component({
    selector: "app-input-group-sample-6",
    styleUrls: ["./input-group-sample-6.component.scss"],
    templateUrl: "./input-group-sample-6.component.html"
})
export class InputGroupSample6Component {
    public user = {
        email: "",
        fullName: "",
        password: "",
        phone: ""
    };
}
