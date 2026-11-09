import { Component } from '@angular/core';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxDialogComponent } from 'igniteui-angular/dialog';

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
