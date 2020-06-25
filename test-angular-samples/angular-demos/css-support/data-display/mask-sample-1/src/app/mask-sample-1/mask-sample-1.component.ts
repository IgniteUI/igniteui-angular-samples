import { Component, OnInit } from "@angular/core";
import { Person } from "../model/person";

@Component({
    selector: "app-mask-sample-1",
    styleUrls: ["./mask-sample-1.component.css"],
    templateUrl: "./mask-sample-1.component.html"
})

export class MaskSample1Component implements OnInit {
    public person: Person;
    constructor() {
        this.person = {
            birthday: null,
            name: "John Doe",
            socialSecurityNumber: ""
        };
    }

    public ngOnInit() {
    }

    public validateDate(dateInput, snackbar) {
        if (!this.isDateValid(dateInput.value)) {
            this.notify(snackbar, "Invalid Date", dateInput);
        }
    }

    public validateSSN(ssnInput, snackbar) {
        if (!this.isSSNValid(ssnInput.value)) {
            this.notify(snackbar, "Invalid SSN", ssnInput);
        }
    }

    private isDateValid(date) {
        return (new Date(date).toLocaleString() !== "Invalid Date");
    }

    private isSSNValid(ssn) {
        const ssnPattern = /^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/;
        return (ssn.match(ssnPattern));
    }

    private notify(snackbar, message, input) {
        snackbar.message = message;
        snackbar.show();
    }
}
