import { Component } from '@angular/core';

@Component({
    selector: 'app-dialog-sample-3',
    styleUrls: ['./dialog-sample-3.component.scss'],
    templateUrl: './dialog-sample-3.component.html',
    standalone: false
})
export class DialogSample3Component {

    constructor() { }

    public signIn(event) {
        event.dialog.close();
    }
}
