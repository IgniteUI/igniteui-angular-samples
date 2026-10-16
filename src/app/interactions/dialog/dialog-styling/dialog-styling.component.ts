import { Component, ViewEncapsulation } from '@angular/core';
import { IgxDialogActionsDirective, IgxDialogComponent, IgxDialogTitleDirective } from 'igniteui-angular/dialog';
import { IgxButtonDirective } from 'igniteui-angular/directives';
import { IgxIconComponent } from 'igniteui-angular/icon';
import { IgxInputDirective, IgxInputGroupComponent, IgxLabelDirective, IgxPrefixDirective } from 'igniteui-angular/input-group';

@Component({
    selector: 'app-dialog-styling',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./dialog-styling.component.scss'],
    templateUrl: './dialog-styling.component.html',
    imports: [
        IgxButtonDirective,
        IgxDialogComponent,
        IgxDialogTitleDirective,
        IgxDialogActionsDirective,
        IgxIconComponent,
        IgxInputGroupComponent,
        IgxInputDirective,
        IgxLabelDirective,
        IgxPrefixDirective
    ]
})
export class DialogStylingComponent { }
