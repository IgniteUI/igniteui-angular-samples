import { Component } from '@angular/core';
import { IgxButtonDirective, IgxRippleDirective, IgxDialogComponent } from 'igniteui-angular';

@Component({
    selector: 'app-dialog-sample-1',
    styleUrls: ['./dialog-sample-1.component.scss'],
    templateUrl: './dialog-sample-1.component.html',
    imports: [IgxButtonDirective, IgxRippleDirective, IgxDialogComponent]
})
export class DialogSample1Component { }
