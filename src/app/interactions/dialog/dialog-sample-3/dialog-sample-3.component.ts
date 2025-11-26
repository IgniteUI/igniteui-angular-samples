import { Component } from '@angular/core';
import { IgxButtonDirective, IgxRippleDirective, IgxDialogComponent, IgxDialogTitleDirective, IgxIconComponent, IgxInputGroupComponent, IgxPrefixDirective, IgxLabelDirective, IgxInputDirective, IgxDialogActionsDirective } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-dialog-sample-3',
    styleUrls: ['./dialog-sample-3.component.scss'],
    templateUrl: './dialog-sample-3.component.html',
    imports: [IgxButtonDirective, IgxRippleDirective, IgxDialogComponent, IgxDialogTitleDirective, IgxIconComponent, FormsModule, IgxInputGroupComponent, IgxPrefixDirective, IgxLabelDirective, IgxInputDirective, IgxDialogActionsDirective]
})
export class DialogSample3Component {

    constructor() { }

    public signIn(event) {
        event.dialog.close();
    }
}
