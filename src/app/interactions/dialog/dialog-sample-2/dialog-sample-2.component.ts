import { Component } from '@angular/core';
import { IgxButtonDirective, IgxRippleDirective, IgxDialogComponent } from 'igniteui-angular';

@Component({
    selector: 'app-dialog-sample-2',
    styleUrls: ['./dialog-sample-2.component.scss'],
    templateUrl: './dialog-sample-2.component.html',
    imports: [IgxButtonDirective, IgxRippleDirective, IgxDialogComponent]
})
export class DialogSample2Component {

    constructor() { }

    public onDialogOKSelected(event) {
        event.dialog.close();
    }
}
