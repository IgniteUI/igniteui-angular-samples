import { Component } from '@angular/core';

@Component({
    selector: 'app-input-group-sample-6',
    templateUrl: './input-group-sample-6.component.html',
    styleUrls: ['./input-group-sample-6.component.scss']
})
export class InputGroupSample6Component {
    public user = {
        fullName: "",
        email: "",
        password: "",
        phone: ""
    };
}
