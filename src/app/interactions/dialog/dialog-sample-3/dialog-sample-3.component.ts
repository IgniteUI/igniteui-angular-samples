import { Component } from '@angular/core';
import { IgxButtonDirective, IgxRippleDirective } from 'igniteui-angular/directives';
import { IgxDialogActionsDirective, IgxDialogComponent, IgxDialogTitleDirective } from 'igniteui-angular/dialog';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxPrefixDirective } from 'igniteui-angular/input-group';
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
